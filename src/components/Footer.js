import './css/footer.css';
import Logo from './images/logo.svg';
import prc1 from './images/prc1_0.webp';
import prc2 from './images/prc2_1.webp';
import { Link as RouterLink} from 'react-router-dom';

function Footer(){
    return(
        <>
            <footer>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                            <div className='footer-content'>
                                    <div data-aos-delay="100" data-aos="fade-in" className='logo'>
                                        <img src={Logo} alt="logo"  />
                                    </div>

                                    <p data-aos-delay="200" data-aos="fade-in">
                                    Orem Ipsum is simply dumm text the printing and types indstr sum has been the industry
                                    </p>

                                    <div className='socials'>
                                        <a data-aos-delay="300" data-aos="fade-in" href="#" aria-label='facebook-link'>
                                            <i class="lab la-facebook-f"></i>
                                        </a>

                                        <a data-aos-delay="400" data-aos="fade-in" href="#" aria-label='twitter-link'>
                                            <i class="lab la-twitter"></i>
                                        </a>

                                        <a data-aos-delay="500" data-aos="fade-in" href="#" aria-label='pinterest-link'>
                                            <i class="lab la-pinterest-p"></i>
                                        </a>

                                        <a data-aos-delay="600" data-aos="fade-in" href="#" aria-label='linkedin-link'>
                                            <i class="lab la-linkedin-in"></i>
                                        </a>
                                    </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                            <div className='footer-content'>
                                <h1 data-aos-delay="700" data-aos="fade-in"> RECENT BLOGS </h1>

                                <div data-aos-delay="800" data-aos="fade-in" className='blog'>
                                    <a href="#">
                                        <img src={prc1} alt="blog image" />
                                        <div>
                                            <h4>19 Jun, 2019</h4> 
                                            <h5> which the syste built and actually </h5>
                                        </div>
                                    </a>
                                </div>
                                
                                <div data-aos-delay="900" data-aos="fade-in" className='blog'>
                                    <a href="#">
                                        <img src={prc2} alt="blog image" />
                                        <div>
                                            <h4>19 Jun, 2019</h4> 
                                            <h5> which the syste built and actually </h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>



                        <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                            <div className='footer-content'>
                                <h1 data-aos-delay="1000" data-aos="fade-in"> USEFUL LINKS </h1>

                                <ul>
                                <li data-aos-delay="1100" data-aos="fade-in">
                                    <RouterLink aria-label="Home Page Link" to="#">
                                    <i class="las la-caret-right"></i>
                                        HomePage
                                    </RouterLink>
                                </li>

                                <li data-aos-delay="1200" data-aos="fade-in" >
                                    <RouterLink  aria-label="Check Pickup points Link" to="#">
                                    <i class="las la-caret-right"></i>
                                        PickUp Points
                                    </RouterLink>
                                </li>

                                <li data-aos-delay="1300" data-aos="fade-in">
                                    <RouterLink  aria-label="About Pargo page link" to="#">
                                    <i class="las la-caret-right"></i>
                                        About Pargo
                                    </RouterLink>
                                </li>

                                <li data-aos-delay="1400" data-aos="fade-in">
                                    <RouterLink  aria-label="SUSTAINABILITY page Link" to="#">
                                    <i class="las la-caret-right"></i>
                                    SUSTAINABILITY
                                    </RouterLink>
                                </li>

                                <li data-aos-delay="1500" data-aos="fade-in">
                                    <RouterLink aria-label="careers page Link" to="#">
                                    <i class="las la-caret-right"></i>
                                    Careers
                                    </RouterLink>
                                </li>

                                <li data-aos-delay="1600" data-aos="fade-in">
                                    <RouterLink aria-label="blogs page Link" to="#">
                                    <i class="las la-caret-right"></i>
                                    Blogs
                                    </RouterLink>
                                </li>
                            </ul>
                            </div>
                        </div>
                        




                        <div className='col-lg-3 col-md-3 col-sm-12 col-12'>
                            <div className='footer-content'>
                                <h1 data-aos-delay="1700" data-aos="fade-in"> SUPPORT & DOWNLOADS</h1>

                                <p data-aos-delay="1800" data-aos="fade-in">
                                Lorem ipsum dolor sit amet, consy eetur adipisc de elit. Quisque act raqum nunc no dolor
                                </p>
                            </div>
                        </div>


                        


                    </div>
                </div>

                <div className='copy-right'>
                    <div className='container-fluid'>
                        <div className='copy-content'>
                            <h3 > Copyright© <span>PARGO EGYPT LLC </span>| All Rights Reserved </h3>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;