const audioContainer = document.querySelector(".audioContainer");
const stopBtn = document.querySelector(".icon_soundOff");

function stopAudio() {
  audioContainer.pause();
}

stopBtn.addEventListener("click", stopAudio);
