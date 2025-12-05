const audioPlayer = document.getElementById("audioPlayer");
const tracks = document.querySelectorAll(".track");

tracks.forEach((track) => {
  track.addEventListener("click", () => {
    const icon = track.querySelector(".icon");

    // Reset all icons
    document.querySelectorAll(".icon").forEach((i) => {
      i.textContent = "▶";
      i.classList.remove("active");
    });

    // If already playing, pause
    if (
      audioPlayer.src === track.getAttribute("data-track") &&
      !audioPlayer.paused
    ) {
      audioPlayer.pause();
      icon.textContent = "▶";
    } else {
      // Load and play new track
      audioPlayer.src = track.getAttribute("data-track");
      audioPlayer.play();
      icon.textContent = "❚❚"; // pause icon
      icon.classList.add("active"); // glowing effect
    }
  });
});
