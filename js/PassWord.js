/*
## Generador de contraseñas seguras:

### ¿Como funciona?
Crea una página que tendrá lo siguiente:
- Tendrá entre 12 caracteres como mínimo y 50 de máximo. Se podrá elegir el número de caracteres
- Se compondrá de mayúsculas, minúsculas, números y símbolos. Mínimo una de cada.
- Tendremos un input dónde meteremos la longitud de la contraseña y un botón para que nos de el resultado.
- Dale estilo con CSS

### ¿Qué usaremos?
- `Math.random()` Para generar aleatoriedad
- Mayúsculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
- Minúsculas: "abcdefghijklmnopqrstuvwxyz"
- Números: "0123456789"
- Símbolos "!@#$%^&*()-_=+"

### PISTAS Y CONSEJOS
- Guarda cada uno de los datos (mayúsculas, minúsculas, símbolos y núemeros) en una variable para poder recorrerlos.
- Usa bucles y condicionales
*/

//VARIABLES
//Hay que introducir los datos de la longitud del usuario
let lengthPass          =12;//Entrada predefinida para la longitud de PassWord
const MaxPass           =50;
const MinPass           =12;
const charactersUpper   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charactersLower   = "abcdefghijklmnopqrstuvwxyz";
const characterNumber   = "0123456789";
const expecialCharacter = "!@#$%^&*()-_=+";
const PassWordGen       =[];
const numsCumpli        =[0,1,2,3];//Variables creada para el cumplimiento de cada uno de los caracteres a introducir
const arr=[charactersUpper,charactersLower,characterNumber,expecialCharacter]//array de variables a utilizar

//DATOS HTML
const buttonPassWord= document.getElementById('GenPassWord');
const salidaPasWord=document.getElementById('ViewPass');
let lengthPassHtml=document.getElementById('LengthPassWord')

//Limitador de caracteres Min Max long PassWord
function maxMinPassWord(Pass){
    let passLong=0
    if (Pass<MinPass) {
        passLong=MinPass
    }else if(Pass>MaxPass){
        passLong=MaxPass
    } 
    else {
        passLong=Pass;
    }
    return passLong;
}

//Generador de PassWord
function genPassword(){
    let positions=[];//Variables para comprobar si cumple con los requisitos de contraseña
    for(let i=0;i<lengthPass;i++){ //Cargamos de forma aleatoria los datos para la PassWord
        const arrPosition=Math.floor(Math.random()*((arr.length))); //Dato aleatorio para Mayus, Minus, Nums y Characters
        positions[i]=arrPosition;  //Guardado de varaibles para la PassWord
        const randomNum=Math.floor(Math.random()*((arr[arrPosition].length))); //Posición aleatoria dentro de Mayus, Minus, Nums y Characters
        PassWordGen[i]=arr[arrPosition][randomNum];//Carga dato pasword aleatorio

    }
    const PassWord=(PassWordGen.join(""));//String
    const orderArr=positions.sort(); //Ordenar los Datos utilizados
    const positionsArr=orderArr.filter((num,i)=>orderArr.indexOf(num)==i) //Filtrado de repetidos
    if(positionsArr.length<=3){genPassword();} //Si tenemos menos de 3 datos utilizados reiniciamos proceso dado que no cumple con los requisitos
    return PassWord; //Devolvemos el dato
    
}


//Lectura de la longitud obtenida por el usuario
function lectura(){
lengthPassHtml.addEventListener('change',()=>{ //Lectura de los datos introducidos por el usuario
    lengthPass=parseInt(LengthPassWord.value); //Limitador máximo de la longitud PassWord
    lengthPass= maxMinPassWord(lengthPass);//Cambio de valor para la longitud de la PassWord
    
})

//Botón para obtener la PassWord
buttonPassWord.addEventListener('click',()=>{ //Lectura del boton para generar PassWord
    const PasstoUser=genPassword();//Valor de la PassWordGenerada
    salidaPasWord.innerHTML=`PassWord Generada: ${PasstoUser}` //Salida de datos para el usuario
});
}
lectura();