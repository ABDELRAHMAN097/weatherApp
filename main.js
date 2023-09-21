var cityName = document.querySelector(".city");
var temp = document.querySelector(".temp");
var humidity = document.querySelector(".humidity");
var wind = document.querySelector(".wind")
var apikey = "85918f8c65be7b8d271098fd40d8a7a5";
var apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

var searchBox = document.querySelector(".search input");
var searchBtn = document.querySelector(".btn-serch");
var wetherIcon = document.querySelector(".weather-icon");
var weather = document.querySelector(".weather");
var erorr = document.querySelector(".erorr");
async function checkWeather (city){
    const response = await fetch(apiUrl +city+ `&appid=${apikey}`);
    if(response.status==404){
        erorr.style.display = "block";
        weather.style.display = "none";
    }else{
        var data = await response.json();

        cityName.innerHTML=data.name
        temp.innerHTML= Math.round(data.main.temp) +" °C";
        humidity.innerHTML=data.main.humidity + "%";
        wind.innerHTML=data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            wetherIcon.src = "images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            wetherIcon.src="images/clear.png"
        }else if(data.weather[0].main == "Rain"){
            wetherIcon.src="images/rain.png"
        }else if (data.weather[0].main == "Drizzle"){
            wetherIcon.src="images/drizzle.png"
        }else if(data.weather[0] == "Mist"){
            wetherIcon.src="images/mist.png"
        }
        weather.style.display = "block";
        erorr.style.display = "none";

    }
   
   
   
}

searchBtn.addEventListener("click" , ()=>{

    checkWeather(searchBox.value);
})

