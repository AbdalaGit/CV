let ProgressSpan = document.querySelectorAll(".progress span");
let who = document.querySelector(".who-am");
let Body = document.getElementById("dark");
let ImgDark = document.getElementById("img-dark");
let buttom = document.querySelector(".darkk");
let project = document.getElementById("project");
let BoxProject = document.getElementById("box");




project.onmouseover = function () {
  BoxProject.style.opacity = 1;
  BoxProject.style.display = "block";
  BoxProject.style.transform = "translateY(-47px)";
};

project.onmouseout = function () {
  BoxProject.style.opacity = 0;
  BoxProject.style.transform = "translateY(0)";
  BoxProject.style.display = "none";
};

window.onscroll = function () {
  if (window.scrollY >= who.offsetTop - 50) {
    ProgressSpan.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

function loading() {
  document.querySelector(".loading").classList.add("stop");
}

function addloading() {
  setInterval(loading, 2500);
}

window.onload = addloading();
