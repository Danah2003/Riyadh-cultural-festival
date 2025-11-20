// Display current date
document.addEventListener("DOMContentLoaded", () => {
    let d = new Date();
    let dateElement = document.getElementById("currentDate");
    if (dateElement) {
        dateElement.innerHTML = d.toDateString();
    }
});

// Show thank you message
function showThanks(event) {
    event.preventDefault();
    document.getElementById("thanksMsg").style.display = "block";
}