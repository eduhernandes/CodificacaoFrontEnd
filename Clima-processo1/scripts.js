//https://api.openweathermap.org/data/2.5/weather?q=Paulista&units=metric&appid=9ff9cf221aa09c6d6d4b4ab912b7601f&lang=pt_br
// apiKey = "9ff9cf221aa09c6d6d4b4ab912b7601f";
//1-Variáveis e seleções de elementos
const apiKey = "9ff9cf221aa09c6d6d4b4ab912b7601f";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

//3-Funções
const showWeatherData = (city) => {
    console.log(city);
};


//2-Eventos
searchBtn.addEventListener("click", (e) =>{
    e.preventDefault() //evita o envio do formulário

    console.log("teste");

    const city = cityInput.value;

    console.log(city);

    showWeatherData(city);
})

