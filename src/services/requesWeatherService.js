const APIKEY= "ccfa26ac3960e2afbb378eaf1bc63b42";

export const requestCityWeather = (city) =>{
    let request = new XMLHttpRequest();
    request.open("GET",`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`);
    request.send();
    request.onload = () => {
        console.log(request);
        if (request.status === 200){
            console.log(JSON.parse(request.response))
        }else{
            console.log(JSON.parse(request.response))
            console.log(`error ${request.status} __${request.statusText}`)
        }
    }
    
}


export const requestForecastCityWeather = (city) =>{
    let request = new XMLHttpRequest();
    request.open("GET",`api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}`);
    request.send();
    request.onload = () => {
        console.log(request);
        if (request.status === 200){
            console.log(JSON.parse(request.response))
        }else{
            console.log(JSON.parse(request.response))
            console.log(`error ${request.status} __${request.statusText}`)
        }
    }
    
}
