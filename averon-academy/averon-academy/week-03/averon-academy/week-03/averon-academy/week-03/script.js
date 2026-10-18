// Find the elements we need from the HTML page.
const greetingForm = document.querySelector("#greetingForm");
const nameInput = document.querySelector("#nameInput");
const greetingMessage = document.querySelector("#greetingMessage");
const colorButton = document.querySelector("#colorButton");

// Listen for the form submission.
greetingForm.addEventListener("submit", function (event) {
    // Prevent the page from reloading.
    event.preventDefault();

    // Get the name and remove extra spaces.
    const visitorName = nameInput.value.trim();

    // Check whether the visitor entered a name.
    if (visitorName === "") {
        greetingMessage.textContent = "Please enter your name first!";
        greetingMessage.className = "message error";
        nameInput.focus();
        return;
    }

    // Display a personalized greeting.
    greetingMessage.textContent =
        "🎉 Hello, " + visitorName + "! Welcome to Averon Academy!";

    greetingMessage.className = "message success";

    // Clear the input after greeting the visitor.
    nameInput.value = "";
});

// Change the page background when the color button is clicked.
colorButton.addEventListener("click", function () {
    const backgroundColors = [
        "linear-gradient(135deg, #dbeafe, #ede9fe)",
        "linear-gradient(135deg, #d1fae5, #a7f3d0)",
        "linear-gradient(135deg, #fce7f3, #fbcfe8)",
        "linear-gradient(135deg, #fef3c7, #fde68a)"
    ];

    // Choose a random background color.
    const randomIndex = Math.floor(
        Math.random() * backgroundColors.length
    );

    document.body.style.background = backgroundColors[randomIndex];
});
