
import { FaFacebook ,FaTwitter,FaInstagram ,FaLinkedin  } from "react-icons/fa";

function Futtor() {
    return (
        <>

            {/* ---------------------------Futtor start------------------ */}



            <div class=" ">


                <footer
                    class="text-center  text-lg-start text-white bg-black"        >

                  
                    <section class=" pt-5">
                        <div class="container text-center text-md-start ">

                            <div class="row ">

                                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto ">

                                    <h6 class="text-uppercase fw-bold"><img src={require(`./image/logo.png`)}></img></h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"

                                    />
                                    <p>
                                        Here you can use rows and columns to organize your footer
                                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                    </p>
                                </div>

                                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 class="text-uppercase fw-bold">Products</h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"

                                    />
                                    <p>
                                        <a href="#!" class="text-white">MDBootstrap</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-white">MDWordPress</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-white">BrandFlow</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-white">Bootstrap Angular</a>
                                    </p>
                                </div>

                                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 class="text-uppercase fw-bold">Useful links</h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"

                                    />
                                    <p>
                                        <a href="#!" class="text-white">Your Account</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-white">Become an Affiliate</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-white">Shipping Rates</a>
                                    </p>
                                    <p>
                                        <a href="#!" class="text-white">Help</a>
                                    </p>
                                </div>

                                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 class="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"

                                    />
                                    <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                    <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
                                    <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                </div>

                            </div>
                        </div>
                    </section>

                    <hr></hr>

                    <section
                        class="d-flex container justify-content-between p-4"                    >

                        <div class="me-5">
                            <span>Get connected with us on social networks:</span>
                        </div>



                        <div className=" f-icon ">
                            <a href="" class="text-white me-4">
                                <i class="fab fa-facebook-f"></i>
                                <FaFacebook></FaFacebook>

                            </a>
                            <a href="" class="text-white me-4">
                                <i class="fab fa-twitter"></i>
                                <FaTwitter ></FaTwitter>
                            </a>
                            <a href="" class="text-white me-4">
                                <i class="fab fa-google"></i>
                                <FaInstagram ></FaInstagram>
                            </a>
                            <a href="" class="text-white me-4">
                                <i class="fab fa-instagram"></i>
                                <FaLinkedin ></FaLinkedin>
                            </a>
                       
                        </div>

                    </section>


                   

                 

                </footer>


            </div>


      
            {/* ---------------------------Futtor end------------------ */ }


        </>
    )
}
export default Futtor