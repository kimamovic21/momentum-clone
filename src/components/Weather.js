import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {WeatherContainer, Temp, City} from './WeatherStyles'

const Weather = () => {

//const url = 'https://api.openweathermap.org/data/2.5/weather?q=instanbul&units=imperial&appid=a237636b683ca065f849f9b5dc2fd4b9'
const url = 'https://api.openweathermap.org/data/2.5/weather?q=sarajevo&units=metric&appid=569adb4e6e9b390acf9c205013272156'
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    console.log(data);

    if(!data) return null; //if there is no data return null

    return (
        <WeatherContainer>
            <Temp>{data.main.temp.toFixed(0)}&#176;</Temp>
            <City>Sarajevo, BiH</City>
        </WeatherContainer>
    )
}

export default Weather
