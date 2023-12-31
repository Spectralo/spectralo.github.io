var isDark = false;

function toogleTheme() {
    var svg = document.getElementById("darkmodeicon")
    setTimeout(function(){

    if (isDark == true){
        document.documentElement.setAttribute('data-theme', 'light');
        svg.src = 'images/dark.svg';
        isDark = false;

    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        svg.src = 'images/light.svg';
        isDark = true;
    }
    }, 250);
}