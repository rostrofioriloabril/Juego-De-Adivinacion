let label = document.querySelector('.pregunta');
let input = document.querySelector('.respuesta');
let container1 = document.querySelector('.container');
let containerJuego = document.querySelector('.containerJuego');
let divText = document.querySelector('.pyr');
let bien = document.querySelector('.correccionV');
let mal = document.querySelector('.error');
let reinicio =document.querySelector('.reinicio')
let button = document.querySelector('.boton')

function empezarElJuego() {
    container1.style.display = 'none';
    containerJuego.style.display = 'block'
}

let numeroPensado = Math.round(Math.random() * 10);;
let intentos = 3;
let contador = 1;
let numeroLanzado;
let arrayNumbers = [0,1,2,3,4,5,6,7,8,9];
let correccion;
let error;
label.textContent = "Dime un numero del 0-10";
function activar() {
    empezarElJuego();
    /*   while (contador <= intentos) {*/
    
    numeroLanzado = parseInt(input.value);
    console.log(numeroLanzado)
    for(let i=0; i <=numbers.length; i++){

      if ((numeroPensado == numeroLanzado)&& (input.value.includes(arrayNumbers[i]))) {
        bien.textContent = `Felicidades, acertaste, el número pensado era ${numeroPensado}`;
        bien.style.display='block';
        input.removeEventListener('keydown',activar);
        reinicio.style.display="block"
        break;
     }else if (input.value == ""){
        bien.style.display='none';
        mal.style.display='none';
     }
     else {
        if ((numeroPensado != numeroLanzado) && (input.value.includes(numbers[i]))) {
            mal.style.display='block'
            mal.textContent = "Lo siento, erraste";
        }
    }
    }
}
const activarJuegoOtravez = () =>{
    input.value ="";
    reinicio.style.display='none';
    numeroPensado = Math.round(Math.random() * 10);
    activar();
    bien.style.display='none';
        mal.style.display='none';
}
/*
if (numeroPensado == numeroLanzado) {
    imprimir("Felicidades, acertaste, el número pensado era " + numeroPensado);
}
else {
    imprimir("Lo siento, el numero era: " + numeroPensado);
}
*/
reinicio.addEventListener('click', activarJuegoOtravez)
window.addEventListener('input',activar);
button.addEventListener('click', activar);
