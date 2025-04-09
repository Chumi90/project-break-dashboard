const linkName=document.getElementById('nameLink');
const linkUrl=document.getElementById('LinkWeb');
const getLinks=document.getElementById('GenLink');
const putLinks=document.getElementById('ViewLink');

getLinks.addEventListener('click',()=>{
    const name=linkName.value;
    const link=linkUrl.value;
    if ((name!="")&&(name!="")){
        localStorage.setItem(name,link);
    }
    drawLink();
})

function drawLink(){
    const key=Object.keys(localStorage);
    const datas=Object.values(localStorage);
    //let outPut=key.map((data,i)=>data=[data,datas[i]])
    let outPut=key.map((data,i)=>data=`<a href="${datas[i]}" target="blank">${data}</a>`);
    putLinks.innerHTML=outPut.join("");
    console.log(outPut);
}