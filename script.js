console.log("Script started!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded - looking for button...");
    
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseMessage = document.getElementById('surpriseMessage');
    
    console.log("Button element:", surpriseBtn);
    console.log("Message element:", surpriseMessage);
    
    // TEST: Force show the message immediately to see if it's visible
    surpriseMessage.innerHTML = "TEST: Can you see this message?";
    surpriseMessage.style.display = "block";
    surpriseMessage.style.background = "yellow";
    surpriseMessage.style.padding = "20px";
    surpriseMessage.style.border = "3px solid red";
    
    // Now set up the button
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
        surpriseMessage.style.background = "#f0f8ff"; // Reset to normal color
        surpriseMessage.style.border = "2px dashed #ff6b6b";
    });
});
