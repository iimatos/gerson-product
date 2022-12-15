function delayTempo(tempo) {
  setTimeout(() => {
    document.body.style.overflow = 'visible';
    document.querySelector('.btn-quero.delay').classList.remove('delay');
  }, tempo * 1000 * 60);
}

// colocar o tempo em minutos dentro de delayTempo()

function setDelay() {
  delayTempo(0.05);
}

window.addEventListener('load', setDelay);
