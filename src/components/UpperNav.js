import './css/UpperNav.css';
import Logo from './images/logo.svg';

function UpperNav(){
    return(
        <>
            <div className='upper-nav'>
                <div className='container-fluid'>
                    <div className='upper-nav-content'>
                        <div className='logo'>
                            <img data-aos-delay="100" data-aos="fade-in" src={Logo} alt='Pargo logo' />
                        </div>

                        <div data-aos-delay="200" data-aos="fade-in" className='track'>
                            <input type='text 'placeholder='Enter Tracking id ...' />
                            <button>
                                <i class="las la-search"></i>
                            </button>
                        </div>


                        <div className='contact-info'>
                            <div data-aos-delay="300" data-aos="fade-in" className='info'>
                                <i class="las la-headset"></i>
                                <div>
                                    <a aria-label='call pargo egypt' href="tel:+201003265919"> <span> Call : </span> +201003265919</a>
                                    <a aria-label='mail pargo egypt' href="mailto:SUPPORT.EG@PARGO.COM"> SUPPORT.EG@PARGO.COM</a>
                                </div>
                            </div>

                            <div data-aos-delay="400" data-aos="fade-in" className='info'>
                            <i class="las la-map-marker"></i>
                                <div>
                                    <a aria-label='call pargo egypt' href="tel:+201003265919"> PARGO EGYPT LLC</a>
                                    <a aria-label='call pargo egypt' href="tel:+201003265919"> CAIRO EGYPT </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpperNav;