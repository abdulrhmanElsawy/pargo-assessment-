import './css/Landing.css';
import TrackWay from './images/track.png';

import Dots from './images/dots.png';
import GreenEnv from './images/greenenv.webp';

function Landing(){
    return(
        <>
            <section className='landing'>
                <div className='overlay'></div>
                <img src={Dots} alt="dots image" className='dots'/>
                <img src={GreenEnv} alt="GreenEnv image" className='green-env'/>

                <div className='text'>
                    <div data-aos-delay="1200" data-aos="fade-in" className='navigator'>
                        <span className='circle'></span>
                        <a href="#">
                            Home
                        </a>
                        <span className='line'></span>
                        <a href="#">
                            Tracking
                        </a>
                        <span className='circle'></span>

                    </div>

                    <h1 data-aos-delay="1500" data-aos="fade-in">
                        Reduce Carbon Emissions
                    </h1>
                    <h2 data-aos-delay="1600" data-aos="fade-in"> Use Pargo Click & Collect </h2>
                </div>

                <div  className='track-way'>
                    <img src={TrackWay} alt="track-way" />
                </div>
            </section>
        </>
    )
}

export default Landing;