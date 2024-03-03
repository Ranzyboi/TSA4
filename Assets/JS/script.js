// JavaScript code
document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.signup-button');

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            button.textContent = 'Clicked!';
            button.disabled = true;
        });
    });
});