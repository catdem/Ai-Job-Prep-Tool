// Pitch Trainer functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('pitchForm');
    const backgroundInput = document.getElementById('backgroundInput');
    const pitchResults = document.getElementById('pitchResults');
    const pitchOutput = document.getElementById('pitchOutput');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const background = backgroundInput.value.trim();
        if (!background) {
            alert('Please enter your background information');
            return;
        }

        generatePitch(background);
    });

    function generatePitch(background) {
        // Hide previous results
        pitchResults.style.display = 'none';
        
        // Simulate processing time
        setTimeout(() => {
            const pitch = createPersonalizedPitch(background);
            displayPitch(pitch);
        }, 1500);
    }

    function createPersonalizedPitch(background) {
        // Analyze the background to create a personalized pitch
        const words = background.toLowerCase().split(' ');
        const hasExperience = words.some(word => ['experience', 'worked', 'years', 'developed', 'managed', 'led'].includes(word));
        const hasEducation = words.some(word => ['degree', 'university', 'college', 'studied', 'graduated'].includes(word));
        const hasTech = words.some(word => ['software', 'programming', 'coding', 'development', 'technical'].includes(word));
        const hasManagement = words.some(word => ['manager', 'team', 'leadership', 'supervise', 'coordinate'].includes(word));
        
        let pitch = "Hi, I'm excited to tell you about myself. ";
        
        // Add experience-based content
        if (hasExperience) {
            pitch += "I bring valuable professional experience that has shaped my skills and perspective. ";
        }
        
        if (hasEducation) {
            pitch += "My educational background has provided me with a strong foundation for continuous learning and growth. ";
        }
        
        if (hasTech) {
            pitch += "I have technical expertise that allows me to solve complex problems and work effectively with technology. ";
        }
        
        if (hasManagement) {
            pitch += "I have leadership experience that has taught me how to collaborate effectively and drive results through teamwork. ";
        }
        
        pitch += "What excites me most is the opportunity to contribute to meaningful projects and continue growing professionally. ";
        pitch += "I'm passionate about making a positive impact and I believe my background aligns well with what you're looking for. ";
        pitch += "I'd love to discuss how I can contribute to your team's success.";
        
        return {
            pitch: pitch,
            tips: [
                "Practice your pitch out loud multiple times",
                "Maintain eye contact and confident body language",
                "Keep it concise - aim for 30-60 seconds",
                "Tailor your pitch to your audience",
                "End with a question or call to action",
                "Be authentic and let your personality shine through"
            ],
            structure: {
                opening: "Start with a confident greeting and hook",
                body: "Highlight your key strengths and relevant experience",
                closing: "End with enthusiasm and next steps"
            }
        };
    }

    function displayPitch(pitchData) {
        let html = `
            <div class="pitch-section">
                <h3>Your Personalized Pitch</h3>
                <div class="pitch-content">
                    <p class="generated-pitch">"${pitchData.pitch}"</p>
                </div>
            </div>
            
            <div class="pitch-structure">
                <h4>📋 Pitch Structure</h4>
                <div class="structure-item">
                    <strong>Opening:</strong> ${pitchData.structure.opening}
                </div>
                <div class="structure-item">
                    <strong>Body:</strong> ${pitchData.structure.body}
                </div>
                <div class="structure-item">
                    <strong>Closing:</strong> ${pitchData.structure.closing}
                </div>
            </div>
            
            <div class="pitch-tips">
                <h4>💡 Delivery Tips</h4>
                <ul class="tips-list">
        `;
        
        pitchData.tips.forEach(tip => {
            html += `<li>${tip}</li>`;
        });
        
        html += `
                </ul>
            </div>
            
            <div class="practice-section">
                <h4>🎯 Practice Suggestions</h4>
                <ul class="practice-list">
                    <li>Record yourself delivering the pitch and review it</li>
                    <li>Practice in front of a mirror to work on body language</li>
                    <li>Time yourself to ensure it's the right length</li>
                    <li>Get feedback from friends or colleagues</li>
                    <li>Adapt the pitch for different situations (networking, interviews, etc.)</li>
                </ul>
            </div>
        `;
        
        pitchOutput.innerHTML = html;
        pitchResults.style.display = 'block';
        pitchResults.scrollIntoView({ behavior: 'smooth' });
    }

    // Character counter for textarea
    const maxChars = 1000;
    const charCounter = document.createElement('div');
    charCounter.className = 'char-counter';
    charCounter.textContent = `0 / ${maxChars} characters`;
    backgroundInput.parentNode.appendChild(charCounter);

    backgroundInput.addEventListener('input', function() {
        const currentLength = this.value.length;
        charCounter.textContent = `${currentLength} / ${maxChars} characters`;
        
        if (currentLength > maxChars) {
            charCounter.style.color = '#e74c3c';
            this.value = this.value.substring(0, maxChars);
        } else if (currentLength > maxChars * 0.9) {
            charCounter.style.color = '#f39c12';
        } else {
            charCounter.style.color = '#6B7280';
        }
    });
});