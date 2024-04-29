//https://api.openweathermap.org/data/2.5/weather?q=Tutuba&units=metric&appid=b35a625873a7eb5b071cf6a5810a901d&lang=pt_br
//Variáveis e seleções de elementos
const apiKey = "b35a625873a7eb5b071cf6a5810a901d";
const apiUnsplash = "https://source.unsplash.com/1600x900/?";
const cityInput = document.querySelector("#city-input");
const searchBt = document.querySelector("#search");

const cityElement  = document.querySelector("#city");
const tempElement  = document.querySelector("#temperature span");
const descElement  = document.querySelector("#description");
const weatherIconElement  = document.querySelector("#weather-icon");
const countryElement  = document.querySelector("#country");
const umidityElement  = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

const weatherData = document.querySelector("#weather-data");

//Funções
const getWeatherData = async(city) =>{
    const apiWheatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    
    const res = await fetch(apiWheatherURL);
    const data = await res.json();

    return data;
};

const showWeatherData = async(city) => {

    const data = await getWeatherData(city);

    if(data.cod === "404"){
        window.alert("A cidade que você digitou não existe");
        return
    }

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    let descricao = data.weather[0].description;
    let descricao2 = descricao.charAt(0).toUpperCase() + descricao.slice(1);
    descElement.innerText = descricao2;
    weatherIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute('src', `https://flagsapi.com/${data.sys.country}/shiny/64.png`);
    umidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed} km/h`;

    // Altera a imagem de fundo
    document.body.style.backgroundImage = `url("${apiUnsplash + city}")`;

    weatherData.classList.remove("hide");
};


//Eventos
searchBt.addEventListener("click", (e) => {
    e.preventDefault(); //evita o envio do formulário
    const city = cityInput.value;
    showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
      const city = e.target.value;
      showWeatherData(city);
    }
  });
