class QuizApp {
    constructor() {
        this.currentQuestionIndex = 0;
        this.questions = [];
        this.userAnswers = [];
        this.score = 0;
        this.questionsPerExam = 60; // Default number of questions per exam
        
        // DOM Elements
        this.welcomeScreen = document.getElementById('welcome-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.progressBar = document.getElementById('progress');
        this.progressText = document.getElementById('progress-text');
        this.questionCountInput = document.getElementById('question-count');
        this.savedExamsList = document.getElementById('saved-exams-list');
        
        // Buttons
        this.startButton = document.getElementById('start-exam');
        this.prevButton = document.getElementById('prev-btn');
        this.submitButton = document.getElementById('submit-btn');
        this.nextButton = document.getElementById('next-btn');
        this.restartButton = document.getElementById('restart-btn');
        this.saveExamButton = document.getElementById('save-exam-btn');
        
        // Update welcome screen with total questions available
        const totalQuestions = window.quizData.getTotalQuestions();
        const welcomeText = document.querySelector('#welcome-screen p');
        if (welcomeText) {
            welcomeText.textContent = `This exam consists of ${this.questionsPerExam} randomly selected questions from a pool of ${totalQuestions} questions.`;
        }
        
        // Initialize progress text
        this.progressText.textContent = `Question 0/${this.questionsPerExam}`;
        
        // Load saved exams
        this.loadSavedExams();
        
        // Bind event listeners
        this.startButton.addEventListener('click', () => this.startExam());
        this.prevButton.addEventListener('click', () => this.showPreviousQuestion());
        this.submitButton.addEventListener('click', () => this.submitAnswer());
        this.nextButton.addEventListener('click', () => this.showNextQuestion());
        this.restartButton.addEventListener('click', () => this.restartExam());
        this.saveExamButton.addEventListener('click', () => this.saveExam());
        
        // Validate question count input
        this.questionCountInput.addEventListener('change', () => {
            let value = parseInt(this.questionCountInput.value);
            if (isNaN(value) || value < 1) value = 60;
            if (value > 60) value = 60;
            this.questionCountInput.value = value;
        });
    }

    loadSavedExams() {
        const savedExams = JSON.parse(localStorage.getItem('savedExams') || '[]');
        this.savedExamsList.innerHTML = '';
        
        if (savedExams.length === 0) {
            this.savedExamsList.innerHTML = '<p>No saved exams</p>';
            return;
        }
        
        savedExams.forEach((exam, index) => {
            const examElement = document.createElement('div');
            examElement.className = 'saved-exam-item';
            
            const date = new Date(exam.saveDate);
            const formattedDate = date.toLocaleString();
            
            examElement.innerHTML = `
                <div class="saved-exam-info">
                    <p>Saved on: ${formattedDate}</p>
                    <p>Progress: ${exam.currentQuestionIndex + 1}/${exam.questions.length} questions</p>
                </div>
                <div class="saved-exam-actions">
                    <button class="btn primary-btn resume-exam" data-index="${index}">Resume</button>
                    <button class="btn secondary-btn delete-exam" data-index="${index}">Delete</button>
                </div>
            `;
            
            this.savedExamsList.appendChild(examElement);
        });
        
        // Add event listeners for resume and delete buttons
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
        
        // Show confirmation message
        alert('Exam saved successfully!');
    }

    resumeExam(index) {
        const savedExams = JSON.parse(localStorage.getItem('savedExams') || '[]');
        const examData = savedExams[index];
        
        this.questions = examData.questions;
        this.userAnswers = examData.userAnswers;
        this.currentQuestionIndex = examData.currentQuestionIndex;
        this.questionsPerExam = this.questions.length;
        
        this.welcomeScreen.classList.remove('active');
        this.quizScreen.classList.add('active');
        this.showQuestion();
    }

    deleteExam(index) {
        if (confirm('Are you sure you want to delete this saved exam?')) {
            const savedExams = JSON.parse(localStorage.getItem('savedExams') || '[]');
            savedExams.splice(index, 1);
            localStorage.setItem('savedExams', JSON.stringify(savedExams));
            this.loadSavedExams();
        }
    }

    startExam() {
        // Get the number of questions from input
        let questionCount = parseInt(this.questionCountInput.value);
        if (isNaN(questionCount) || questionCount < 1) questionCount = 60;
        if (questionCount > 60) questionCount = 60;
        
        this.questionsPerExam = questionCount;
        this.questions = window.quizData.getRandomQuestions(this.questionsPerExam);
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.currentQuestionIndex = 0;
        this.score = 0;
        
        this.welcomeScreen.classList.remove('active');
        this.quizScreen.classList.add('active');
        this.showQuestion();
    }

    showQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        this.questionText.textContent = `${this.currentQuestionIndex + 1}. ${question.question}`;
        
        // Clear previous options
        this.optionsContainer.innerHTML = '';
        
        // Create option elements
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            
            // If this question was answered before, restore the selection
            if (this.userAnswers[this.currentQuestionIndex]) {
                if (window.quizData.isMultipleAnswer(question)) {
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

        // Update progress
        this.updateProgress();
        
        // Update button states
        this.prevButton.disabled = this.currentQuestionIndex === 0;
        this.nextButton.disabled = !this.userAnswers[this.currentQuestionIndex];
        this.submitButton.disabled = false;
    }

    handleOptionClick(optionElement, selectedOption) {
        const question = this.questions[this.currentQuestionIndex];
        const isMultiple = window.quizData.isMultipleAnswer(question);
        
        if (isMultiple) {
            optionElement.classList.toggle('selected');
            const selectedOptions = Array.from(this.optionsContainer.querySelectorAll('.option.selected'))
                .map(opt => opt.textContent);
            this.userAnswers[this.currentQuestionIndex] = selectedOptions;
        } else {
            // Remove previous selection
            this.optionsContainer.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            optionElement.classList.add('selected');
            this.userAnswers[this.currentQuestionIndex] = selectedOption;
        }
    }

    submitAnswer() {
        const question = this.questions[this.currentQuestionIndex];
        const userAnswer = this.userAnswers[this.currentQuestionIndex];
        const correctAnswer = question.correctAnswer;
        
        this.optionsContainer.querySelectorAll('.option').forEach(option => {
            const optionText = option.textContent;
            
            if (Array.isArray(correctAnswer)) {
                if (correctAnswer.includes(optionText)) {
                    option.classList.add('correct');
                } else if (userAnswer.includes(optionText)) {
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
        
        // If this is the last question, show the results
        if (this.currentQuestionIndex === this.questions.length - 1) {
            setTimeout(() => this.showResults(), 1500);
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
            const userAnswer = this.userAnswers[index];
            const correctAnswer = question.correctAnswer;
            
            if (Array.isArray(correctAnswer)) {
                if (userAnswer && 
                    userAnswer.length === correctAnswer.length && 
                    userAnswer.every(answer => correctAnswer.includes(answer))) {
                    correctCount++;
                }
            } else {
                if (userAnswer === correctAnswer) {
                    correctCount++;
                }
            }
        });
        
        return Math.round((correctCount / this.questions.length) * 1000);
    }

    showResults() {
        this.quizScreen.classList.remove('active');
        this.resultsScreen.classList.add('active');
        
        const score = this.calculateScore();
        const finalScoreElement = document.getElementById('final-score');
        const passFailStatus = document.getElementById('pass-fail-status');
        const correctList = document.getElementById('correct-answers-list');
        const incorrectList = document.getElementById('incorrect-answers-list');
        const correctCount = document.getElementById('correct-count');
        const incorrectCount = document.getElementById('incorrect-count');
        
        finalScoreElement.textContent = score;
        passFailStatus.textContent = score >= 700 ? 'PASSED!' : 'FAILED';
        passFailStatus.style.color = score >= 700 ? '#4CAF50' : '#f44336';
        
        // Clear previous results
        correctList.innerHTML = '';
        incorrectList.innerHTML = '';
        
        let correctAnswers = 0;
        let incorrectAnswers = 0;
        
        this.questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const correctAnswer = question.correctAnswer;
            const isCorrect = Array.isArray(correctAnswer) 
                ? userAnswer && 
                  userAnswer.length === correctAnswer.length && 
                  userAnswer.every(answer => correctAnswer.includes(answer))
                : userAnswer === correctAnswer;
            
            const resultItem = document.createElement('div');
            resultItem.className = 'review-item';
            resultItem.innerHTML = `
                <p><strong>Q${index + 1}:</strong> ${question.question}</p>
                <p>Your Answer: ${Array.isArray(userAnswer) ? userAnswer.join(', ') : userAnswer}</p>
                <p>Correct Answer: ${Array.isArray(correctAnswer) ? correctAnswer.join(', ') : correctAnswer}</p>
            `;
            
            if (isCorrect) {
                correctList.appendChild(resultItem);
                correctAnswers++;
            } else {
                incorrectList.appendChild(resultItem);
                incorrectAnswers++;
            }
        });
        
        correctCount.textContent = correctAnswers;
        incorrectCount.textContent = incorrectAnswers;
    }

    restartExam() {
        this.resultsScreen.classList.remove('active');
        this.welcomeScreen.classList.add('active');
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
}); 