var max_height;
var mainview = document.getElementById("mainview");
var logo = document.getElementById("logo");


window.addEventListener('load', inizialize_height);
window.addEventListener('resize', inizialize_height);

function inizialize_height () {
	max_height = window.innerWidth / 2.1;
	if (max_height > 600) max_height = 600;
}


mainview.addEventListener('scroll', resize_logo);

function resize_logo () {
	var height = max_height - mainview.scrollTop;
	if (height > max_height) height = max_height;
	if (height < 75) height = 75;
	logo.style.height = height +"px";
}


var PIPPO = 0;

if(PIPPO==0) {
	document.getElementById("pippo").classList.add("pulse");
}

document.getElementById("pippo").onclick = function () {
	document.getElementById("pippo").classList.remove("pulse");
}
