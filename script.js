const preguntas = [
    "¿Vino el enfermero?",
    "¿Revisaste todas las cámaras?",
    "¿Los radios funcionan correctamente?",
    "¿Hay novedades en prevención?"
];

let indice = 0;

const textoPregunta = document.getElementById("pregunta");

// Verifica si el navegador soporta reconocimiento de voz
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert("Tu navegador no soporta reconocimiento de voz.");
}

const reconocimiento = new SpeechRecognition();

reconocimiento.lang = "es-MX";
reconocimiento.continuous = false;
reconocimiento.interimResults = false;

function hablar() {

    const voz = new SpeechSynthesisUtterance(
        preguntas[indice]
    );

    voz.lang = "es-MX";

    speechSynthesis.cancel();

    voz.onend = () => {

        reconocimiento.start();

    };

    speechSynthesis.speak(voz);

}

reconocimiento.onresult = function(event){

    const respuesta = event.results[0][0].transcript;

    alert("Escuché: " + respuesta);

    siguiente();

}

function siguiente(){

    if(indice < preguntas.length-1){

        indice++;

        textoPregunta.innerText = preguntas[indice];

        hablar();

    }else{

        alert("Checklist terminado.");

    }

}
