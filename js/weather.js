const APIKEY="574038d7fe014965af905647251604"
const POSITION="40.42378, -3.56129"
const ENDPOINTEWEATHER =`https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${POSITION}&aqi=no`
console.log(ENDPOINTEWEATHER);

const getWeather=async()=>{
    try{
        const response=await fetch(ENDPOINTEWEATHER)
        if(!response.ok){
            throw new Error('Hay un error en la descarga del tiempo',response.status)
        }
        const dataWeather=await response.json();
        //console.log(dataWeather)
        currentWeather(dataWeather)
        weekWheather(dataWeather)
    }
    catch(error){
        console.log('Error al obtener los datos',error);
    }
}
getWeather();

const viewTemp=document.getElementById("TiempoActual");
//console.log(viewTemp)
function currentWeather(dataWeather){
    const {name, country} = dataWeather.location;
    const {text, icon} = dataWeather.current.condition;
    const {temp_c,humidity,precip_mm,wind_kph} = dataWeather.current;
    viewTemp.innerHTML=`
    <h2>${name} / ${country}</h2>
    <p>${text}</p>
    <div class="img-temp">
        <img src="https:${icon}" alt="${text}">
        <p>${temp_c} ºC</p>
    </div>
    <div>
        <ul>
            <li>Precipitaciones: ${precip_mm}</li>
            <li>Humedad: ${humidity}</li>
            <li>Viento: ${wind_kph}</li>
    </div>
    `;
}

const viewTimeWeek=document.getElementById('TiempoSemana');
function weekWheather(dataWeather){
    const hourweek=dataWeather.forecast.forecastday[0].hour
    hourweek.forEach(h => {
        const{time, temp_c}=h;
        const {condition: {icon,text}} =h;
        const tiempoarr=time.split(' ');
        const timeWeek=tiempoarr[1];
        viewTimeWeek.innerHTML+=`
            <p>${timeWeek}</p>
            <img src="https:${icon}" alt="${text}">
            <p>${temp_c}</p>
        `
    });
}