import './css/Navbar.css';

import { Link as RouterLink} from 'react-router-dom';
import { useEffect,useRef  } from "react";
import $ from 'jquery';
import React, { useState } from "react";

function Navabr(){

    
    
    useEffect(() => {
        $("#open-nav").on("click", function() {
            $(".nav-eles").slideDown(400);
            $("nav").addClass("active");

            $(".nav-eles").css({display: "flex"});
        });

        $("#close-nav").on("click", function() {
            $(".nav-eles").slideUp(400);
            $("nav").removeClass("active");

        });

        if ($(window).width() < 950) {
            $(".nav-eles ul li:not(.langs-ele)").on("click", function() {
                $(".nav-eles").slideUp(400);
                $("nav").removeClass("active");

            });
        }
    const loadingElement = document.getElementById("loading");
    if (loadingElement) {
        loadingElement.remove();
    }
    }, []);
    



    return(
        <>
            <nav>
                <div className='container-fluid'>
                    <div className='nav-content'>
                        
                        <button id="open-nav"> <i className="las la-bars"></i> </button>
                        <div className="nav-eles">
                        <button id="close-nav"> <i className="las la-times"></i> </button>

                            <ul>
                                <li data-aos-delay="500" data-aos="fade-in">
                                    <RouterLink aria-label="Home Page Link" to="#">
                                        HomePage
                                    </RouterLink>
                                </li>

                                <li data-aos-delay="600" data-aos="fade-in">
                                    <RouterLink  aria-label="Check Pickup points Link" to="#">
                                        PickUp Points
                                    </RouterLink>
                                </li>

                                <li data-aos-delay="700" data-aos="fade-in">
                                    <RouterLink  aria-label="About Pargo page link" to="#">
                                        About Pargo
                                    </RouterLink>
                                </li>

                                <li data-aos-delay="800" data-aos="fade-in">
                                    <RouterLink  aria-label="SUSTAINABILITY page Link" to="#">
                                    SUSTAINABILITY
                                    </RouterLink>
                                </li>

                                <li data-aos-delay="900" data-aos="fade-in">
                                    <RouterLink aria-label="careers page Link" to="#">
                                    Careers
                                    </RouterLink>
                                </li>

                                <li data-aos-delay="1000" data-aos="fade-in">
                                    <RouterLink aria-label="blogs page Link" to="#">
                                    Blogs
                                    </RouterLink>
                                </li>


                                <li data-aos-delay="1100" data-aos="fade-in">
                                    <RouterLink className="special" aria-label="tracking page Link" to="#">
                                        <i class="las la-seedling"></i> Save Enviroment
                                    </RouterLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navabr;