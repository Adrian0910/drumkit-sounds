/** 
    ¿COMO VAMOS A HACER ESO ESTUPIDA?
    - ponerle el sonido a cada div
    - musica() => evento onKey()

*/

/**constante para obtener clase*/
const keys = document.querySelectorAll('.key')
/**Funcion para tocar */
const playMusic = function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const audioError = document.querySelector('.error');
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  /** Si el audio es distinto a null tocamos! */
  if (audio != null) {
    audio.play();
    key.classList.add('playing')
    audio.currentTime = 0
    //sino error!!!!
  } else {
    audioError.play();
    eresEstupido();
  }
}

/** Funcion para mandar aviso de error de tecla*/
const eresEstupido = function(){
  const keys2 = document.querySelector('.keys') 
    const estupido = document.createElement('p');
    estupido.classList.add('errorKey');
    estupido.innerHTML = '<p> NO key!!!</p>'
    keys2.appendChild(estupido);

    setTimeout(() => {
        estupido.remove();
      }, 500);
}


/** Funcion que quita el estilo*/
const removeTransition = function (e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}



/** Evento para el sonido del teclado y llamado de la funcion*/
window.addEventListener('keydown', playMusic);

/** llamado de la funcion, se itera sobre cada elemento*/
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
