window.addEventListener('load', adjust_navbar_and_padding);
window.addEventListener('resize', adjust_navbar_and_padding);
/*window.addEventListener('scroll', adjust_navbar);*/

document.getElementById("viewport").onscroll = function () {
	resize_logo(calc_max_height(), document.getElementById("viewport").scrollTop);
}


function adjust_navbar_and_padding() {
	var max_height = calc_max_height();
	resize_logo(max_height, document.getElementById("viewport").scrollTop);
}

/*function adjust_navbar () {
  resize_logo(calc_max_height(), window.pageYOffset);
}*/

function calc_max_height () {
	var max_height = window.innerWidth / 2.1;
	return (max_height < 600) ? max_height : 600;
}

function resize_logo(max_height, y_offset) {
	var height = (y_offset >= 0) ? (max_height - y_offset) : (max_height);
	if (height < 75) height = 75;
	document.getElementById("logo").style.maxHeight = height +"px";
  document.getElementById("navbar-content").style.height = height +"px";
}

var PIPPO = 0;

if(PIPPO==0) {
	document.getElementById("pippo").classList.add("pulse");
}

document.getElementById("pippo").onclick = function () {
	document.getElementById("pippo").classList.remove("pulse");
}
