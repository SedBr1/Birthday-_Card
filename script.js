document.addEventListener('DOMContentLoaded', function() {
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseMessage = document.getElementById('surpriseMessage');
    
    const surprises = [
        "You're an amazing personality! You are not prejudiced. The world would be a good place with people like you",
        "I was going to add a photo from the National assembly but my coding skills are being stretched! I remember those were the days! 🌟",
        "You have a kind 💝",
        "I like you most times, except when you make me mad. Like that one time during UNLEASH ✨",
        "Glad to have met you 🤝"
    ];
    surpriseBtn.addEventListener('click', function() {
        
        const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
        
       
        surpriseMessage.textContent = randomSurprise;
        surpriseMessage.classList.remove('hidden');
        
        
        surpriseMessage.style.opacity = '0';
        surpriseMessage.style.transform = 'translateY(20px)';
        }, 10);
    });
});
