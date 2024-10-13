/* eslint-disable no-unused-vars */
import axios from "axios"
import { useContext, useRef, useState } from "react"
import { WeatherDataContext } from "../app"

export default function Navbar() {

    const searchRef = useRef()
    const [searchBar, setSearchBar] = useState(false)
    const [menuState, setMenuState] = useState(false)
    const [weatherData, setWeatherData] = useContext(WeatherDataContext)

    const searchWeather = (ev) => {
        ev.preventDefault();
        let searchValue = searchRef.current.value
        let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchValue}?unitGroup=metric&key=BNPU8J67RVZMAC83RTLU25THJ`

        axios({
            method: 'GET',
            url: url,
        }).then((response) => {
            console.log(response.data)
            setWeatherData(response.data)
        }).finally(() => {
            setMenuState(false)
            setSearchBar(false)
        })

        localStorage.setItem('_just_city', searchValue)
    }

    return (
        <section className="navbar">

            <nav>
                <div className="menu-area">
                    <svg onClick={() => setMenuState(!menuState)} fill="currentColor" width="24" height="24" viewBox="0 0 24 24" className="menuBar" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg"><path id="primary" d="M3,12H21M9,18H21M3,6H15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path></svg>
                    { menuState ?
                    <div className="menu">
                        <ul>
                            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1.5 -2.5 24 24" width="24" height="24" fill="currentColor"><path d="m17.83 4.194.42-1.377a1 1 0 1 1 1.913.585l-1.17 3.825a1 1 0 0 1-1.248.664l-3.825-1.17a1 1 0 1 1 .585-1.912l1.672.511A7.381 7.381 0 0 0 3.185 6.584l-.26.633a1 1 0 1 1-1.85-.758l.26-.633A9.381 9.381 0 0 1 17.83 4.194zM2.308 14.807l-.327 1.311a1 1 0 1 1-1.94-.484l.967-3.88a1 1 0 0 1 1.265-.716l3.828.954a1 1 0 0 1-.484 1.941l-1.786-.445a7.384 7.384 0 0 0 13.216-1.792 1 1 0 1 1 1.906.608 9.381 9.381 0 0 1-5.38 5.831 9.386 9.386 0 0 1-11.265-3.328z"/></svg> Refresh</li>
                            <li><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> <title>Bold/SVG/location</title> <desc>Created with Sketch.</desc> <defs></defs> <g id="Bold-Outline" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="location" fillRule="nonzero" fill="currentColor"> <path d="M13.2729298,23.2555492 C12.5338757,23.8654009 11.466124,23.8654008 10.7270701,23.2555491 C5.2769456,18.758223 2.5,14.3495105 2.5,10 C2.5,4.75329488 6.75329488,0.5 12,0.5 C17.2467051,0.5 21.5,4.75329488 21.5,10 C21.5,14.3495105 18.7230544,18.758223 13.2729298,23.2555492 Z M19.5,10 C19.5,5.85786438 16.1421356,2.5 12,2.5 C7.85786438,2.5 4.5,5.85786438 4.5,10 C4.5,13.6443863 6.96541108,17.5585028 12.0000001,21.712938 C17.0345889,17.5585029 19.5,13.6443863 19.5,10 Z M12,13 C9.790861,13 8,11.209139 8,9 C8,6.790861 9.790861,5 12,5 C14.209139,5 16,6.790861 16,9 C16,11.209139 14.209139,13 12,13 Z M12,11 C13.1045695,11 14,10.1045695 14,9 C14,7.8954305 13.1045695,7 12,7 C10.8954305,7 10,7.8954305 10,9 C10,10.1045695 10.8954305,11 12,11 Z" id="shape"></path> </g> </g> </svg> Use My Location</li>
                        </ul>
                    </div> : null
                    }   
                </div>
                <h1>JUST<span>WEATHER</span></h1>
                { searchBar ?
                <form onSubmit={searchWeather} className="input-area">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 -2.5 24 24" width="24" height="24" fill="currentColor"><path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094 3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z"/></svg>
                    <input ref={searchRef} type="text" placeholder="Search city"/>
                    <svg onClick={() => setSearchBar(false)} xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 24 24" width="24" height="24" fill="currentColor"><path d="m7.314 5.9 3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"/></svg>
                </form> : null
                }
                <svg onClick={() => setSearchBar(!searchBar)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2Z" fill="currentColor"/> </svg>
            </nav>

        </section>
    )
}

