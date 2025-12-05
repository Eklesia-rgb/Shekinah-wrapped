const audioPlayer = document.getElementById("audioPlayer");
const tracks = document.querySelectorAll(".track");

tracks.forEach((track) => {
  track.addEventListener("click", () => {
    const icon = track.querySelector(".icon");

    document.querySelectorAll(".icon").forEach((i) => {
      i.textContent = "▶";
      i.classList.remove("active");
    });

    
    if (
      audioPlayer.src === track.getAttribute("data-track") &&
      !audioPlayer.paused
    ) {
      audioPlayer.pause();
      icon.textContent = "▶";
    } else {
      
      audioPlayer.src = track.getAttribute("data-track");
      audioPlayer.play();
      icon.textContent = "❚❚"; 
      icon.classList.add("active"); 
    }
  });
});
