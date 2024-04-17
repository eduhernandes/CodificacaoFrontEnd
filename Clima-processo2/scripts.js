//https://api.openweathermap.org/data/2.5/weather?q=Paulista&units=metric&appid=9ff9cf221aa09c6d6d4b4ab912b7601f&lang=pt_br
// apiKey = "9ff9cf221aa09c6d6d4b4ab912b7601f";
//Variáveis e seleções de elementos
const apiKey = "9ff9cf221aa09c6d6d4b4ab912b7601f";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const city = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");


//Funções
const showWeatherData = (city) => {
    console.log(city);
};


//Eventos
searchBtn.addEventListener("click", (e) =>{
    e.preventDefault() //evita o envio do formulário

    const city = cityInput.value;

    showWeatherData(city);
})

