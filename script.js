// Add an event listener to the button
//document.getElementById('start-button').onclick = function() {
    // Redirect to another website
   // window.location.href ="https://werner172.github.io/Alumewebshop"; // Replace with the desired URL
//};


// Ensure the script runs after the DOM has fully loaded
       
 document.addEventListener('DOMContentLoaded', () => {
    // Select the Start button
    const startButton = document.getElementById('start-button');

    // Add an event listener for the click event
    startButton.addEventListener('click', () => {
        // Redirect to the desired website
        window.location.href = 'https://werner172.github.io/Alumewebshop'; // Replace with your target URL
    });
});
