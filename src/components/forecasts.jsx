/* eslint-disable react/prop-types */
import { useContext, useState } from "react"
import { WeatherDataContext } from "../app"

export default function Forecasts() {

    const [tab, setTab] = useState(0)
    const [weatherData, setWeatherData] = useContext(WeatherDataContext)

    function swipeLeft() {
        let list = document.querySelector(".forecast-list")
        list.scrollBy(-150, 0)
    }

    function swipeRight() {
        let list = document.querySelector(".forecast-list")
        list.scrollBy(150, 0)
    }

    return (
        <section className="footer">

            <div className="forecast-container">
                <div className="top-bar">
                    <div>
                        <p className={tab == 0 ? "active" : ""} onClick={() => setTab(0)}>Today</p>
                        <p className={tab == 1 ? "active" : ""} onClick={() => setTab(1)}>Week</p>
                    </div>
                    <div>
                        <svg onClick={swipeLeft} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/></g></g></svg>
                        <svg onClick={swipeRight} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"/></g></g></svg>
                    </div>
                </div>
                { tab == 0 ?
                    <div className="forecast-list">
                        {
                            weatherData.days ? 
                                weatherData.days[0].hours.map((data, key) => {
                                    return <HourCast key={key} data={data} />
                                })
                            : null
                        }
                    </div> :
                    <div className="forecast-list">
                        {
                            weatherData.days ? 
                                weatherData.days.map((data, key) => {
                                    return <WeekCast key={key} data={data} />
                                })
                            : null
                        }
                    </div>
                }
            </div>

        </section>
    )
}

function HourCast(props) {

    return (
        <div className="forecast">
            <p>{props.data.datetime}</p>
            <img src="/assets/cloudy.png" alt="" />
            <h1>{props.data.temp} °C</h1>
        </div>
    )
}

function WeekCast(props) {

    let date = new Date(props.data.datetime).toLocaleDateString('us', {dateStyle: 'medium'})

    return (
        <div className="forecast">
            <p>{date}</p>
            <img src="/assets/cloudy.png" alt="" />
            <h1>{props.data.temp} °C</h1>
        </div>
    )
}