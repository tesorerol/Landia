import React from 'react'
const About = () => {
    return (
        <section class="section slide2 all-products" id="all-products">
            <div class="container expand-container position-relative">
                <div class="row align-items-center mb-3 mb-md-5 section-heading">
                    <div class="col-12 col-md-6 section2left wow" data-wow-delay=".8s">
                        <h2 class="main-font">Sitios <span class="d-block main-color">Protegidos</span></h2>
                    </div>
                    <div class="col-12 col-md-6 section2right wow" data-wow-delay=".8s">
                        <div class="row my-4 my-md-0">
                            <div class="col-12 col-md-4">
                                <div class="parallax-box text-grey">
                                    <h2 class="count">1</h2>
                                    <h5>Sitio Protegidos</h5>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="parallax-box text-grey">
                                    <h2 class="count">560</h2>
                                    <h5>Especies Protegidas</h5>
                                </div>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="parallax-box text-grey">
                                    <h2 class="count">786</h2>
                                    <h5>Arboles Renacidos</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row products-fade wow" data-wow-delay=".8s">
                    <div class="owl-products owl-carousel owl-theme wow fadeInUp">
                        <div class="team-box item">
                            <div class="team-image">
                                <img src="https://wwflac.awsassets.panda.org/img/y__j__rey_millet__wwf_canon_509830.jpg" alt="image" />
                            </div>
                            <div class="team-text">
                                <h5 class="main-font">Jaguar</h5>
                                <a onclick="morphic_window('morphic-window1');" class="btn btn-medium btn-rounded btn-trans text-capitalize mt-3 mb-5 mb-md-0">View Detail</a>
                            </div>
                        </div>
                        <div class="team-box item">
                            <div class="team-image">
                                <img src="https://www.ngenespanol.com/wp-content/uploads/2018/08/El-puma-del-este-de-Norteam%C3%A9rica-es-declarado-oficialmente-extinto-1280x720.jpg" alt="image" />
                            </div>
                            <div class="team-text">
                                <h5 class="main-font">Puma</h5>
                                <a onclick="morphic_window('morphic-window2');" class="btn btn-medium btn-rounded btn-trans text-capitalize mt-3 mb-5 mb-md-0">View Detail</a>
                            </div>
                        </div>
                        {/* <div class="team-box item">
                            <div class="team-image">
                                <img src="product-hotspot/images/product-img3.jpg" alt="image" />
                            </div>
                            <div class="team-text">
                                <h5 class="main-font">Air Jordan</h5>
                                <a onclick="morphic_window('morphic-window3');" class="btn btn-medium btn-rounded btn-trans text-capitalize mt-3 mb-5 mb-md-0">View Detail</a>
                            </div>
                        </div>
                        <div class="team-box item">
                            <div class="team-image">
                                <img src="product-hotspot/images/product-img4.jpg" alt="image" />
                            </div>
                            <div class="team-text">
                                <h5 class="main-font">Adidas Consortium</h5>
                                <a onclick="morphic_window('morphic-window4');" class="btn btn-medium btn-rounded btn-trans text-capitalize mt-3 mb-5 mb-md-0">View Detail</a>
                            </div>
                        </div>
                        <div class="team-box item">
                            <div class="team-image">
                                <img src="product-hotspot/images/product-img5.jpg" alt="image" />
                            </div>
                            <div class="team-text">
                                <h5 class="main-font">Nike Air Mag</h5>
                                <a onclick="morphic_window('morphic-window5');" class="btn btn-medium btn-rounded btn-trans text-capitalize mt-3 mb-5 mb-md-0">View Detail</a>
                            </div>
                        </div>
                        <div class="team-box item">
                            <div class="team-image">
                                <img src="product-hotspot/images/product-img6.jpg" alt="image" />
                            </div>
                            <div class="team-text">
                                <h5 class="main-font">Nike Syracuse</h5>
                                <a onclick="morphic_window('morphic-window6');" class="btn btn-medium btn-rounded btn-trans text-capitalize mt-3 mb-5 mb-md-0">View Detail</a>
                            </div>
                        </div> */}
                    </div>
                </div>
                <a class='circle' id="team-circle-left"><i class="lni lni-chevron-left"></i></a>
                <a class='circle' id="team-circle-right"><i class="lni lni-chevron-right"></i></a>
            </div>
        </section>
    )
}

export default About