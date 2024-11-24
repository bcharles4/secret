// Select the modal and buttons
const addEventButton = document.getElementById('add-event-button');
const addEventModal = document.getElementById('add-event-modal');
const closeAddEventModal = document.getElementById('close-add-event-modal');

// Show the modal when the "Add New Event" button is clicked
addEventButton.addEventListener('click', () => {
    addEventModal.classList.remove('hidden');
});

// Hide the modal when the close button is clicked
closeAddEventModal.addEventListener('click', () => {
    addEventModal.classList.add('hidden');
});

// Select the modal, image, and close button elements
const imgExpand = document.getElementById('img-expand');
const popupModal = document.getElementById('popup-modal');
const closePopup = document.getElementById('close-popup');
const popupImage = document.getElementById('popup-image');

// Show popup when image is clicked
imgExpand.addEventListener('click', () => {
    popupImage.src = imgExpand.src; // Use the same image for popup
    popupModal.classList.remove('hidden'); // Show modal
    popupModal.style.display = 'flex'; // Ensure modal is displayed correctly
});

// Hide popup when close button is clicked
closePopup.addEventListener('click', () => {
    popupModal.classList.add('hidden'); // Hide modal using classList
    popupModal.style.display = 'none'; // Hide modal using style
});

// Optional: Hide popup when clicking outside the modal content
popupModal.addEventListener('click', (e) => {
    if (e.target === popupModal) {
        popupModal.classList.add('hidden'); // Hide modal if clicked outside
        popupModal.style.display = 'none'; // Hide modal using style
    }
});

// Ensure the modal is hidden when the page loads (for initial state)
document.addEventListener("DOMContentLoaded", () => {
    popupModal.classList.add('hidden'); // Ensure the popup modal is hidden on page load
    popupModal.style.display = 'none'; // Ensure popup modal is hidden
});
