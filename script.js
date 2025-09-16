document.addEventListener('DOMContentLoaded', () => {

    // Get references to DOM elements
    const magicBox = document.getElementById('magicBox');
    const animateBtn = document.getElementById('animateBtn');
    const clickCounterSpan = document.getElementById('click-counter');

    // Modal elements
    const modal = document.getElementById('infoModal');
    const modalBtn = document.getElementById('modalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');


    /* 📚✨ PART 2: JavaScript Functions — Scope, Parameters & Return Values */

    // --- 2a. Global Scope Variable ---
    // This variable is accessible anywhere in this script.
    let buttonClickCount = 0;
    
    /**
     * A function that takes two numbers, adds them, and returns the result.
     * Demonstrates parameters and return values.
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The sum of num1 and num2.
     */
    function calculateSum(num1, num2) {
        // 'sum' is a local variable; it only exists inside this function.
        const sum = num1 + num2;
        return sum; 
    }

    // Example of using the function
    console.log(`Example of a return value: ${calculateSum(10, 5)}`); // Logs: 15

    /**
     * Generates a random HSL color string.
     * This function demonstrates LOCAL SCOPE. The variables `hue`, `saturation`,
     * and `lightness` are created and destroyed within this function call.
     * They cannot be accessed from outside.
     * @returns {string} A CSS-compatible HSL color string.
     */
    function generateRandomColor() {
        // These are all LOCAL variables.
        const hue = Math.floor(Math.random() * 360);
        const saturation = '70%';
        const lightness = '60%';
        
        // This function returns a useful calculated value.
        return `hsl(${hue}, ${saturation}, ${lightness})`;
    }


    /* 🎨🎬 PART 3: Combining CSS Animations with JavaScript */

    // --- 3a. Trigger animation on button click ---
    animateBtn.addEventListener('click', () => {
        // Add the 'shake' class to trigger the CSS animation
        magicBox.classList.add('shake');
        
        // Update the global counter and display it
        buttonClickCount++;
        clickCounterSpan.textContent = buttonClickCount;

        // Important: Remove the class after the animation finishes
        // so it can be triggered again. The animation duration is 0.5s (500ms).
        setTimeout(() => {
            magicBox.classList.remove('shake');
        }, 500);
    });

    // --- 3b. Use a function with a return value to change style ---
    magicBox.addEventListener('click', () => {
        // Call our function from Part 2 to get a random color
        const newColor = generateRandomColor();
        // Use the returned value to update the box's style
        magicBox.style.backgroundColor = newColor;
    });

    // --- 3c. Modal control ---
    // Use functions to make the logic reusable and clear
    function showModal() {
        modal.classList.add('visible');
    }

    function hideModal() {
        modal.classList.remove('visible');
    }

    modalBtn.addEventListener('click', showModal);
    closeModalBtn.addEventListener('click', hideModal);

    // Also close the modal if the user clicks the overlay
    modal.addEventListener('click', (event) => {
        // Only hide if the click is on the overlay itself, not the content
        if (event.target === modal) {
            hideModal();
        }
    });

});
