//your JS code here. If required.
// Function to delay and display message
async function displayMessage() {
    const textInput = document.getElementById('text').value;
    const delayInput = document.getElementById('delay').value;

    if (!textInput || !delayInput) {
        alert('Please enter both text and delay!');
        return;
    }

    const outputDiv = document.getElementById('output');

    try {
        const delayInSeconds = parseInt(delayInput);
        const message = await delayAndResolve(textInput, delayInSeconds);
        outputDiv.innerText = message;
    } catch (error) {
        console.error(error);
        outputDiv.innerText = 'Error occurred.';
    }
}

// Async function to wait for a specified time before resolving with a message
function delayAndResolve(message, delayInSeconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delayInSeconds * 1000);
    });
}

// Event listener for button click
const displayButton = document.getElementById('btn');
displayButton.addEventListener('click', displayMessage);
