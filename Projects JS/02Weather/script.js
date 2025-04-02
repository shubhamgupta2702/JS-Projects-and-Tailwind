document.addEventListener('DOMContentLoaded' , () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");
    const humidity = document.getElementById("humidity");
    const pressure = document.getElementById("pressure");
    const seaLevel = document.getElementById("sea-level");

    const API_KEY = "f49f10b6f0f4586464422b139c4be939"

    getWeatherBtn.addEventListener('click' , async() => {
        const city = cityInput.value.trim();
         if(!city) return;

         try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
            
         } catch (error) {
            showError();
         }

    })

    async function fetchWeatherData(city){
        //gets a data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

        const response = await fetch(url);
        console.log(response);
        console.log( typeof response);
        
        if(!response.ok) {
            throw new Error("City Not Found")
        }
        const data = await response.json();
        return data
    }

    function displayWeatherData(weatherData){
        //display
        console.log(weatherData);
        const {name , main , weather} = weatherData;
        cityNameDisplay.textContent = name

        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");
        temperatureDisplay.textContent = `Temperature: ${main.temp}`;
        descriptionDisplay.textContent = `Weather: ${weather[0].description}`;
        humidity.textContent = `Humidity: ${main.humidity}`;
        pressure.textContent = `Presssure: ${main.pressure}`
        seaLevel.textContent = `Sea-Level: ${main.sea_level}`
        
    }

    function showError(){
        weatherInfo.classList.add("hidden");
        errorMessage.classList.remove("hidden");
    }
})