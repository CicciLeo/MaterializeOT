document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);                    //options++
  });

  document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.parallax');
   var instances = M.Parallax.init(elems);                    //options++
 });

  window.onscroll = function () {
		var y_offset = window.pageYOffset;
    var real_height = calc_real_height();

    resize_logo(real_height, y_offset);
/*		set_padding_height(real_height, y_offset);*/

		toggle_back_to_top(y_offset);
	}

	window.onload = function () {
		var y_offset = window.pageYOffset;
		var real_height = calc_real_height();

		resize_logo(real_height, y_offset);
		set_padding_height(real_height, y_offset);

		toggle_back_to_top(y_offset);
	}

	window.onresize = function () {
		var y_offset = window.pageYOffset;
		var real_height = calc_real_height();

		resize_logo(real_height, y_offset);
		set_padding_height(real_height, y_offset);
	}

	function calc_real_height () {
		var real_height = window.innerWidth / 2.1;
		return (real_height < 600) ? real_height : 600;
	}

	function resize_logo(real_height, y_offset) {
		var dinamic_height = real_height - y_offset;
		if (dinamic_height < 75) dinamic_height = 75;

		document.getElementById("logo").style.maxHeight = dinamic_height +"px";
    document.getElementById("logo").style.marginTop = real_height*0.01 +"px";
    document.getElementById("navbar-content").style.height = dinamic_height +"px";
    
    console.log("dinamic_height: " + dinamic_height + "  --  real_height: " + real_height);
	}

	function set_padding_height(real_height, y_offset) {
    var dinamic_height = real_height;

		document.getElementsByTagName("main")[0].style.marginTop = dinamic_height + "px";
	}


  function toggle_back_to_top(y_offset) {
    if (y_offset > 50) {
      document.getElementById("back-to-top").classList.remove("scale-out");
      document.getElementById("back-to-top").classList.add("scale-in");
    } else {
      document.getElementById("back-to-top").classList.remove("scale-in");
      document.getElementById("back-to-top").classList.add("scale-out");
    }
  }

  document.getElementById("back-to-top").onclick = function() {
    console.log("bazinga");
    window.requestAnimationFrame(scrollToTop);
  }


  function scrollToTop () {
    var c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      c = (c < 1) ? 0 : c - c / 8;
      window.scrollTo(0, c);
    }
  }
