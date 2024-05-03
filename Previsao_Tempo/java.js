const input = document.querySelector("input");
const button = document.querySelector("button");
const img = document.querySelector("img");

const city = document.querySelector("#city");
const degree = document.querySelector("#degree");

const content = document.querySelector(".content");

button.addEventListener("click", () => {
    if (!input.value) return;
    getWeatherData();
});

async function getWeatherData() {
    const apiKey = "a4084e9999dacf565a392d23262e32ad";
    const urlApi = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input.value)}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(urlApi);

        console.log(response)

        const data = await response.json();

        console.log(data)

        if (data.cod && data.cod === "404") {
            return alert("Cidade não encontrada.");
        }

        if (!data.name || !data.main || !data.main.temp || !data.sys || !data.sys.country || !data.weather || !data.weather[0]) {
            return alert("Dados inválidos retornados pela API.");
        }
        
        loadWeatherInfo(data);
    } catch (error) {
        alert("Erro ao buscar dados de clima.");
        console.error(error);
    }
}

function loadWeatherInfo(data) {
    city.innerHTML = `${data.name || ''}, ${data.sys.country || ''}`;
    degree.innerHTML = `Temperatura: ${Math.round(data.main.temp || 0)}° C`;
    img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    content.style.display = "flex";
}
