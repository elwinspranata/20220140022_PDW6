document.addEventListener("DOMContentLoaded", function() {
  var songs = document.querySelectorAll(".card");
  songs.forEach(function(song) {
    song.addEventListener("click", function() {
      this.style.backgroundColor = "#f8f8f8";
    });
  });
});
