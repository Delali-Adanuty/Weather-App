import WeatherCard from "../components/WeatherCard";
import FormElement from "../components/FormElement";
import getWeatherFromLocation from "../src/main";
import { useState, useEffect} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import Header from "../components/Header";
const apiKey = "22882f8a3a114a8693d163911251905";

export default function App(){
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const [user, setUser] = useState(null)

    const auth = getAuth()
    useEffect(() => {
      const random = onAuthStateChanged(auth, (user) => {
        if(user){
          setUser(user)
        }else{
          setUser(null)
        }
      });

      return () => random()
    }, [auth])


    useEffect(() => {
    getWeatherFromLocation(apiKey).then(data => {
        setData(data);
        setLoading(false)
    });
    }, [])

  return(
    <>
    
    {user ? 
    loading ? null :  
    <main>
      <Header />
      <WeatherCard 
      city = {data.location.name}
      lastUpdated = {data.current.last_updated}
      temp = {data.current.temp_c}
      feelsLike = {data.current.feelslike_c}
      condition = {data.current.condition.text}
      />
    </main>
    :
     <FormElement/>}
    </>
  )
}