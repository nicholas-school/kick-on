let arrElementi = document.getElementsByClassName("testo-paragrafo")

function toggleElements(elementToShow) {
    let showElement = document.getElementById(elementToShow);
    for (let i = 0; i < arrElementi.length; i++) {
        arrElementi[i].classList.remove('active');
        arrElementi[i].style.animation = 'fade-out 0.5s ease-in-out';
        arrElementi[i].style.display = 'none';
        arrElementi[i].style.animation = '';
    }

        showElement.classList.add('active');
        showElement.style.display = '';
        showElement.style.animation = 'fade-in 0.5s ease-in-out';
}

toggleElements("home");