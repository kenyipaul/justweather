import "./sass/main.scss"

import Banner from "./components/banner"
import Forecasts from "./components/forecasts"
import Navbar from "./components/navbar"

export default function App() {
    return (
        <div id="app">

            <Navbar />
            <Banner />
            <Forecasts />

        </div>
    )
}