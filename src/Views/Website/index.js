import React, { useEffect } from 'react'
import Header from './Views/Header';
// import Home from './Views/Home';
import Logo from '../../Assets/img/landia.png';
import Slider from './Views/Slider/Slider1';
import Service from './Views/Service';
import Team from './Views/Team';
import Skills from './Views/Skils';
import Porftolio from './Views/Porftolio';
import Contact from './Views/Contact';
// import './assets/css/bundle.min.css';
// import './assets/css/revolution-settings.min.css';
// import './assets/css/owl.carousel.min.css';
// import './assets/css/swiper.min.css';
// import './assets/css/LineIcons.min.css';
// import './assets/css/jquery.pagepiling.css';
// import './assets/css/pagepiling.css';
// import './assets/css/style.css';
// import Home from './Views/Home';
// import About from './Views/About';
// import Slider1 from './Views/Slider/Slider1';
// import Slider2 from './Views/Slider/Slider2';
const scripts = ["/js/jquery.pagepiling.min.js", "/js/contact_us.js", "/js/script.js"];
const Website = (props) => {
    const { Type } = props;
    // useEffect(() => {
    //     if (Type === "website") {
    //         setTimeout(() => {
    //             scripts.map((r, index) => {
    //                 if (document.getElementById(index)) {
    //                     document.getElementById(index).remove();
    //                 }
    //                 const script = document.createElement("script");
    //                 script.id = index;
    //                 script.src = r;
    //                 script.async = true;
    //                 document.body.appendChild(script);
    //             })
    //         }, 3000);
    //     }
    // }, [])
    return (
        <>
            <div class="loader" id="loader-fade">
                <div class="linear-activity">
                    <div class="indeterminate"></div>
                </div>
            </div>
            <Header />
            <div id="pagepiling">
                <Slider />
                <Service />
                <Team />
                <Skills />
                <Porftolio />
                <Contact />
            </div>
            <div id="aimated-cursor">
                <div id="cursor">
                    <div id="cursor-loader"></div>
                </div>
            </div>
        </>
    )
}

export default Website