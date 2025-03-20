const questions = [
    {
        "id": 1,
        "question": "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
        "options": [
            "AWS CLI.",
            "AWS API.",
            "AWS SDK.",
            "AWS Management Console."
        ],
        "correctAnswer": "AWS Management Console."
    },
    {
        "id": 2,
        "question": "Which of the following is an example of horizontal scaling in the AWS Cloud?",
        "options": [
            "Replacing an existing EC2 instance with a larger, more powerful one.",
            "Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.",
            "Adding more RAM capacity to an EC2 instance.",
            "Adding more EC2 instances of the same size to handle an increase in traffic."
        ],
        "correctAnswer": "Adding more EC2 instances of the same size to handle an increase in traffic."
    },
    {
        "id": 3,
        "question": "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
        "options": [
            "Amazon Inspector.",
            "AWS CloudTrail.",
            "AWS Trusted Advisor.",
            "EC2 Instance Usage Report."
        ],
        "correctAnswer": "AWS CloudTrail."
    },
    {
        "id": 4,
        "question": "Which of the below options are related to the reliability of AWS? (Choose TWO)",
        "options": [
            "Applying the principle of least privilege to all AWS resources.",
            "Automatically provisioning new resources to meet demand.",
            "All AWS services are considered Global Services, and this design helps customers serve their international users.",
            "Providing compensation to customers if issues occur.",
            "Ability to recover quickly from failures."
        ],
        "correctAnswer": [
            "Automatically provisioning new resources to meet demand.",
            "Ability to recover quickly from failures."
        ]
    }
    // Add the rest of your questions here
];

// Function to get random questions
function getRandomQuestions(count = 60) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to check if a question requires multiple answers
function isMultipleAnswer(question) {
    return Array.isArray(question.correctAnswer);
}

// Export the functions and questions
window.quizData = {
    questions,
    getRandomQuestions,
    isMultipleAnswer
}; 