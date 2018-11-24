window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
        document.getElementById("logo").className = "color-green";
    } else if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("logo").className = "color-white";
    } else {
        document.getElementById("logo").className = "color-pink";
    }
}