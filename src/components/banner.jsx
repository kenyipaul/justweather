/* eslint-disable react/prop-types */
import * as Icon from "./icons"

export default function Banner() {
    return (
        <section className="banner-container">

            <div className="banner">
                <div className="header">
                    <h1>Today</h1>
                    <h1>Wed, 25 Oct, 2025</h1>
                </div>
                <div>
                    <h1>80 °C</h1>
                    <h2>Partially Cloudy</h2>
                    <p>A thunderstorm on the prowl in the morning; otherwise, considerable cloudiness</p>
                </div>
                <div>
                    <svg width="20" height="20" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve"> <path fill="currentColor" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"/> </svg>
                    <h1>Rwanda | Kigali</h1>
                </div>
            </div>

            <div className="highlights">
                <h1>Today&apos;s Highlights</h1>
                <div className="more-details">
                    <Detail title="Temperature" value="24.8 pi" icon={<Icon.Temperature />} />
                    <Detail title="Humidity" value="24.8 pi" icon={<Icon.Humidity />} />
                    <Detail title="UV Index" value="24.8 pi" icon={<Icon.UVIndex />} />
                    <Detail title="Pressure" value="24.8 pi" icon={<Icon.Pressure />} />
                    <Detail title="Wind Gust" value="24.8 pi" icon={<Icon.WindGust />} />
                    <Detail title="Wind Speed" value="24.8 pi" icon={<Icon.WindSpeed />} />

                </div>
            </div>

        </section>
    )
}


function Detail(props) {
    return (
        <div className="detail">
            {props.icon}
            <div>
                <h1>{props.value}</h1>
                <p>{props.title}</p>
            </div>
        </div>
    )
}