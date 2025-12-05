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

// Custom Modal RnB Interaction
const modal = document.getElementById("rnbModal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const artistInput = document.getElementById("artistInput");
const submitArtist = document.getElementById("submitArtist");
const playButtonHero = document.querySelector(".hero button");

// Show modal when clicking Play Now
playButtonHero.addEventListener("click", () => {
  modal.style.display = "flex";
});

// If user says YES
yesBtn.addEventListener("click", () => {
  artistInput.style.display = "block";
  submitArtist.style.display = "block";
});

// If user submits artist name
submitArtist.addEventListener("click", () => {
  const artist = artistInput.value || "That Artist";
  alert(`🔥 ${artist} is a vibe!\nEnjoy interacting with my favorite tracks by SZA.`);
  modal.style.display = "none";
});

// If user says NO
noBtn.addEventListener("click", () => {
  alert("😎 No worries — you might just fall in love with RnB today.\nEnjoy these SZA tracks!");
  modal.style.display = "none";
});

