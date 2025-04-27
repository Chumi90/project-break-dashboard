const imagen=document.body
const imagenes=[
    "./img/autumn.jpg",
    "./img/lonetree.jpg",
    "./img/misurinasunset.jpg"
]

const imageRandom=()=>{
    const numeroRandom=Math.floor(Math.random()*imagenes.length);
    console.log(numeroRandom);
    let backGround= imagenes[numeroRandom];
    imagen.style.backgroundImage=`url(${backGround})`;
}
imageRandom();
setInterval(()=>{
    imageRandom();
},10000)

