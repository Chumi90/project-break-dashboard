const hour=document.getElementById("Time");
const date=document.getElementById("Date");
const message=document.getElementById("Mensaje");
let data=new Date();
let datepresents=data.toLocaleDateString();
let hourspresents=data.toLocaleTimeString();

function timeInterval(){
    if(data.toLocaleTimeString()[1]==":"){
        hourspresents="0"+hourspresents;
    }
    if(hourspresents[4]==":"){
        hourspresents=hourspresents.slice(0,3)+"0"+hourspresents.slice(0,3);
    }
    hour.innerHTML=hourspresents;
}

function dateInterval(){
    if(datepresents[1]=="/"){
        datepresents="0"+datepresents;
    }
    if(datepresents[4]=="/"){
        datepresents=datepresents.slice(0,3)+"0"+datepresents.slice(3);
    }
    date.innerHTML=datepresents;
}

function actualHour(){
    data=new Date();
    datepresents=data.toLocaleDateString();
    hourspresents=data.toLocaleTimeString();
}

function mensajeUsuario(){
    let mensaje="";
    let hora=hourspresents.slice(0,2);
    let minuto=hourspresents.slice(3,5);
    hora=parseInt(hora);
    switch(true){
        case (hora<=7 && hora>=0):
            if (minuto>=1){
                mensaje="Es hora de descansar. Apaga y sigue mañana";
            }
            break;
        case (hora<=12 && hora>=7):
            if (minuto>=1){
                mensaje="Buenos días, desayuna fuerte y a darle al código";
            }
            break;
        case (hora<=14 && hora>=12):
            if (minuto>=1){
                mensaje="Echa un rato más pero no olvides comer";
            }
            break;
        case (hora<=16 && hora>=14):
            if (minuto>=1){
                mensaje="Espero que hayas comido";
            }
            break;
        case (hora<=18 && hora>=16):
            if (minuto>=1){
                mensaje="Buenas tardes, el último empujón";
            }
            break;
        case (hora<=22 && hora>=18):
            if (minuto>=1){
                mensaje="Esto ya son horas extras, ... piensa en parar pronto";
                console.log("FUNCIONA")
            }
            break;
        case (hora>=22):
            if (minuto>=1){
                mensaje="Buenas noches, es hora de pensar en parar y descansar";
            }
            break;
    }
    message.innerHTML=mensaje;
}

timeInterval();
dateInterval();
mensajeUsuario();

setInterval(()=>{
    actualHour();
    timeInterval();
    mensajeUsuario();
    dateInterval();
},1000)
