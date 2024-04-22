const canvas = document.getElementById('draw');
const textcolor = document.getElementsByClassName('text-box');
const backgroundcolor = document.getElementsByClassName('background-box');
const clearbtn = document.getElementsByClassName('red');
const downloadbtn = document.getElementsByClassName('green');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;

ctx.strokeStyle ='#000000';
ctx.lineWidth = 4;
ctx.lineJoin = 'round';
ctx.lineCap ='round';

function draw(e){
    if(isDrawing !=true){
        return;
    }
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY= e.offsetY;

}

const mousedown = canvas.addEventListener('mousedown',(e) =>{
isDrawing = true;
console.log(e);
lastX = e.offsetX;
lastY=e.offsetY;
})



const mousemove = canvas.addEventListener('mousemove', draw);
const mouseout = canvas.addEventListener('mouseout', ()=> isDrawing =false);
const mouseup = canvas.addEventListener('mouseup', ()=> isDrawing=false);


//clear the canvas
document.querySelector('.red').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

//save & download
var downloadlink = document.getElementById("downloadlink"); 
function download(){
    const imagedata = canvas.toDataURL('image/png');
    downloadlink.href = imagedata ;
}
document.querySelector('.green').addEventListener('click',download)

//background
function changeBackground (){
ctx.fillStyle = 'rgba(0,255,0,1)'
ctx.fillRect(0,0,canvas.width,canvas.height);
}











