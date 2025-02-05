// selecting elements from the DOM
const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const image = document.querySelector('.icon');

async function getWeather (cityn) {
 // Using environment variable for the API key
 const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;  //fetch the API key from the environment variable 
 let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityn}&appid=${apiKey}&units=metric`);
 let data = await res.json();
 console.log(data);


document.querySelector('.centigrade').innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector('.cityn').innerHTML = data.name;
document.querySelector('.humidityp').innerHTML = Math.round (data.main.humidity) + "%";
document.querySelector('.windsp').innerHTML = Math.round (data.wind.speed) + "km/h";

//other weather states in visuals
if(data.weather[0].main == "Clouds") {
    image.src = "/cloudc.jpg"
} else if(data.weather[0].main == "clear") 
    {image.src = "/clear.jpg"}

else if(data.weather[0].main == "Rain") 
    {image.src = "/rain3.png"}

else if(data.weather[0].main == "Drizzle") 
    {image.src = "/drizzle.png"}

}

searchButton.addEventListener('click', () => {
    getWeather(searchInput.value);
});


