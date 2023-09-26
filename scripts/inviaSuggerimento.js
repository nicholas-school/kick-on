const sliderPiacimento = document.getElementById('sliderPiacimento');
const sliderPiacimentoValue = document.getElementById('sliderPiacimentoValue');
sliderPiacimento.value = 0;

sliderPiacimento.addEventListener('input', function () {
    sliderPiacimentoValue.textContent = sliderPiacimento.value;
});

const sliderDesign = document.getElementById('sliderDesign');
const sliderDesignValue = document.getElementById('sliderDesignValue');
sliderDesign.value = 0;

sliderDesign.addEventListener('input', function () {
    sliderDesignValue.textContent = sliderDesign.value;
});

//2000
const testoInput = document.getElementById("testoSuggerimento");

const inviaInformazioni = document.getElementById('inviaInformazioni');

// Aggiungi un listener per l'evento di invio del form
inviaInformazioni.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Invio Informazioni...");

    // Ottieni i valori dei campi del form
    const progetto = sliderPiacimento.value;
    const design = sliderDesign.value
    const suggerimentoTesto = testoInput.innerHTML;

    //Controllo form vuoto

    if (progetto == "0" && design == "0" && suggerimentoTesto == "") {
        alert("Hai lasciato in bianco alcuni campi di testo");
        return;
    }

    inviaInformazioni.classList.add("disabled");
    inviaInformazioni.innerHTML = "<div class='spinner-border text-primary text-dark' role='status'><span class='sr-only'>Caricamento...</span></div>";

    // Crea un oggetto con i dati da inviare al server
    const data = {
        progetto: progetto,
        design: design,
        suggerimentoTesto: suggerimentoTesto
    };

    // Invia la richiesta al server PHP usando fetch
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            // Gestisci la risposta del server
            console.log(result);

            // Esegui altre azioni se necessario
            alert("Grazie per il tuo aiuto");

            // Ripristina il pulsante e rimuovi la classe "disabled"
            inviaInformazioni.innerHTML = "Invia Il tutto <i class='fa-solid fa-paper-plane'></i>";
            inviaInformazioni.classList.remove("disabled");
        })
        .catch(error => {
            console.error('Errore durante la richiesta:', error);
            alert('Errore durante la richiesta:', error);

            // Ripristina il pulsante e rimuovi la classe "disabled"
            inviaInformazioni.innerHTML = "Invia Il tutto <i class='fa-solid fa-paper-plane'></i>";
            inviaInformazioni.classList.remove("disabled");
        });
});

/**
 php
$punteggio = $_POST['punteggio'];
$design = $_POST['design'];
$originalitaProgetto = $_POST['originalitaProgetto'];
$suggerimentoTesto = $_POST['suggerimentoTesto'];

// Fai qualcosa con i dati ricevuti dal form
// Ad esempio, salvali nel database o elaborali in qualche modo
*/