export default function WeatherCard(props){
    return(
        <section className="weather">
            <p className="last-updated">Last updated at {props.lastUpdated}</p>
            <p className="location">{props.city}</p>
            <div className="temp">
                <h1 className="temp">{props.temp}°</h1>
                <p>C</p>
            </div>
            <p className="feels-like">Feels like {props.feelsLike}°</p>
            <p className="condition">{props.condition}</p>
        </section>
    )
}