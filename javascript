// Defina aqui as datas futuras dos seus objetivos
const datasObjetivos = [
    new Date("2025-12-31T23:59:59"),
    new Date("2025-11-10T08:00:00"),
    new Date("2025-09-01T00:00:00"),
    new Date("2026-01-20T23:59:59")
];

function atualizarContadores() {
    const agora = new Date();

    for (let i = 0; i < datasObjetivos.length; i++) {
        const tempoRestante = datasObjetivos[i] - agora;

        // IDs dos elementos HTML
        const elDias = document.getElementById(`dias${i}`);
        const elHoras = document.getElementById(`horas${i}`);
        const elMin = document.getElementById(`min${i}`);
        const elSeg = document.getElementById(`seg${i}`);

        if (tempoRestante > 0) {
            // Cálculos matemáticos corrigidos
            const segundos = Math.floor((tempoRestante / 1000) % 60);
            const minutos = Math.floor((tempoRestante / (1000 * 60)) % 60);
            const horas = Math.floor((tempoRestante / (1000 * 60 * 60)) % 24);
            const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));

            elDias.textContent = dias;
            elHoras.textContent = horas;
            elMin.textContent = minutos;
            elSeg.textContent = segundos;
        } else {
            // Se o tempo acabou
            elDias.textContent = "0";
            elHoras.textContent = "0";
            elMin.textContent = "0";
            elSeg.textContent = "0";
        }
    }
}

// Executa a função imediatamente ao carregar
atualizarContadores();

// Atualiza a cada 1 segundo
setInterval(atualizarContadores, 1000);
