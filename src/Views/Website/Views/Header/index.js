import React from 'react'
// import Logo from '../../../../Assets/img/landia.png';
const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-top-default navbar-expand-lg navbar-standard">
                <div class="container-fluid">
                    <a href="#page1" title="Logo" class="link logo scroll">
                        <img src="/images/landia.png" style={{ width: "10%" }} class="logo-dark" alt="logo" />
                    </a>
                    <div class="side-nav-btn animated-wrap" id="sidemenu_toggle">
                        <div class="animated-element">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="side-menu">
                <div class="inner-wrapper">
                    <span class="btn-close link" id="btn_sideNavClose"><i></i><i></i></span>
                    <nav class="side-nav">
                        <ul class="navbar-nav" id="side-menu">
                            <li class="nav-item">
                                <a class="nav-link link" href="#page1">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link link" href="#page2">Acerca</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link link" href="#page3">Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link link" href="#page4">Ecosistema</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link link" href="#page5">Animales</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link link" href="#page6">Contacto</a>
                            </li>
                        </ul>
                    </nav>

                    <div class="side-footer text-white w-100">
                        <ul class="social-icons-simple">
                            <li class="animated-wrap"><a href="javascript:void(0);" class="animated-element"><i class="fab fa-facebook-f" aria-hidden="true"></i></a> </li>
                            <li class="animated-wrap"><a href="javascript:void(0);" class="animated-element"><i class="fab fa-twitter" aria-hidden="true"></i></a> </li>
                            <li class="animated-wrap"><a href="javascript:void(0);" class="animated-element"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a> </li>
                            <li class="animated-wrap"><a href="javascript:void(0);" class="animated-element"><i class="fab fa-instagram" aria-hidden="true"></i></a> </li>
                        </ul>
                        <p class="whitecolor">&copy; 2018 Landia. Made With Love by <a class="web-link text-white" href="#!" target="_blank">Tesorerol</a></p>
                    </div>
                </div>
            </div>
            <div class="slider-social d-md-block d-none">
                <ul class="list-unstyled">
                    <li class="animated-wrap"><a class="animated-element" href="javascript:void(0);"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                    <li class="animated-wrap"><a class="animated-element" href="javascript:void(0);"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                    <li class="animated-wrap"><a class="animated-element" href="javascript:void(0);"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                    <li class="animated-wrap"><a class="animated-element" href="javascript:void(0);"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
            </div>

        </header>
    )
}

export default Header