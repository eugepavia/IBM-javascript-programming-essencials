function showweatherDetails(event) {
    event.preventDefault();  // Prevent default behavior

    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with OpenWeather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Get data from API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

// Event handler for Submit button
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );