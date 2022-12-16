export default function countdown() {
  const unidades = document.querySelector('.countdown-unidades');

  function countUnits() {
    const unidade = document.querySelector('.unidades');

    const counter = setInterval(() => {
      unidade.dataset.units -= Math.round(Math.random() * 4);
      if (unidade.dataset.units < 16) {
        unidade.innerText = Math.round(Math.random() * (16 - 12) + 12);
        clearInterval(counter);
      } else {
        unidade.innerText = unidade.dataset.units;
      }
    }, 1800);
  }

  function handleEntry(e) {
    if (e[0].isIntersecting) {
      countUnits();
      observer.unobserve(unidades);
    }
  }

  const observer = new IntersectionObserver(handleEntry, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.85,
  });

  observer.observe(unidades);
}
