let list = document.querySelector(".nav-list");
let menu = document.querySelector("#menu-icon");

menu.onclick = () =>{
    menu.classList.toggle("menu-x")
    list.classList.toggle("open")
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "#222";
    document.getElementById("navbar").style.padding = "15px 20px";
    document.querySelector(".btn-join").style.color = "#1DBF73";
    document.querySelector(".btn-join").style.border = "1px solid #1DBF73";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.padding = "25px 3%";
    document.querySelector(".btn-join").style.color = "#fff";
    document.querySelector(".btn-join").style.border = "1px solid #fff";
  }
}