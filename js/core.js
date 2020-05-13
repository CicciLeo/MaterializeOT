/*var back_to_top = document.getElementById("back-to-top");

try {
  window.addEventListener('scroll', toggle_back_to_top);
  back_to_top.addEventListener('click', scrollToTop);
} catch (err) {}*/

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);                    //options++
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      hoverEnabled: false
    });
  });



/*function toggle_back_to_top() {
  if (window.pageYOffset > (window.innerHeight / 2) ) {
    back_to_top.classList.remove("scale-out");
    back_to_top.classList.add("scale-in");
  } else {
    back_to_top.classList.remove("scale-in");
    back_to_top.classList.add("scale-out");
  }
}

function scrollToTop () {
  var c = window.pageYOffset;
  if (c > 1) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  } else {
    window.scrollTo(0, 0);
  }
}*/
