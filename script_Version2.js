// Display current date on the home page
window.onload = function() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const today = new Date();
        dateElement.textContent = "Today's Date: " + today.toLocaleDateString('en-GB', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
    }
    const form = document.getElementById('ticket-form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for booking your tickets! We look forward to welcoming you at the festival!');
            form.reset();
        });
    }
};