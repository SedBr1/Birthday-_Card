console.log("Script started!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded - looking for button...");
    
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseMessage = document.getElementById('surpriseMessage');
    
    console.log("Button element:", surpriseBtn);
    console.log("Message element:", surpriseMessage);
    
    if (!surpriseBtn) {
        console.error("❌ Could not find the button!");
        return;
    }
    
    if (!surpriseMessage) {
        console.error("❌ Could not find the message div!");
        return;
    }
    
    // Personalize these messages!
    const surprises = [
        "You're an amazing friend! 🥳",
        "I appreciate you so much! 💝",
        "You always know how to make me laugh! 😂",
        "Thanks for being you! ✨"
    ];
    
    surpriseBtn.addEventListener('click', function() {
        console.log("✅ Button was clicked!");
        
        // Pick a random surprise
        const randomIndex = Math.floor(Math.random() * surprises.length);
        const randomSurprise = surprises[randomIndex];
        
        console.log("Showing message:", randomSurprise);
        
        // Update and show the message
        surpriseMessage.textContent = randomSurprise;
        surpriseMessage.classList.remove('hidden');
        
        // Optional: Add a little animation
        surpriseMessage.style.opacity = '0';
        surpriseMessage.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            surpriseMessage.style.transition = 'all 0.3s ease';
            surpriseMessage.style.opacity = '1';
            surpriseMessage.style.transform = 'translateY(0)';
        }, 10);
    });
    
    console.log("✅ Event listener attached successfully!");
});
