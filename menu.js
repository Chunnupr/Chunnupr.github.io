// Updated to match index.html button id "menu-toggle" and offcanvas menu "offcanvas-menu"
document.getElementById("menu-toggle").addEventListener("click", function() {
  var menu = document.getElementById("offcanvas-menu");
  menu.classList.toggle("show");
});
