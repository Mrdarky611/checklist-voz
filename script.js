const preguntas = [
    "¿Vino el enfermero?",
    "¿Revisaste todas las cámaras?",
    "¿Los radios funcionan correctamente?",
    "¿Hay novedades en prevención?"
];

let indice = 0;

const textoPregunta = document.getElementById("pregunta");

function hablar() {

    const voz = new SpeechSynthesisUtterance(
        preguntas[indice]
    );

    voz.lang = "es-MX";

    speechSynthesis.cancel();
    speechSynthesis.speak(voz);

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
