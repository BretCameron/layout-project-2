window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
        document.getElementById("logo").className = "color-white";
    } else if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
        document.getElementById("logo").className = "color-green";
    } else {
        document.getElementById("logo").className = "color-white";
    }
}