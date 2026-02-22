
const apiKey="";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=863242cfb1d357e6093d9a4df19a4b&units=metric&q=bangalore";;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector("search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data)
    document.querySelector(".city").innerHTMl = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();

