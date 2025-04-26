// Select elements
const heading = document.getElementById('main-heading');
const introText = document.getElementById('intro-text');
const changeTextBtn = document.getElementById('change-text-btn');
const toggleBoxBtn = document.getElementById('toggle-box-btn');
const dynamicContent = document.getElementById('dynamic-content');

// Change text and style dynamically
changeTextBtn.addEventListener('click', () => {
    introText.textContent = "You changed the text! 🎉";
    introText.style.color = "blue";
    heading.style.color = "green";
});

// Add or remove an element (box)
toggleBoxBtn.addEventListener('click', () => {
    const existingBox = document.getElementById('dynamic-box');
    if (existingBox) {
        existingBox.remove();
    } else {
        const box = document.createElement('div');
        box.id = 'dynamic-box';
        dynamicContent.appendChild(box);
    }
});
