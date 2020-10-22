
function playSound1(event) {
    let sound = new Audio('./sounds/clap.wav');
    sound.play();
}
function playSound2() {
    
    let sound = new Audio('./sounds/hihat.wav');
    sound.play();
}
function playSound3() {

    let sound = new Audio('./sounds/kick.wav');
    sound.play();
}
function playSound4() {

    let sound = new Audio('./sounds/openhat.wav');
    sound.play();
}
function playSound5() {

    let sound = new Audio('./sounds/boom.wav');
    sound.play();
}
function playSound6() {

    let sound = new Audio('./sounds/ride.wav');
    sound.play();
}
function playSound7() {

    let sound = new Audio('./sounds/snare.wav');
    sound.play();
}
function playSound8() {

    let sound = new Audio('./sounds/tom.wav');
    sound.play();
}
function playSound9() {

    let sound = new Audio('./sounds/tink.wav');
    sound.play();
}

function onKeyDownHandler(event) {

    const codigo = event.keyCode;
    if (codigo === 65) {
        playSound1();
    } else if (codigo === 83) {
        playSound2();
    }else if (codigo === 68) {
        playSound3();
    }else if (codigo === 70) {
        playSound4();
    }else if (codigo === 71) {
        playSound5();
    }else if (codigo === 72) {
        playSound6();
    }else if (codigo === 74) {
        playSound7();
    }else if (codigo === 75) {
        playSound8();
    }else if (codigo === 76) {
        playSound9();
    }
    animacion(codigo);

}  
function animacion(codigo){
    const codigo_animacion = document.getElementById(codigo);

    codigo_animacion.classList.add("playing");
    setTimeout(() => codigo_animacion.classList.remove("playing"), 100);
}

  window.onkeydown = onKeyDownHandler;
