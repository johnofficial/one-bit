$(function(){
  mobileMenu();
  projectBelt();
  projectLoad();
});

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
  $.ajaxSetup({case:true });
  $('.category-unit').click(function(){
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newFile = $this.data('folder'),
        newHTML = newFile + '.html';

      $('.project-load').load(newHTML);
      $('.project-title').text(newTitle);
  });

}
