$(function(){
  mobileMenu();
  projectBelt();
  projectLoad();
  autoPlay();
  mobileVideo();
});

function mobileVideo(){
  var $window = $(window),
      windowsize = $window.width();

      if (windowsize < 700){
        $("video").attr("controls", "true");
        }
}

function autoPlay(){
  var videos = document.getElementsByTagName("video"),
    fraction = 0.6;
    function checkScroll() {
      for(var i = 0; i < videos.length; i++) {
        var video = videos[i];
        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
        b = y + h, //bottom
        visibleX, visibleY, visible;
        visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
        visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));
        visible = visibleX * visibleY / (w * h);
        if (visible > fraction) {
          video.play();
          } else {
            video.pause();
              }
            }
        }
window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);
}

function mobileMenu(){
  var mobilemenu = document.getElementById("mobile-menu");
  var menulist =  document.getElementById("menu-list");
  mobilemenu.addEventListener("click", function () {
  if (menulist.className === "hide") {
  	menulist.className = "";
  }else{
  		menulist.className = "hide";
  	}
  });
}

function projectBelt(){
  $('.category-unit').click(function(){
    $('.project-belt').css('left', '-100%');
    $('.project-container').show();
  });
  $('.return-icon').click(function(){
    $('.project-belt').css('left', '0%');
    $('.project-container').hide();
  });
}

function projectLoad(){
  $.ajaxSetup({case:false });
  $('.category-unit').click(function(){
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newFile = $this.data('folder'),
        newHTML = newFile + '.html';

      $('.project-load').load(newHTML);
      $('.project-title').text(newTitle);
  });

}
