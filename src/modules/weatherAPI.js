import { MainInfo } from "./constructor";

const apiKey =  "c3ce5c27c2eab8287f2be14870b310cb",
      apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Brest&appid=${apiKey}`;
const button = document.querySelector('.control__info-button');

// console.log(infoArea);

async function checkWeather() {    
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data, "data");
    
    new MainInfo(
        data.main.temp,
        data.weather[0].main,
        data.main.temp,
        "OK",
        '.control__info-extra'
      ).render();   
}

checkWeather();

button.addEventListener('click', (e) => {
    e.preventDefault();

    checkWeather();
})