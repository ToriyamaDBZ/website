// Cambio de color de fondo gradiente
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var scrollMax = document.documentElement.scrollHeight - window.innerHeight;
    var percentage = (scrollPosition / scrollMax) * 100;
    var colors = [
        "hsla(30, 100%, 95%, 1)",
        "hsla(45, 100%, 90%, 1)",
        "hsla(60, 100%, 85%, 1)",
        "hsla(75, 100%, 80%, 1)",
        "hsla(90, 100%, 75%, 1)",
        "hsla(105, 100%, 80%, 1)",
        "hsla(120, 100%, 85%, 1)",
        "hsla(135, 100%, 90%, 1)",
        "hsla(150, 100%, 95%, 1)",
        "hsla(165, 100%, 90%, 1)",
        "hsla(180, 100%, 85%, 1)",
        "hsla(195, 100%, 80%, 1)",
        "hsla(210, 100%, 75%, 1)",
        "hsla(225, 100%, 80%, 1)",
        "hsla(240, 100%, 85%, 1)",
        "hsla(255, 100%, 90%, 1)"
    ];
    var index = Math.floor((percentage / 100) * colors.length);
    document.body.style.background = "linear-gradient(135deg, " + colors.slice(index).join(", ") + ")";
});
