import React from 'react'
import Init from '../../assets/images/banner-product.png';
const Home = () => {
    return (
        <section class="section slide1 p-0" id="home-banner">
            <div class="slider-area" id="slider-area">
                <div class="bg-overlay bg-green opacity-8"></div>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12 col-md-6">
                            <h1 class="main-font font-weight-bold text-grey content1 wow" data-wow-delay=".4s">Landia</h1>
                            <p class="alt-font text-grey my-3 content1 wow" data-wow-delay=".6s">Conservacion y preservacion ambiental. </p>
                            <a href="#all-products" class="btn btn-medium btn-rounded btn-trans text-capitalize mt-3 mb-5 mb-md-0 content1 wow" data-wow-delay=".8s">View More</a>
                        </div>
                        <div class="col-12 col-md-6 section1right wow" data-wow-delay=".8s">
                            <div class="banner-image" data-depth="0.07">
                                <img src="https://images.prismic.io/moreapp/f3698502-bdd4-4a74-ad15-a25e9b33b656_Landing+page+image2.png" alt="Banner-Product" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="circle-one circle1fade wow" data-wow-delay=".2s">
                    <span data-tootik="Comfortable" data-tootik-conf="top invert square shadow">
                        <a href="javascript:void(0);">
                            <span class="animated-circle position-relative"></span>
                        </a>
                    </span>
                </div>
                <div class="circle-two circle2fade wow" data-wow-delay=".4s">
                    <span data-tootik="Flexible Sole" data-tootik-conf="bottom invert square shadow">
                        <a href="javascript:void(0);">
                            <span class="animated-circle position-relative"></span>
                        </a>
                    </span>
                </div>
                <div class="circle-three circle3fade wow" data-wow-delay=".6s">
                    <span data-tootik="Soft Leather" data-tootik-conf="top invert square shadow">
                        <a href="javascript:void(0);">
                            <span class="animated-circle position-relative"></span>
                        </a>
                    </span>
                </div>
                <div class="circle-four circle4fade wow" data-wow-delay=".8s">
                    <span data-tootik="Light Weight" data-tootik-conf="bottom invert square shadow">
                        <a href="javascript:void(0);">
                            <span class="animated-circle position-relative"></span>
                        </a>
                    </span>
                </div>
                <div class="circle-five circle5fade wow" data-wow-delay=".95s">
                    <span data-tootik="Arch Support" data-tootik-conf="top invert square shadow">
                        <a href="javascript:void(0);">
                            <span class="animated-circle position-relative"></span>
                        </a>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Home