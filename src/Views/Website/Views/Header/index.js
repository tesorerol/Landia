import React from 'react'
import Logo from '../../../../Assets/img/landia.png';
const Header = () => {
    return (
        <div class="wrap_container cursor-light">
            <div class="main_container">
                <div class="side_nav">
                    <div class="my-sticky-nav">
                        <div class="side_menu">
                            <a class="brand-logo link" href="index-product-hotspot.html">
                                <img src={Logo} alt="logo" style={{ height: "87%", width: "87%" }} />
                            </a>
                            <div id="my_tog" class="my_tog link" onmouseover="window.my_click();">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div>
                                <a class="brand-logo sticky-logo link" href="index-product-hotspot.html">
                                    <img src={Logo} alt="logo" style={{ height: "80%", width: "80%" }} />
                                </a>
                            </div>
                            <nav class="side-nav-menu">
                                <ul class="nav-menu nav-fill" id="menu">
                                    <li class="nav-item">
                                        <a data-menuanchor="home-banner" class="nav-link link active line" href="#home-banner">Home </a>
                                    </li>
                                    <li class="nav-item">
                                        <a data-menuanchor="all-products" class="nav-link link line" href="#all-products">Products</a>
                                    </li>
                                    <li class="nav-item">
                                        <a data-menuanchor="reviews" class="nav-link link line" href="#reviews">Reviews</a>
                                    </li>
                                    <li class="nav-item">
                                        <a data-menuanchor="contact" class="nav-link link line" href="#contact">Contact</a></li>
                                </ul>
                                <div class="slider-social side-icons">
                                    <ul class="list-unstyled">
                                        <li><a class="facebook-bg-hvr" href="javascript:void(0);"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a class="twitter-bg-hvr" href="javascript:void(0);"><i class="fab fa-twitter"></i></a></li>
                                        <li><a class="linkedin-bg-hvr" href="javascript:void(0);"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a class="instagram-bg-hvr" href="javascript:void(0);"><i class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                                <p class="rites-res link"><span style={{ color: "#ffffff" }}>© 2020 MegaOne.</span></p>
                            </nav>
                        </div>
                    </div>
                </div>
                <header id="home">
                    <nav class="navbar navbar-light bg-light cursor-light d-md-none">
                        <div class="my_nav_tog d-block d-md-none">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a class="navbar-brand ml-auto" href="index-product-hotspot.html">
                            <img src={Logo} alt="Logo" style={{ height: "1%", width: 100 }} />
                        </a>
                    </nav>
                    <div class="broad">
                        <span class="btn-close" id="btn_sideNavClose"><i></i><i></i></span>
                        <nav class="side-nav-menu">
                            <a class="brand-logo" href="index-product-hotspot.html">
                                <img src={Logo} alt="Logo" style={{ height: "90%", width: "90%" }} />
                            </a>
                            {/* <ul class="nav-menu nav-fill">
                                <li class="nav-item">
                                    <a class="nav-link" href="#home-banner">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#all-products">Products</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#reviews">Reviews</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul> */}
                            <div class="social-icons">
                                <span><a href="javascript:void(0);"><i class="fab fa-facebook-f"></i></a></span>
                                <span><a href="javascript:void(0);"><i class="fab fa-twitter"></i></a></span>
                                <span><a href="javascript:void(0);"><i class="fab fa-linkedin-in"></i></a></span>
                                <span><a href="javascript:void(0);"><i class="fab fa-instagram"></i></a></span>
                            </div>
                            <p class="rites-res"><span class="d-block">© 2020 MegaOne.</span></p>
                        </nav>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header