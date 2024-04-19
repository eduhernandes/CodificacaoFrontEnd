HTML
começar apagando os conteúdos estáticos
    #city
        img src=""
    #descriprion
        img src=""
    #humidity
    #wind

CSS
incluir
    .hide {
        display: none !important;
    }

JS
incluir instrução para remover .hide

variável:
const wheatherContainer = document.querySelector('#wheather-data');

na função showWeatherData incluir:
wheatherContainer.classList.remove("hide");

incluir evento "Enter"
cityInput.addEventListener("keyup", (e) =>{

    if(e.code === "Enter"){
        const city = e.target.value;

        showWeatherData(city);
    }