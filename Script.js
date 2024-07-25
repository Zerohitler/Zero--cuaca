const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const city = 'Jakarta';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function fetchWeatherData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        updateUI(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateUI(data) {
    document.getElementById('temp-value').innerText = `${data.main.temp}°C`;
    document.getElementById('wind-value').innerText = `${data.wind.speed} km/h`;
    document.getElementById('humidity-value').innerText = `${data.main.humidity}%`;
    document.getElementById('cloud-map').innerText = 'Map Awan Data';
    document.getElementById('wind-map').innerText = 'Map Angin Data';
    document.getElementById('temp-map').innerText = 'Map Suhu Data';
}

setInterval(fetchWeatherData, 300000); // Refresh every 5 minutes
fetchWeatherData();
