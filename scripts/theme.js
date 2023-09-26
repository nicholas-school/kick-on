function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}

function changeTheme() {
    const isDarkTheme = document.documentElement.getAttribute('data-bs-theme') === 'dark';

    document.documentElement.setAttribute('data-bs-theme', isDarkTheme ? 'light' : 'dark');
    document.documentElement.classList.replace('navbar-dark', 'navbar-light');

    const textElements = document.querySelectorAll(isDarkTheme ? '.text-light' : '.text-dark');
    textElements.forEach((element) => {
        element.classList.toggle('text-light');
        element.classList.toggle('text-dark');
    });

    const bgElements = document.querySelectorAll(isDarkTheme ? '.bg-white' : '.bg-dark');
    bgElements.forEach((element) => {
        element.classList.toggle('bg-white');
        element.classList.toggle('bg-dark');
    });

    const navLinkElements = document.querySelectorAll('.nav-link');
    let hasTextLightClass;
    navLinkElements.forEach((element) => {
        let hasTextLightClass = element.classList.contains('text-light');
        element.classList.toggle('text-light', !hasTextLightClass);
        element.classList.toggle('text-dark', hasTextLightClass);
    });

    var testoNavbar = document.getElementsByClassName("bottom-text")[0];
    testoNavbar.classList.toggle('text-light', hasTextLightClass);
    testoNavbar.classList.toggle('text-dark', hasTextLightClass);

    console.log("tema scuro: " + !isDarkTheme);
    setCookie("haveDarkTheme", !isDarkTheme, 360);
}


document.getElementById("themeManager").addEventListener("click", changeTheme);

if (getCookie("haveDarkTheme") == "true") {
    changeTheme();
}