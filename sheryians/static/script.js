function fun() {
    const reqDiv = document.getElementById('req');
    const overlay = document.getElementById('overlay');
    reqDiv.style.display = 'block'; // Show the modal
    overlay.style.display = 'block'; // Show the overlay
}

function closeModal() {
    const reqDiv = document.getElementById('req');
    const overlay = document.getElementById('overlay');
    reqDiv.style.display = 'none'; // Hide the modal
    overlay.style.display = 'none'; // Hide the overlay
}
document.getElementById('req').onclick=fun;
document.getElementById('overlay').onclick = closeModal; // Click overlay to close modal
