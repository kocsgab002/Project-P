const myapi = 'a3a6e8f3dd3bbd3debaa600a7e2ac7ce';
const weather_url = 'https://api.openweathermap.org/data/2.5/weather?q=Budapest&units=metric&lang=hu&appid=a3a6e8f3dd3bbd3debaa600a7e2ac7ce';
async function getWeather() {
    const respone = await fetch(weather_url);
    const data = await respone.json();
    let homerseklet = document.getElementById('temp');
    homerseklet.innerHTML += (Math.round(data.main.temp * 10) / 10);
    console.log("Aktuális hőmérséklet:",(data.main.temp));
};
getWeather();


