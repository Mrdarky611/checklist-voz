let preguntas = [];
let indice = 0;

const textoPregunta = document.getElementById("pregunta");
const botonIniciar = document.getElementById("btnIniciar");

async function cargarPreguntas() {

    const respuesta = await fetch("preguntas.json");

    preguntas = await respuesta.json();

}

function hablar(texto){

    const voz = new SpeechSynthesisUtterance(texto);

    voz.lang = "es-MX";

    speechSynthesis.cancel();
    speechSynthesis.speak(voz);

}

async function iniciarChecklist(){

    await cargarPreguntas();

    indice = 0;

    mostrarPregunta();

}

function mostrarPregunta(){

    textoPregunta.textContent = preguntas[indice].pregunta;

    hablar(preguntas[indice].pregunta);

}

botonIniciar.addEventListener("click", iniciarChecklist);