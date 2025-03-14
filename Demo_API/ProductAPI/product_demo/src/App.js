import { useEffect, useState } from "react";
import { fetchWeatherData } from "./service/ProductService";

function App() {
    const [weather, setWeather] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchWeatherData()
            .then(setWeather)
            .catch(err => setError(err.message));
    }, []);
    return (
        <div>
            <h1>Weather Forecast</h1>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            <ul>
                {weather.map((w, index) => (
                    <li key={index}>
                        {w.date}: {w.temperatureC}°C - {w.summary}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default App;


