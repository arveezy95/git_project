// videoModal.js


    const openModalButton = document.getElementById('openModalButton');
    const videoModal = document.getElementById('videoModal');
    const localVideo = document.getElementById('localVideo');

    // Set up event listener on the button
    openModalButton.addEventListener('click', function() {
    // Reset the video to the start when the button is clicked
    localVideo.currentTime = 0; // Reset to the beginning
    localVideo.play(); // Optionally start playing immediately
    });

    // Optionally, pause the video when the modal is closed
    videoModal.addEventListener('hidden.bs.modal', function () {
    localVideo.pause(); // Pause video when modal is closed
    localVideo.currentTime = 0; // Reset the video when closing the Modal
});
