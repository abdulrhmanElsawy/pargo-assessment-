import './css/benefits.css';

import prc1 from './images/prc1_0.webp';
import prc2 from './images/prc2_1.webp';
import prc3 from './images/prc3_2.webp';
import prc4 from './images/prc4_3.webp';


import ico1 from './images/PargoDeliversParcels.svg';
import ico2 from './images/InYourOwnTime.svg';
import ico3 from './images/CustomerNotified.svg';
import ico4 from './images/SAASorPargoIntegration.svg';

function Benefits(){
    return(
        <>
            <section className="benefits">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div data-aos-delay="100" data-aos="fade-in" className="benefit">
                                <img className='main-img' src={prc1} alt="pargo parcel image" />
                                <img src={ico1} className='icon' alt="icon"/> 

                                <h1> Your parcel’s journey </h1>
                                <p>
                                The Pargo tracking functionality is detailed, real-time and simple. It has been developed for convenience to enable you to watch every part of your parcel’s journey. From the second your order leaves the warehouse or the drop-off point to the minute it arrives in your neighbourhood, every move of your parcel is recorded.
                                </p>

                                <a ria-label='call pargo egypt' href="tel:+201003265919" > Let Us Help </a>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div data-aos-delay="200" data-aos="fade-in" className="benefit">
                                <img className='main-img' src={prc2} alt="pargo parcel image" />
                                <img src={ico2} className='icon' alt="icon"/> 

                                <h1> 24/7 Tracking</h1>
                                <p>
                                    Pargo’s tracking functionality can be accessed in real time, 24/7 on mobile or desktop. Your waybill number is your tracking number. It can be found in your email and sms notifications, which you will start receiving after the order has been finalised.
                                </p>

                                <a ria-label='call pargo egypt' href="tel:+201003265919" > Let Us Help </a>
                            </div>
                        </div>



                        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div data-aos-delay="300" data-aos="fade-in" className="benefit">
                                <img className='main-img' src={prc3} alt="pargo parcel image" />
                                <img src={ico3} className='icon' alt="icon"/> 

                                <h1> Notifications </h1>
                                <p>
                                    Throughout your parcels journey you will get several reminders via email and mobile.
                                </p>

                                <a ria-label='call pargo egypt' href="tel:+201003265919" > Let Us Help </a>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div data-aos-delay="400" data-aos="fade-in" className="benefit">
                                <img className='main-img' src={prc4} alt="pargo parcel image" />
                                <img src={ico4} className='icon' alt="icon"/> 

                                <h1> Pargo functionality </h1>
                                <p>
                                    Pargo’s tracking functionality was developed with the customer in mind. It is reliable and intuitive. Should there be any questions with regards to tracking your parcel our customer service team is there to assist.
                                </p>

                                <a ria-label='call pargo egypt' href="tel:+201003265919" > Let Us Help </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Benefits;