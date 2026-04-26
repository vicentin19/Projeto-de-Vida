const navItems = document.querySelectorAll(".nav-item");
const cards = document.querySelectorAll(".card");

// TROCA DE TELAS
navItems.forEach((item, i) => {
  item.addEventListener("click", () => {

    navItems.forEach(n => n.classList.remove("active"));
    cards.forEach(c => c.classList.remove("active"));

    item.classList.add("active");
    cards[i].classList.add("active");

  });
});

// DATAS
const datas = [
  new Date("2026-12-31"),
  new Date("2026-10-01"),
  new Date("2026-08-01"),
  new Date("2026-06-01")
];

// CRIAR TIMER
function criarTimer(el) {
  el.innerHTML = `
    <div><b>0</b><span>dias</span></div>
    <div><b>0</b><span>horas</span></div>
    <div><b>0</b><span>min</span></div>
    <div><b>0</b><span>seg</span></div>
  `;
}

// CALCULAR TEMPO
function calcular(data) {
  const diff = data - new Date();

  let s = Math.floor(diff / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);

  s %= 60;
  m %= 60;
  h %= 24;

  return diff > 0 ? [d,h,m,s] : [0,0,0,0];
}

// ATUALIZAR
function atualizar() {
  document.querySelectorAll(".timer").forEach((el, i) => {

    if (!el.innerHTML) criarTimer(el);

    const [d,h,m,s] = calcular(datas[i]);
    const nums = el.querySelectorAll("b");

    nums[0].textContent = d;
    nums[1].textContent = h;
    nums[2].textContent = m;
    nums[3].textContent = s;

  });
}

setInterval(atualizar, 1000);
atualizar();