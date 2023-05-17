document.addEventListener("DOMContentLoaded", function() {
  var menuButton = document.querySelector(".menu-icon-container")
  var sideBarMenu = document.getElementById('sidebar-menu')
  var topBar = document.querySelector(".top-bar")
   var middleBar = document.querySelector(".middle-bar");
    var bottomBar = document.querySelector(".bottom-bar");

  menuButton.addEventListener('click', function() {
    topBar.classList.toggle('change')
    middleBar.classList.toggle("change");
    bottomBar.classList.toggle("change");
    if (sideBarMenu.style.display === 'none') {
      sideBarMenu.style.display = 'flex'
    }
    else {
      sideBarMenu.style.display = 'none'
    }
  })
})