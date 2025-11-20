const card = document.querySelector('.card');
const cardFront = document.querySelector('.card-front');
const cardInside = document.querySelector('.card-inside');

card.addEventListener('click', function() {
    // Toggle the hidden classes
    cardFront.classList.toggle('hidden');
    cardInside.classList.toggle('hidden');
});


const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseMessage = document.getElementById('surpriseMessage');

surpriseBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevents card flip when clicking button
    surpriseMessage.classList.toggle('hidden');
});
