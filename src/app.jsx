import "./sass/main.scss"
import axios from "axios"
import React, { useEffect, useState } from "react"

import Banner from "./components/banner"
import Forecasts from "./components/forecasts"
import Navbar from "./components/navbar"

export const WeatherDataContext = React.createContext();

export default function App() {

    const [weatherData, setWeatherData] = useState([])

    useEffect(() => {
        let storedCity = localStorage.getItem('_just_city')

        if (storedCity == null) {
            localStorage.setItem('_just_city', 'new york')
            storedCity = 'new york'
        }

        let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${storedCity}?unitGroup=metric&key=BNPU8J67RVZMAC83RTLU25THJ`

        axios({
            method: 'GET',
            url: url,
        }).then((response) => {
            setWeatherData(response.data)
        })

    }, [weatherData, setWeatherData])

    return (
        <WeatherDataContext.Provider value={[weatherData, setWeatherData]}>
            <div id="app">
                <Navbar />
                <Banner />
                <Forecasts />
            </div>
        </WeatherDataContext.Provider>
    )
}