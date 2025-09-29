// Interview Questions functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('questionsForm');
    const jobTitleInput = document.getElementById('jobTitle');
    const resultsSection = document.getElementById('questionsResults');
    const questionsOutput = document.getElementById('questionsOutput');

    // Demo interview questions for different job roles
    const demoQuestions = {
        'software engineer': {
            common: [
                "Tell me about yourself and your experience in software development.",
                "What programming languages are you most comfortable with?",
                "How do you approach debugging a complex issue?",
                "Describe your experience with version control systems like Git.",
                "How do you stay updated with new technologies and programming trends?",
                "Tell me about a challenging project you worked on and how you overcame obstacles.",
                "How do you ensure code quality and maintainability?"
            ],
            unexpected: [
                "If you could redesign the internet from scratch, what would you do differently?",
                "How would you explain recursion to a 5-year-old?"
            ]
        },
        'marketing manager': {
            common: [
                "Tell me about your marketing experience and background.",
                "How do you measure the success of a marketing campaign?",
                "Describe your experience with digital marketing channels.",
                "How do you identify and target your ideal customer?",
                "Tell me about a successful campaign you've managed.",
                "How do you stay current with marketing trends and technologies?",
                "Describe your experience with marketing analytics and data interpretation."
            ],
            unexpected: [
                "If our company was a person, how would you describe their personality?",
                "How would you market ice to Eskimos?"
            ]
        },
        'data scientist': {
            common: [
                "Tell me about your background in data science and analytics.",
                "What programming languages and tools do you use for data analysis?",
                "How do you approach a new data science project?",
                "Describe your experience with machine learning algorithms.",
                "How do you handle missing or dirty data?",
                "Tell me about a challenging data problem you've solved.",
                "How do you communicate complex findings to non-technical stakeholders?"
            ],
            unexpected: [
                "If you had to predict the weather using only social media data, how would you approach it?",
                "How many tennis balls would fit in this room?"
            ]
        },
        'project manager': {
            common: [
                "Tell me about your project management experience.",
                "How do you handle competing priorities and tight deadlines?",
                "Describe your approach to risk management in projects.",
                "How do you ensure effective communication within your team?",
                "Tell me about a project that didn't go as planned and how you handled it.",
                "What project management methodologies are you familiar with?",
                "How do you measure project success?"
            ],
            unexpected: [
                "If you were managing a project to colonize Mars, what would be your biggest concerns?",
                "How would you organize a wedding for 500 people in 2 weeks?"
            ]
        },
        'sales representative': {
            common: [
                "Tell me about your sales experience and achievements.",
                "How do you approach prospecting for new clients?",
                "Describe your sales process from lead to close.",
                "How do you handle rejection and maintain motivation?",
                "Tell me about your biggest sales win.",
                "How do you build and maintain client relationships?",
                "What CRM systems have you worked with?"
            ],
            unexpected: [
                "Sell me this pen right now.",
                "If you were a product, how would you market yourself?"
            ]
        },
        'default': {
            common: [
                "Tell me about yourself and your professional background.",
                "Why are you interested in this position?",
                "What are your greatest strengths and weaknesses?",
                "Where do you see yourself in 5 years?",
                "Why are you leaving your current job?",
                "What motivates you in your work?",
                "Do you have any questions for us?"
            ],
            unexpected: [
                "If you were an animal, what would you be and why?",
                "What's the most interesting thing you've learned recently?"
            ]
        }
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const jobTitle = jobTitleInput.value.trim();
        if (!jobTitle) {
            alert('Please enter a job title');
            return;
        }

        generateQuestions(jobTitle);
    });

    function generateQuestions(jobTitle) {
        // Hide previous results
        resultsSection.style.display = 'none';
        
        // Simulate processing time
        setTimeout(() => {
            const questions = getQuestionsForRole(jobTitle);
            displayQuestions(questions, jobTitle);
        }, 1000);
    }

    function getQuestionsForRole(jobTitle) {
        const normalizedTitle = jobTitle.toLowerCase();
        
        // Check for exact matches first
        if (demoQuestions[normalizedTitle]) {
            return demoQuestions[normalizedTitle];
        }
        
        // Check for partial matches
        for (const role in demoQuestions) {
            if (role !== 'default' && (normalizedTitle.includes(role) || role.includes(normalizedTitle))) {
                return demoQuestions[role];
            }
        }
        
        // Return default questions if no match found
        return demoQuestions.default;
    }

    function displayQuestions(questions, jobTitle) {
        let html = `
            <div class="questions-section">
                <h3>Interview Questions for: ${jobTitle}</h3>
                
                <div class="question-category">
                    <h4>📋 Common Questions</h4>
                    <ul class="questions-list">
        `;
        
        questions.common.forEach(question => {
            html += `<li>${question}</li>`;
        });
        
        html += `
                    </ul>
                </div>
                
                <div class="question-category">
                    <h4>🎯 Unexpected Questions</h4>
                    <ul class="questions-list">
        `;
        
        questions.unexpected.forEach(question => {
            html += `<li>${question}</li>`;
        });
        
        html += `
                    </ul>
                </div>
                
                <div class="tips-section">
                    <h4>💡 Preparation Tips</h4>
                    <ul class="tips-list">
                        <li>Practice your answers out loud, but don't memorize them word-for-word</li>
                        <li>Prepare specific examples using the STAR method (Situation, Task, Action, Result)</li>
                        <li>Research the company and role thoroughly</li>
                        <li>Prepare thoughtful questions to ask the interviewer</li>
                        <li>Practice good body language and maintain eye contact</li>
                    </ul>
                </div>
            </div>
        `;
        
        questionsOutput.innerHTML = html;
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
});