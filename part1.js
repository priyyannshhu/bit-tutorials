// Sample code to open a PDF in a new window
function openPDF(pdfUrl) {
    window.open(pdfUrl, '_blank');
}

// Sample code to display an image in a modal
function openImage(imageUrl) {
    // Implement code to display the image in a modal here
}

// Sample code to embed a YouTube video
function embedYouTubeVideo(videoId) {
    // Implement code to embed the YouTube video here
}
var backToTopButton = document.getElementById('back-to-top');

backToTopButton.onclick = function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};
