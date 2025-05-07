const apiKey = "7978f186fb9395972f2dbb9ca3452d58"; // Reemplaza con tu API Key de OpenWeatherMap

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const resultDiv = document.getElementById('weatherResult');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Ciudad no encontrada");

    const data = await response.json();
    resultDiv.innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperatura: ${data.main.temp}°C</p>
      <p>Clima: ${data.weather[0].description}</p>
      <p>Humedad: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
  }
}