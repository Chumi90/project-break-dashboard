const hour=document.getElementById("Time");
const date=document.getElementById("Date");
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
}
function dateInterval(){
if(datepresents[1]=="/"){
    datepresents="0"+datepresents;
}
if(datepresents[4]=="/"){
    datepresents=datepresents.slice(0,3)+"0"+datepresents.slice(3);
}
}
timeInterval();
dateInterval();
console.log(hourspresents);
console.log(datepresents);