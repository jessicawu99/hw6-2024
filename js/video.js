const video=document.querySelector("#player1")
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const slowDownButton = document.getElementById('slower');
const speedUpButton = document.getElementById('faster');
const skipButton = document.getElementById('skip');
const muteButton = document.getElementById('mute');
const slider = document.getElementById('slider');
const volumeDisplay = document.getElementById('volume');
const oldSchoolButton = document.getElementById('vintage');
const origButton = document.getElementById('orig');
let videoSpeed = 1;

window.addEventListener("load", function() {
	video.autoplay=false;
	video.loop=false;
});


// Play video and update volume information
playButton.addEventListener('click', function() {
	video.play();
	volumeDisplay.textContent = (video.volume * 100) + "%";
  });

// Pause video
pauseButton.addEventListener('click', function() {
	video.pause();
  });

// Slow down video speed
slowDownButton.addEventListener('click', () => {
	videoSpeed *= 0.9; // Decrease speed by 10%
	video.playbackRate = videoSpeed;
	console.log("New video speed: " + videoSpeed);
  });

// Speed up video speed
speedUpButton.addEventListener('click', function() {
	videoSpeed /= 0.9; // Increase speed proportionally to slow down
	video.playbackRate = videoSpeed;
	console.log("New video speed: " + videoSpeed);
  });

// Skip ahead in the video
skipButton.addEventListener('click', () => {
	video.currentTime += 10; // Skip ahead 10 seconds
	if (video.currentTime >= video.duration) {
	  video.currentTime = 0; // Restart video
	}
	console.log("New video time: " + video.currentTime);
  });

// Mute/unmute video
muteButton.addEventListener('click', function() {
	video.muted = !video.muted;
	if (video.muted) {
		muteButton.textContent = 'Unmute';
	  } else {
		muteButton.textContent = 'Mute';
	  }
  });

// Update volume
slider.addEventListener('input', function() {
	video.volume = slider.value / 100;
	volumeDisplay.textContent = slider.value + "%";
  });

oldSchoolButton.addEventListener('click', function() {
	video.classList.add('oldSchool');
  });

origButton.addEventListener('click', function() {
	video.classList.remove('oldSchool');
  });