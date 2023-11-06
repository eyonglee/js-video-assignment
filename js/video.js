var video = document.querySelector("video");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	video.load();

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = `${video.volume*100}%`;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	let speed = video.playbackRate;
	speed = speed * .9;
	video.playbackRate = speed;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	let speed = video.playbackRate;
	speed = speed * 1.11111111;
	video.playbackRate = speed;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener('click', function(){
	video.currentTime += 10;
	if(video.ended){
		video.currentTime = 0;
	}
	console.log(video.currentTime)
});

document.querySelector("#mute").addEventListener('click', function(){
	video.muted = !video.muted
	if(video.muted){
		document.querySelector("#mute").innerHTML = "Unmute"
	} else {
		document.querySelector("#mute").innerHTML = "Mute"
	}
});

document.querySelector("#slider").oninput = function() {
    var currentValue = this.value/100;
	video.volume = currentValue;
	document.querySelector("#volume").innerHTML = `${video.volume*100}%`;
};

document.querySelector("#vintage").addEventListener('click', function(){
	document.querySelector(".video").classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener('click', function(){
	document.querySelector(".video").classList.remove("oldSchool")
});