// handles audio downloads
function downloadAudio (audioName) {
  window.location.href = audioName;
}

// add a click even to each download link
document.addEventListener("DOMContentLoaded", function (){
  const downloadLinks = document.querySelectorAll('.download-link');
  downloadLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const audioName = link.getAttribute('data-audio');
      downloadAudio(audioName);
    });
  });
});

