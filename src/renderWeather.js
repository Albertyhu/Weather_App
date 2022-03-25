const weather = {
    temp: 0, 
    humidity: 0,
    description: '', 
    windspeed: 0,

} 
const temperature = document.getElementById('temperature'); 
const humidity = document.getElementById('humidity');
const description = document.getElementById('description');
const windSpeed = document.getElementById('windSpeed');

function setTemp(e) {
    weather.temp = e;
    temperature.innerHTML = e; 
}
function setHumidity(e) {
    weather.humidity = e;
    humidity.innerHTML = e; 
}
function setDescription(e) {
    weather.description = e;
    description.innerHTML = e; 
}
function setWindSpeed(e) {
    weather.windspeed = e;
    windSpeed.innerHTML = e; 
}


export const renderWeather = async () => {
    const weather = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=34.12104887324906&lon=-118.06623373130435&appid=053711b6648bf41d46aa4c876f6549d5')
        .then(response => {
            return response.json(); 
        })
        .then(response => {
            console.log(response)
            setTemp(response.main.temp);
            setHumidity(response.main.humidity); 
            setDescription(response.weather[0].description)
            setWindSpeed(response.wind.speed)
        })
        .catch(e => {
            console.log(e.code + ": " + e.message)
        })
}

export const getWeatherByCity = async (city) => {
    const query = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=053711b6648bf41d46aa4c876f6549d5'; 
    await fetch(query)
        .then(response => { return response.json() })
        .then(response => {
            setTemp(response.main.temp);
            setHumidity(response.main.humidity);
            setDescription(response.weather[0].description)
            setWindSpeed(response.wind.speed)
        })
        .catch(e => {
            console.log(e.code + ": " + e.message)
        })
}


export const getWeatherMap = async () => {
    await fetch('http://maps.openweathermap.org/maps/2.0/weather/TA2/0/0/0?appid=3a18f9464645ccf8af3b81aefc9608a3')
        .then(response => { return response.json() })
        .then(response => {
            console.log(response)
        })
}