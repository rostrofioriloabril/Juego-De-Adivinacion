const canvas = document.querySelector('canvas');
const pincel = canvas.getContext('2d');
canvas.setAttribute('display', 'block')
canvas.setAttribute('position', 'absolute')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//canvas.width = document.body.offsetWidth;
let w = canvas.width;
let h = canvas.height;
let numbers = '0123456789';
let fontSize = 15;
let colums = canvas.width/10; 
//dividimos las columnas de cada numero

pincel.fillStyle ='#000'
pincel.fillRect(0,0, w, h);
/*const columnas = Math.floor(w/fontSize);
const position_y = Array(columnas).fill(0)//empezamos a pintar desde arriba

function matrix(){
    pincel.fillStyle = '#0001';
    pincel.fillRect(0,0,w,h);

    pincel.fillStyle ='darkblue';
    pincel.font = fontSize + 'px monoscape';

    position_y.forEach((y,ind) => {//de cada posicion i dame la posision ind
        const text = numbers.charAt(Math.floor(Math.random()*numbers.length))
        const x= ind *
        30;
        pincel.fillText(text,x,y);
        if (y > h){
            position_y[ind] = 0;
        }
        else position_y[ind] = y + 18;

    })

}setInterval(matrix, 50);
*/

let rainDrop = [];
for (let index = 0; index < colums; index++) {
    rainDrop[index] = 1;
} 
const draw = () => {
    pincel.fillStyle = '#0001';
    pincel.fillRect(0,0,w,h);
    pincel.fillStyle='darkblue';
    
    pincel.font = fontSize + 'px monoscape';
    
    for (let i = 0; i < rainDrop.length; i++) {
        const text = numbers.charAt(Math.floor(Math.random()*numbers.length))//para dibujar los numeros aleatoriamente
        pincel.fillText(text, i*fontSize, rainDrop[i]*fontSize);//posiciones de los numeros
        
        if(rainDrop[i]*fontSize > h && Math.random() > 0.991){
            rainDrop[i] = 0;
            pincel.fillStyle='rgb(2,7,37)'
            pincel.fillStyle = '#0001';
        }
        rainDrop[i]++
        
    };
};
setInterval(draw, 50);
