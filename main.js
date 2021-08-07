
const myapi = 'a3a6e8f3dd3bbd3debaa600a7e2ac7ce'; //saját API ID //
const weather_url = 'https://api.openweathermap.org/data/2.5/weather?q=Szerencs&units=metric&lang=hu&appid=a3a6e8f3dd3bbd3debaa600a7e2ac7ce'; //API URL //

//Elkészítem a 'getWeather' függvényt //
async function getWeather() {

    const respone = await fetch(weather_url);
    const data = await respone.json();
    console.log("Adatok feldolgozáshoz:", (data));

    let city_name = document.getElementById('city_name');
    city_name.innerHTML += (data.name)

    //Fő Hőmérséklet //
    let homerseklet = document.getElementById('temp');
    homerseklet.innerHTML += (Math.round(data.main.temp * 10) / 10);

    //Szöveges időjárás //
    let clouds = document.getElementById('clouds');
    let szoveg = data.weather[0].description; //Kiválasztom a tömb 0. sorának 'description' elemét //
    let szoveg_nagybetus = szoveg.charAt(0).toUpperCase() + szoveg.slice(1); // Szöveg eleje nagybetű // 
    clouds.innerHTML += szoveg_nagybetus; //


};

//Függvény meghívása //
getWeather();


