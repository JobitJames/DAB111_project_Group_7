async function getApiKey() {
    const response = await fetch('/get_api_key'); // Fetch the API key from the backend
    const data = await response.json();
    return data.api_key;
}

async function fetchWeather(location = "Windsor") {
    const apiKey = await getApiKey(); // Dynamically get the API key
    const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (response.ok) {
            // Update weather details
            document.querySelector('.location').textContent = data.city.name + ', ' + data.city.country;
            document.querySelector('.temp').innerHTML = `${data.list[0].main.temp.toFixed(0)}&deg;C`;
            document.querySelector('.condition').textContent = data.list[0].weather[0].description;

            // Update the current date
            const currentDate = new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            document.querySelector('.date').textContent = currentDate;

            // Update hourly forecast
            const hourlyElements = document.querySelectorAll('.hourly');
            for (let i = 0; i < hourlyElements.length; i++) {
                const forecast = data.list[i];
                const time = new Date(forecast.dt * 1000).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                });
                const temp = forecast.main.temp.toFixed(0);

                hourlyElements[i].querySelector('.time').textContent = time;
                hourlyElements[i].querySelector('.temp').innerHTML = `${temp}&deg;`;
            }
        } else {
            document.querySelector('.location').textContent = "Error fetching data";
            console.error(data.message);
        }
    } catch (error) {
        document.querySelector('.location').textContent = "Error fetching data";
        console.error(error);
    }
}

// Default weather load
fetchWeather();
