$(function(){
  mobileMenu();
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
