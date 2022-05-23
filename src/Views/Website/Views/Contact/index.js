import React from 'react'

const Contact = () => {
    return (
        <section id="page6" class="section bg-contact bg-dark position-relative" >
            <div class="bg-overlay bg-black opacity-2"></div>
            <div class="bg-overlay bg-black2 opacity-9"></div>
            <div class="container full-screen center-block">
                <div class="contact-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="main-title wow fadeIn" data-wow-delay="300ms">
                                <h5> Unete a la comunidad </h5>
                                <div class="contact-line"></div>
                                <h2> Landia </h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-sm-12 contact-form-center wow fadeInUp" data-wow-delay="400ms">

                            <div class="col-sm-12 p-0" id="result"></div>

                            <div class="company-contact-form">
                                <div class="contact-form-outer contact-form" id="contact-form-data" onsubmit="return false;">
                                    <div class="row" style={{textAlign:"center"}}>
                                        <div class="col-md-6 col-sm-6 md max-width">
                                            <button type="submit" class="btn btn-blue btn-large btn-rounded text-uppercase contact_btn" id="submit_btn"><i class="fa fa-spinner fa-spin mr-2 d-none" aria-hidden="true"></i><b class="font-weight-normal">Telegram</b>
                                            </button>
                                        </div>
                                        <div class="col-md-6 col-sm-6 max-width">
                                            <button type="submit" class="btn btn-blue btn-large btn-rounded text-uppercase contact_btn" id="submit_btn"><i class="fa fa-spinner fa-spin mr-2 d-none" aria-hidden="true"></i><b class="font-weight-normal">Discord</b>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact