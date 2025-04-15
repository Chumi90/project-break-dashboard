const linkName=document.getElementById('nameLink');
const linkUrl=document.getElementById('LinkWeb');
const getLinks=document.getElementById('GenLink');
const putLinks=document.getElementById('ViewLink');
let btns=[]; //Obtiene el Id de todos links creados
let firstIn=0;

getLinks.addEventListener('click',()=>{
    const name=linkName.value;
    const link=linkUrl.value;
    if ((name!="")&&(name!="")){
        localStorage.setItem(name,link);
    }
    drawLink();
    linkName.value="";
    linkUrl.value="";
})

function drawLink(){
    const key=Object.keys(localStorage);
    const datas=Object.values(localStorage);
    //let outPut=key.map((data,i)=>data=[data,datas[i]])
    let outPut=key.map((data,i)=>data=`
    <a href="${datas[i]}" target="blank">${data}</a>
    <button id="btn${data}">x</button>
    `);
    putLinks.innerHTML=outPut.join("");
    //console.log(outPut);
    btns=document.querySelectorAll('button'); //Obtiene el Id de todos links creados
    console.log(btns);
    clearLink();
}
 function firstIntroduction(){
    if(firstIn==0){
        drawLink();
        firstIn=1;
    }
 }

 function clearLink(){
    btns.forEach((btn,index) => { //hacemos un bucle para ver todos los ID de la banderas
        btn.addEventListener("click", e => { //Cuando hace click se queda con el dato de la bandera seleccionada
            const link =(e.target.id)//Obtenemos el Id de la bandera seleccionada
            const linkName=(link.split("btn")) //Quitamos del campo del ID el campo recursivo de las banderas
            console.log("FUNCIONA")
            console.log(linkName[1])
            localStorage.removeItem(linkName[1])
            drawLink();
        //drawFlagSeletc(data,flagName,flagDraw) //Cuando borramos ofrecemos el dato para que se pinten de nuevo las banderas sin necesidad de iniciar el programa
        });
    });
}

firstIntroduction();//Función para mostrar el contenido cuando el usario entre la primera vez