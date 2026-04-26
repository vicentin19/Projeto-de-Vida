const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");
const bgs = document.querySelectorAll(".bg");
const indicator = document.querySelector(".indicator");

// INDICADOR ANIMADO
function moveIndicator(el) {
  indicator.style.width = el.offsetWidth + "px";
  indicator.style.left = el.offsetLeft + "px";
}

// inicial
moveIndicator(document.querySelector(".tab.active"));

// troca
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));
    bgs.forEach(b => b.classList.remove("active"));

    tab.classList.add("active");

    moveIndicator(tab);

    setTimeout(() => {
      contents[i].classList.add("active");
      bgs[i].classList.add("active");
    }, 150);

  });
});

// RESPONSIVO (corrige posição ao redimensionar)
window.addEventListener("resize", () => {
  moveIndicator(document.querySelector(".tab.active"));
});

// DATAS
const datas = [
  new Date("2026-06-11"),
  new Date("2026-11-08"),
  new Date("2026-11-28"),
  new Date("2026-12-18")
];

// TIMER
function criar(el){
  el.innerHTML = `
    <div><b>0</b><span>dias</span></div>
    <div><b>0</b><span>horas</span></div>
    <div><b>0</b><span>min</span></div>
    <div><b>0</b><span>seg</span></div>
  `;
}

function calc(d){
  const diff = d - new Date();

  let s = Math.floor(diff/1000);
  let m = Math.floor(s/60);
  let h = Math.floor(m/60);
  let dias = Math.floor(h/24);

  s%=60; m%=60; h%=24;

  return diff>0?[dias,h,m,s]:[0,0,0,0];
}

function update(){
  document.querySelectorAll(".timer").forEach((el,i)=>{
    if(!el.innerHTML) criar(el);

    const [d,h,m,s]=calc(datas[i]);
    const n=el.querySelectorAll("b");

    n[0].textContent=d;
    n[1].textContent=h;
    n[2].textContent=m;
    n[3].textContent=s;
  });
}

setInterval(update,1000);
update();