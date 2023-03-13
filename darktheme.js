var icon = document.getElementById('icon');

icon.onclick = function() {
    document.body.classList.toggle("darktheme")

    if (document.body.classList.contains("darktheme")) {
        icon.src = "sun.svg";
    }else {
        icon.src = "moon.svg";
    }
}