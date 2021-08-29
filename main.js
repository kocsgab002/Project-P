const myapi = "a3a6e8f3dd3bbd3debaa600a7e2ac7ce"; //saját API ID //

const weather_url_extended ="https://api.openweathermap.org/data/2.5/onecall?lat=47.580264&lon=19.101505&units=metric&mode=json&lang=hu&appid=a3a6e8f3dd3bbd3debaa600a7e2ac7ce";
const weather_url ="https://api.openweathermap.org/data/2.5/weather?lat=47.580264&lon=19.101505&units=metric&lang=hu&appid=a3a6e8f3dd3bbd3debaa600a7e2ac7ce"; //API URL //

async function moonMove() {
  const respone_moon = await fetch(weather_url_extended); //API beolvasása //
  const data_moon = await respone_moon.json(); // JSON formátummá alakítás //
  console.log("Moon Adatok feldolgozáshoz:", data_moon);

  //Holdkelte kiitarása//
  let sec_moon = data_moon.daily[0].moonrise;
  let date_moon = new Date(sec_moon * 1000);
  let timestr = date_moon.toLocaleTimeString();
  let moonrise = document.getElementById("moonrise");
  moonrise.innerHTML += timestr;
  
//Holdnyugta kiitarása//
  let sec_moon2 = data_moon.daily[0].moonset;
  let date_moon2 = new Date(sec_moon2 * 1000);
  let timestr2 = date_moon2.toLocaleTimeString();
  let moonset = document.getElementById("moonset");
  moonset.innerHTML += timestr2;
}

//Elkészítem a 'getWeather' függvényt //
async function getWeather() {
  const respone = await fetch(weather_url); //API beolvasása //
  const data = await respone.json(); // JSON formátummá alakítás //
  console.log("Adatok feldolgozáshoz:", data);

  //Városnév beolvasás, kiiratás //
  let city_name = document.getElementById("city_name");
  city_name.innerHTML += data.name;

  //Fő Hőmérséklet //
  let homerseklet = document.getElementById("temp");
  homerseklet.innerHTML += Math.round(data.main.temp * 10) / 10;

  //Szöveges időjárás //
  let clouds = document.getElementById("clouds");
  let szoveg = data.weather[0].description; //Kiválasztom a tömb 0. sorának 'description' elemét //
  let szoveg_nagybetus = szoveg.charAt(0).toUpperCase() + szoveg.slice(1); // Szöveg eleje nagybetű //
  clouds.innerHTML = szoveg_nagybetus; //Szöveges időjárás kiírása //

  //Min.Hőm. kiiratása//
  let mintemp = document.getElementById("mintemp");
  mintemp.innerHTML = Math.round(data.main.temp_min * 10) / 10;

  //Max.Hőm. kiiratása//
  let maxtemp = document.getElementById("maxtemp");
  maxtemp.innerHTML = Math.round(data.main.temp_max * 10) / 10;

  //Páratartalom kiiratása//
  let humidity = document.getElementById("humidity");
  humidity.innerHTML = data.main.humidity;

  //Légnyomás kiiratása//
  let pressure = document.getElementById("pressure");
  pressure.innerHTML = data.main.pressure;

  //Napkelte kiitarása//
  let sec = data.sys.sunrise;
  let date = new Date(sec * 1000);
  let timestr = date.toLocaleTimeString();
  let sunrise = document.getElementById("sunrise");
  sunrise.innerHTML = timestr;

  //Napnyugta kiitarása//
  let sec2 = data.sys.sunset;
  let date2 = new Date(sec2 * 1000);
  let timestr2 = date2.toLocaleTimeString();
  let sunset = document.getElementById("sunset");
  sunset.innerHTML = timestr2;

  //Megfeleő background beállítása//
  let container = document.getElementById("container");
  let icons = document.getElementById("icons");
  let id = data.weather[0].id;
  if (id > 199 && id < 233) {
    container.classList.add("thunderstorm");
    icons.classList.add("fa-bolt")
  } else if (id > 299 && id < 322) {
    container.classList.add("drizzle");
    icons.classList.add("fa-cloud-showers-heavy");
  } else if (id > 499 && id < 532) {
    container.classList.add("rainy");
    icons.classList.add("fa-cloud-showers-heavy");
  } else if (id > 599 && id < 623) {
    container.classList.add("snow");
    icons.classList.add("fa-snowflake");
  } else if (id > 800 && id < 805) {
    container.classList.add("cloudy");
    icons.classList.add("fa-cloud");
  } else if (id > 700 && id < 782) {
    container.classList.add("mist");
    icons.classList.add("fa-smog");
  } else {
    container.classList.add("sunshine");
    icons.classList.add("fa-sun");
  }

  //Éjszaja van-e?//
  let time_now = new Date().getTime();
  if (date2.getTime() < new Date().getTime()) {
    container.classList.add("night");
  } else {
    
  }
}

//Függvény meghívása //
getWeather();
moonMove();
