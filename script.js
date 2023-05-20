document.addEventListener("DOMContentLoaded", function () {
  let menuButton = document.querySelector(".menu-icon-container");
  let sideBarMenu = document.getElementById("sidebar-menu");
  let topBar = document.querySelector(".top-bar");
  let middleBar = document.querySelector(".middle-bar");
  let bottomBar = document.querySelector(".bottom-bar");

  menuButton.addEventListener("click", function () {
   console.log('clicked')
    topBar.classList.toggle("change");
    middleBar.classList.toggle("change");
    bottomBar.classList.toggle("change");
   
    sideBarMenu.style.display = sideBarMenu.style.display === 'none' ? 'flex' : 'none'
  });
});
