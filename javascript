const tempos = [
    new Date("2026-12-18T00:00:00"), // Colégio
    new Date("2026-12-13T00:00:00"), // ENEM
    new Date("2026-12-19T00:00:00")  // Currículo
];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    if (tempoFinal > 0) {
        let segundos = Math.floor(tempoFinal / 1000);
        let minutos = Math.floor(segundos / 60);
        let horas = Math.floor(minutos / 60);
        let dias = Math.floor(horas / 24);

        segundos %= 60;
        minutos %= 60;
        horas %= 24;

        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    for (let i = 0; i < tempos.length; i++) {
        let resultado = calculaTempo(tempos[i]);
        document.getElementById(`dias${i}`).textContent = resultado[0];
        document.getElementById(`horas${i}`).textContent = resultado[1];
        document.getElementById(`min${i}`).textContent = resultado[2];
        document.getElementById(`seg${i}`).textContent = resultado[3];
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
