import React, { useEffect } from 'react'
import Header from './Views/Header';
// import Home from './Views/Home';
import Logo from '../../Assets/img/landia.png';
import './assets/css/bundle.min.css';
import './assets/css/LineIcons.min.css'
import './assets/css/jquery.fancybox.min.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/wow.css'
import './assets/css/tootik.min.css'
import './assets/css/line-awesome.min.css'
import './assets/css/jquery.pagepiling.css'
import './assets/css/model-window.css'
import './assets/css/style.css'
import Home from './Views/Home';
import About from './Views/About';
// import Slider1 from './Views/Slider/Slider1';
// import Slider2 from './Views/Slider/Slider2';
const scripts = ["/js/jquery.pagepiling.min.js", "/js/contact_us.js", "/js/script.js"];
const Website = (props) => {
    const { Type } = props;
    useEffect(() => {
        if (Type === "website") {
            setTimeout(() => {
                scripts.map((r, index) => {
                    if (document.getElementById(index)) {
                        document.getElementById(index).remove();
                    }
                    const script = document.createElement("script");
                    script.id = index;
                    script.src = r;
                    script.async = true;
                    document.body.appendChild(script);
                })
            }, 3000);
        }
    }, [])
    return (
        <>
            <div class="loader-bg">
                <div id="container">
                    <svg viewBox="0 0 100 100">
                        <defs>
                            <filter id="shadow">
                                <feDropShadow dx="0" dy="0" stdDeviation="0.5"
                                    flood-color="#dabd1d" />
                            </filter>
                        </defs>
                        <circle id="spinner" style={{ fill: "transparent", stroke: "#ed2d34", strokeWidth: "8px", strokeLinecap: "round", filter: "url(#shadow)" }} cx="50" cy="50" r="45" />
                    </svg>
                </div>
            </div>
            <Header />
            <div id="pagepiling">
                <Home />
                <About />
            </div>
        </>
    )
}

export default Website