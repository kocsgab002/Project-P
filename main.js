
const myapi = 'a3a6e8f3dd3bbd3debaa600a7e2ac7ce'; //saját API ID //
const weather_url = 'https://api.openweathermap.org/data/2.5/weather?q=Budapest&units=metric&lang=hu&appid=a3a6e8f3dd3bbd3debaa600a7e2ac7ce'; //API URL //

//Elkészítem a 'getWeather' függvényt //
async function getWeather() {

    const respone = await fetch(weather_url); //API beolvasása //
    const data = await respone.json();         // JSON formátummá alakítás //
    //console.log("Adatok feldolgozáshoz:", (data));

    //Városnév beolvasás, kiiratás //
    let city_name = document.getElementById('city_name');
    city_name.innerHTML += (data.name)

    //Fő Hőmérséklet //
    let homerseklet = document.getElementById('temp');
    homerseklet.innerHTML += (Math.round(data.main.temp * 10) / 10);

    //Szöveges időjárás //
    let clouds = document.getElementById('clouds');
    let szoveg = data.weather[0].description; //Kiválasztom a tömb 0. sorának 'description' elemét //
    let szoveg_nagybetus = szoveg.charAt(0).toUpperCase() + szoveg.slice(1); // Szöveg eleje nagybetű // 
    clouds.innerHTML += szoveg_nagybetus; //Szöveges időjárás kiírása //

    //Min.Hőm. kiiratása//
    let mintemp = document.getElementById('mintemp');
    mintemp.innerHTML += (Math.round(data.main.temp_min * 10) / 10);

    //Max.Hőm. kiiratása//
    let maxtemp = document.getElementById('maxtemp');
    maxtemp.innerHTML += (Math.round(data.main.temp_max * 10) / 10);

    //Páratartalom kiiratása//
    let humidity = document.getElementById('humidity');
    humidity.innerHTML += data.main.humidity;

    //Légnyomás kiiratása//
    let pressure = document.getElementById('pressure');
    pressure.innerHTML += data.main.pressure;

    //Napkelte kiitarása//
    let sec = data.sys.sunrise;
    let date = new Date(sec * 1000);
    let timestr = date.toLocaleTimeString();
    let sunrise = document.getElementById('sunrise');
    sunrise.innerHTML += timestr;

    //Napnyugta kiitarása//
    let sec2 = data.sys.sunset;
    let date2 = new Date(sec2 * 1000);
    let timestr2 = date2.toLocaleTimeString();
    let sunset = document.getElementById('sunset');
    sunset.innerHTML += timestr2;


    let back = document.getElementsByClassName("container");
    console.log(back);

    document.body.style.background = "#f3f3f3";
};

//Függvény meghívása //
getWeather();




