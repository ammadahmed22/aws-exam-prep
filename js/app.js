function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

class QuizApp {
    constructor() {
        this.currentQuestionIndex = 0;
        this.questions = [];
        this.userAnswers = [];
        this.score = 0;
        this.questionsPerExam = 65;

        // DOM Elements
        this.mainHeader = document.querySelector('.main-header');
        this.quizHeader = document.querySelector('.quiz-header');
        this.welcomeScreen = document.getElementById('welcome-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.progressBar = document.getElementById('progress');
        this.progressText = document.getElementById('progress-text');
        this.questionCountInput = document.getElementById('question-count');
        this.savedExamsList = document.getElementById('saved-exams-list');
        this.toastContainer = document.getElementById('toast-container');
        this.themeToggle = document.getElementById('theme-toggle');

        // Buttons
        this.startButton = document.getElementById('start-exam');
        this.prevButton = document.getElementById('prev-btn');
        this.submitButton = document.getElementById('submit-btn');
        this.nextButton = document.getElementById('next-btn');
        this.restartButton = document.getElementById('restart-btn');
        this.saveExamButton = document.getElementById('save-exam-btn');
        
        // Timer properties
        this.startTime = null;
        this.questionStartTime = null;
        this.questionTimes = [];
        this.timerInterval = null;
        
        // Copy button elements
        this.copyQuestionBtn = document.getElementById('copy-question-btn');
        this.copyIncorrectBtn = document.getElementById('copy-incorrect-btn');
        
        // Timer display elements
        this.totalTimeDisplay = document.getElementById('total-time');
        this.avgTimeDisplay = document.getElementById('avg-time');
        
        this.init();
    }

    init() {
        // Update welcome screen with total questions available
        const totalQuestions = window.quizData.getTotalQuestions();
        const examDescription = document.getElementById('exam-description');
        if (examDescription) {
            examDescription.textContent = `Select the number of questions to begin. The exam pulls from a pool of ${totalQuestions} questions.`;
        }
        
        this.progressText.textContent = `Question 0/${this.questionsPerExam}`;
        
        this.loadSavedExams();
        this.initTheme();
        
        // Bind event listeners
        this.startButton.addEventListener('click', () => this.startExam());
        this.prevButton.addEventListener('click', () => this.showPreviousQuestion());
        this.submitButton.addEventListener('click', () => this.submitAnswer());
        this.nextButton.addEventListener('click', () => this.showNextQuestion());
        this.restartButton.addEventListener('click', () => this.restartExam());
        this.saveExamButton.addEventListener('click', () => this.saveExam());
        this.copyQuestionBtn.addEventListener('click', () => this.copyCurrentQuestion());
        this.copyIncorrectBtn.addEventListener('click', () => this.copyIncorrectQuestions());
        this.themeToggle.addEventListener('change', () => this.toggleTheme());

        this.questionCountInput.addEventListener('change', () => {
            let value = parseInt(this.questionCountInput.value);
            if (isNaN(value) || value < 1) value = 1;
            const maxQuestions = window.quizData.getTotalQuestions();
            if (value > maxQuestions) value = maxQuestions;
            this.questionCountInput.value = value;
        });
    }

    initTheme() {
        const darkMode = localStorage.getItem('darkMode') === 'true';
        this.themeToggle.checked = darkMode;
        if (darkMode) {
            document.body.classList.add('dark-mode');
        }
    }

    toggleTheme() {
        if (this.themeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
    }

    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;

        this.toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 100);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                this.toastContainer.removeChild(toast);
            }, 500);
        }, 3000);
    }

    loadSavedExams() {
        const savedExams = JSON.parse(localStorage.getItem('savedExams') || '[]');
        this.savedExamsList.innerHTML = '';
        
        if (savedExams.length === 0) {
            this.savedExamsList.innerHTML = '<p>No saved exams found.</p>';
            return;
        }
        
        savedExams.forEach((exam, index) => {
            const examElement = document.createElement('div');
            examElement.className = 'saved-exam-item';
            
            const date = new Date(exam.saveDate);
            const formattedDate = date.toLocaleString();
            
            examElement.innerHTML = `
                <div class="saved-exam-info">
                    <p><strong>Saved:</strong> ${formattedDate}</p>
                    <p><strong>Progress:</strong> ${exam.currentQuestionIndex + 1}/${exam.questions.length} questions</p>
                </div>
                <div class="saved-exam-actions">
                    <button class="btn primary-btn resume-exam" data-index="${index}">Resume</button>
                    <button class="btn secondary-btn delete-exam" data-index="${index}">Delete</button>
                </div>
            `;
            
            this.savedExamsList.appendChild(examElement);
        });
        
        this.savedExamsList.querySelectorAll('.resume-exam').forEach(button => {
            button.addEventListener('click', (e) => this.resumeExam(parseInt(e.target.dataset.index)));
        });
        
        this.savedExamsList.querySelectorAll('.delete-exam').forEach(button => {
            button.addEventListener('click', (e) => this.deleteExam(parseInt(e.target.dataset.index)));
        });
    }

    saveExam() {
        const savedExams = JSON.parse(localStorage.getItem('savedExams') || '[]');
        const examData = {
            questions: this.questions,
            userAnswers: this.userAnswers,
            currentQuestionIndex: this.currentQuestionIndex,
            saveDate: new Date().toISOString()
        };
        
        savedExams.push(examData);
        localStorage.setItem('savedExams', JSON.stringify(savedExams));
        this.loadSavedExams();
        this.showToast('Exam saved successfully!');
    }

    resumeExam(index) {
        const savedExams = JSON.parse(localStorage.getItem('savedExams') || '[]');
        const examData = savedExams[index];
        
        this.questions = examData.questions;
        this.userAnswers = examData.userAnswers;
        this.currentQuestionIndex = examData.currentQuestionIndex;
        this.questionsPerExam = this.questions.length;
        
        this.mainHeader.style.display = 'none';
        this.quizHeader.style.display = 'flex';
        this.welcomeScreen.classList.remove('active');
        this.resultsScreen.classList.remove('active');
        this.quizScreen.classList.add('active');
        this.showQuestion();
    }

    deleteExam(index) {
        const savedExams = JSON.parse(localStorage.getItem('savedExams') || '[]');
        savedExams.splice(index, 1);
        localStorage.setItem('savedExams', JSON.stringify(savedExams));
        this.loadSavedExams();
        this.showToast('Saved exam deleted.', 'danger');
    }

    startExam() {
        let questionCount = parseInt(this.questionCountInput.value);
        const maxQuestions = window.quizData.getTotalQuestions();
        if (isNaN(questionCount) || questionCount < 1) questionCount = 1;
        if (questionCount > maxQuestions) questionCount = maxQuestions;
        
        this.questionsPerExam = questionCount;
        this.questions = window.quizData.getRandomQuestions(this.questionsPerExam);
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.currentQuestionIndex = 0;
        this.score = 0;
        
        this.startTime = Date.now();
        this.questionStartTime = this.startTime;
        this.questionTimes = [];
        this.startTimer();
        
        this.mainHeader.style.display = 'none';
        this.quizHeader.style.display = 'flex';
        this.welcomeScreen.classList.remove('active');
        this.quizScreen.classList.add('active');
        this.showQuestion();
    }

    startTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        this.timerInterval = setInterval(() => {
            const elapsed = Date.now() - this.startTime;
            const minutes = Math.floor(elapsed / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);
            
            const timerDisplay = document.getElementById('timer');
            if (timerDisplay) {
                timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            }
        }, 1000);
    }

    showQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        this.questionText.textContent = `${this.currentQuestionIndex + 1}. ${question.question}`;
        
        this.optionsContainer.innerHTML = '';
        
        question.options.forEach((option) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            
            if (this.userAnswers[this.currentQuestionIndex]) {
                const isMultiple = window.quizData.isMultipleAnswer(question);
                if (isMultiple) {
                    if (this.userAnswers[this.currentQuestionIndex].includes(option)) {
                        optionElement.classList.add('selected');
                    }
                } else if (this.userAnswers[this.currentQuestionIndex] === option) {
                    optionElement.classList.add('selected');
                }
            }
            
            optionElement.addEventListener('click', () => this.handleOptionClick(optionElement, option));
            this.optionsContainer.appendChild(optionElement);
        });

        this.updateProgress();
        
        this.prevButton.disabled = this.currentQuestionIndex === 0;
        this.nextButton.disabled = !this.userAnswers[this.currentQuestionIndex];
        this.submitButton.disabled = !!this.userAnswers[this.currentQuestionIndex];
        
        this.questionStartTime = Date.now();
        this.copyQuestionBtn.style.display = 'none';
    }

    handleOptionClick(optionElement, selectedOption) {
        const question = this.questions[this.currentQuestionIndex];
        const isMultiple = window.quizData.isMultipleAnswer(question);
        
        if (isMultiple) {
            optionElement.classList.toggle('selected');
            const selectedOptions = Array.from(this.optionsContainer.querySelectorAll('.option.selected'))
                .map(opt => opt.textContent);
            this.userAnswers[this.currentQuestionIndex] = selectedOptions.length > 0 ? selectedOptions : null;
        } else {
            this.optionsContainer.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            optionElement.classList.add('selected');
            this.userAnswers[this.currentQuestionIndex] = selectedOption;
        }

        this.submitButton.disabled = !this.userAnswers[this.currentQuestionIndex];
    }

    submitAnswer() {
        if (!this.userAnswers[this.currentQuestionIndex]) return;

        const questionTime = Date.now() - this.questionStartTime;
        this.questionTimes.push(questionTime);
        
        const question = this.questions[this.currentQuestionIndex];
        const userAnswer = this.userAnswers[this.currentQuestionIndex];
        const correctAnswer = question.correctAnswer;
        
        this.optionsContainer.querySelectorAll('.option').forEach(option => {
            const optionText = option.textContent;
            option.style.pointerEvents = 'none';

            const isMultiple = Array.isArray(correctAnswer);
            
            if (isMultiple) {
                if (correctAnswer.includes(optionText)) {
                    option.classList.add('correct');
                } else if (userAnswer && userAnswer.includes(optionText)) {
                    option.classList.add('incorrect');
                }
            } else {
                if (optionText === correctAnswer) {
                    option.classList.add('correct');
                } else if (optionText === userAnswer) {
                    option.classList.add('incorrect');
                }
            }
        });

        this.submitButton.disabled = true;
        this.nextButton.disabled = false;
        this.copyQuestionBtn.style.display = 'block';
        
        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.nextButton.textContent = 'Show Results';
        }
    }

    showPreviousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.showQuestion();
        }
    }

    showNextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.showQuestion();
        } else {
            this.showResults();
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questionsPerExam) * 100;
        this.progressBar.style.width = `${progress}%`;
        this.progressText.textContent = `Question ${this.currentQuestionIndex + 1}/${this.questionsPerExam}`;
    }

    calculateScore() {
        let correctCount = 0;
        this.questions.forEach((question, index) => {
            if (this.isAnswerCorrect(question, this.userAnswers[index])) {
                correctCount++;
            }
        });
        
        return Math.round((correctCount / this.questions.length) * 1000);
    }

    showResults() {
        this.quizScreen.classList.remove('active');
        this.resultsScreen.classList.add('active');
        this.mainHeader.style.display = 'flex';
        this.quizHeader.style.display = 'none';
        
        const score = this.calculateScore();
        document.getElementById('final-score').textContent = score;

        const passFailStatus = document.getElementById('pass-fail-status');
        passFailStatus.textContent = score >= 700 ? 'PASSED' : 'FAILED';
        passFailStatus.style.color = score >= 700 ? 'var(--success-color)' : 'var(--danger-color)';

        const correctList = document.getElementById('correct-answers-list');
        const incorrectList = document.getElementById('incorrect-answers-list');
        correctList.innerHTML = '';
        incorrectList.innerHTML = '';
        
        let correctAnswersCount = 0;
        let incorrectAnswersCount = 0;
        
        this.questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = this.isAnswerCorrect(question, userAnswer);
            
            const resultItem = document.createElement('div');
            resultItem.className = 'review-item';
            resultItem.innerHTML = `
                <p><strong>Q${index + 1}:</strong> ${question.question}</p>
                <p><strong>Your Answer:</strong> ${userAnswer ? (Array.isArray(userAnswer) ? userAnswer.join(', ') : userAnswer) : 'Not Answered'}</p>
                <p><strong>Correct Answer:</strong> ${Array.isArray(question.correctAnswer) ? question.correctAnswer.join(', ') : question.correctAnswer}</p>
            `;
            
            if (isCorrect) {
                correctList.appendChild(resultItem);
                correctAnswersCount++;
            } else {
                incorrectList.appendChild(resultItem);
                incorrectAnswersCount++;
            }
        });
        
        document.getElementById('correct-count').textContent = correctAnswersCount;
        document.getElementById('incorrect-count').textContent = incorrectAnswersCount;
        
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        const totalTime = Date.now() - this.startTime;
        const totalMinutes = Math.floor(totalTime / 60000);
        const totalSeconds = Math.floor((totalTime % 60000) / 1000);
        this.totalTimeDisplay.textContent = `${totalMinutes}m ${totalSeconds.toString().padStart(2, '0')}s`;
        
        const avgTime = this.questionTimes.reduce((a, b) => a + b, 0) / this.questionTimes.length;
        const avgSeconds = Math.round(avgTime / 1000);
        this.avgTimeDisplay.textContent = `${avgSeconds}s`;
    }

    restartExam() {
        this.resultsScreen.classList.remove('active');
        this.welcomeScreen.classList.add('active');
        this.mainHeader.style.display = 'flex';
        this.quizHeader.style.display = 'none';
        this.nextButton.textContent = 'Next';
    }

    copyCurrentQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        const text = this.formatQuestionForCopy(question);
        this.copyToClipboard(text, 'Current question copied to clipboard.');
    }

    copyIncorrectQuestions() {
        const incorrectQuestions = this.questions.filter((q, index) => 
            !this.isAnswerCorrect(q, this.userAnswers[index])
        );
        
        if (incorrectQuestions.length === 0) {
            this.showToast('No incorrect questions to copy.', 'warning');
            return;
        }

        const text = incorrectQuestions.map(q => this.formatQuestionForCopy(q)).join('\n\n');
        this.copyToClipboard(text, 'Incorrect questions copied to clipboard.');
    }

    formatQuestionForCopy(question) {
        const options = question.options.map((opt, idx) => 
            `${String.fromCharCode(65 + idx)}) ${opt}`
        ).join('\n');
        
        return `Question: ${question.question}\n\nOptions:\n${options}\n\nCorrect Answer: ${Array.isArray(question.correctAnswer) ? 
            question.correctAnswer.join(', ') : question.correctAnswer}`;
    }

    copyToClipboard(text, successMessage) {
        navigator.clipboard.writeText(text).then(() => {
            this.showToast(successMessage);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            this.showToast('Failed to copy text.', 'danger');
        });
    }

    isAnswerCorrect(question, userAnswer) {
        const correctAnswer = question.correctAnswer;
        if (Array.isArray(correctAnswer)) {
            return Array.isArray(userAnswer) && 
                   correctAnswer.length === userAnswer.length &&
                   correctAnswer.every(ans => userAnswer.includes(ans));
        }
        return userAnswer === correctAnswer;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});