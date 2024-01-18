window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myNavbar").className = "navbar navbar-expand-lg navbar-dark bg-white fixed-top";
    document.getElementById("sura").src = "images/bakery-color.png";
} else {
    document.getElementById("myNavbar").className = "navbar navbar-expand-lg navbar-dark bg-transparent fixed-top";
    document.getElementById("sura").src= "images/bakery-light-1.png";
}
}
