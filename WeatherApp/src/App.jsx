import WeatherCard from "../components/WeatherCard";
import getWeatherFromLocation from "../src/main";
import { useState } from "react";
const apiKey = "22882f8a3a114a8693d163911251905";

export default function App(){
    const [city, setCity] = useState("");
    const [lastUpdated, setLastUpdated] = useState("");
    const [temp, setTemp] = useState("");
    const [feelsLike, setFeelsLike] = useState("");
    const [condition, setCondition] = useState("");
    getWeatherFromLocation(apiKey).then(data => {
        setCity(data.location.name);
        setLastUpdated(data.current.last_updated);
        setTemp(data.current.temp_c);
        setFeelsLike(data.current.feelslike_c);
        setCondition(data.current.condition.text);
    });
  return(
    <>
    <WeatherCard 
    city = {city}
    lastUpdated = {lastUpdated}
    temp = {temp}
    feelsLike = {feelsLike}
    condition = {condition}
    />
    </>
  )
}