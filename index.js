document.getElementById('add-event-button').addEventListener('click', () => {
    document.getElementById('add-event-modal').classList.toggle('hidden');
});

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


// Select elements
const dashDetails = document.querySelector('.dash-details');
const detailsModal = document.getElementById('details-modal');
const closeDetailsModal = document.getElementById('close-details-modal');
const modalContent = document.getElementById('modal-details-content');
const joinButton = document.getElementById('join-button');
const donateButton = document.getElementById('donate-button');






document.addEventListener("DOMContentLoaded", () => {
    // Select the modal and buttons
    const detailsModal = document.getElementById('details-modal');
    const popupModal = document.getElementById('popup-modal');
    const closeDetailsModal = document.getElementById('close-details-modal');
    const closePopup = document.getElementById('close-popup');
    const imgExpand = document.getElementById('img-expand');
    const joinButton = document.querySelector("#details-modal button:nth-child(2)");
    const donateButton = document.querySelector("#details-modal button:nth-child(3)");

    // Event listener to open the modal when image is clicked
    imgExpand.addEventListener('click', () => {
        const imgSrc = imgExpand.src; // Get the image source
        document.getElementById('popup-image').src = imgSrc; // Set it in the popup
        popupModal.classList.remove('hidden');
        popupModal.style.display = 'flex';
    });

    // Event listener to close the popup modal
    closePopup.addEventListener('click', () => {
        popupModal.classList.add('hidden');
        popupModal.style.display = 'none';
    });

    // Select all the event elements
    const eventElements = document.querySelectorAll('.dash-details');

    // Add an event listener to each event element
    eventElements.forEach(eventElement => {
        eventElement.addEventListener('click', () => {
            // Open the details modal
            detailsModal.classList.remove('hidden');
            detailsModal.style.display = 'flex';

            // Get the data from the clicked event element
            const username = eventElement.getAttribute('data-username');
            const location = eventElement.getAttribute('data-location');
            const joiners = eventElement.getAttribute('data-joiners');
            const donationGoal = eventElement.getAttribute('data-donation-goal');
            const totalDonation = eventElement.getAttribute('data-total-donation');
            const bannerImage = eventElement.getAttribute('data-banner-image');

            // Populate the modal content dynamically
            document.getElementById('modal-details-content').innerHTML = `
                <p><strong>Posted by:</strong> ${username}</p>
                <p><strong>Location:</strong> ${location}</p>
                <p><strong>Joiners:</strong> ${joiners}</p>
                <p><strong>Donation Goal:</strong> ${donationGoal}</p>
                <p><strong>Amount Donated:</strong> ${totalDonation}</p>
            `;
        });
    });

    // Close the details modal when clicking the close button
    closeDetailsModal.addEventListener('click', () => {
        detailsModal.classList.add('hidden');
        detailsModal.style.display = 'none';
    });

    // Handle "Join" button click
    joinButton.addEventListener('click', () => {
        alert("You have joined the event!");
        detailsModal.classList.add('hidden');
        detailsModal.style.display = 'none';
    });

    // Handle "Donate via GCash" button click
    donateButton.addEventListener('click', () => {
        alert("Redirecting to GCash for donation...");
        detailsModal.classList.add('hidden');
        detailsModal.style.display = 'none';
    });
});

