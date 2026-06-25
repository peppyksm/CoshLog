
import { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Home.css";



function Home() {

    const [btnChecked, setBtnChecked] = useState(false);

    return (
        <div className="homePage">

            
            {/* <div className="header">
                <h3>BestPost</h3>
                <div className="bestPost">좋은글
                </div>
            </div> */}


            <input type="radio" name="ctgSelect" id="fe" defaultChecked />
            <input type="radio" name="ctgSelect" id="be" />


            <div className="btnContainer">
                <label htmlFor="fe"><div className="selectBTN feBtn"><h2>FE</h2></div></label>
                <label htmlFor="be"><div className="selectBTN beBtn"><h2>BE</h2></div></label>
            </div>


            <div className="ctgContainer feCon">
                <p></p>
                <Swiper
                    modules={[EffectCoverflow]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    speed={500}
                    spaceBetween={30}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 180,
                        modifier: 1.5,
                        slideShadows: false,
                    }}
                    className="ctgSwiper"
                >
                    <SwiperSlide className="Box html">
                        <p>HTML</p>
                    </SwiperSlide>

                    <SwiperSlide className="Box css">
                        <p>CSS</p>
                    </SwiperSlide>

                    <SwiperSlide className="Box react">
                        <p>React</p>
                    </SwiperSlide>

                    <SwiperSlide className="Box javascript">
                        <p>JavaScript</p>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="ctgContainer beCon">
                <Swiper
                    modules={[EffectCoverflow]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    speed={500}
                    spaceBetween={30}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 180,
                        modifier: 1.5,
                        slideShadows: false,
                    }}
                    className="ctgSwiper"
                >
                    <SwiperSlide className="Box java">
                        <p>JAVA</p>
                    </SwiperSlide>

                    <SwiperSlide className="Box node">
                        <p>Node.js</p>
                    </SwiperSlide>

                    <SwiperSlide className="Box python">
                        <p>Python</p>
                    </SwiperSlide>

                    <SwiperSlide className="Box go">
                        <p>Go</p>
                    </SwiperSlide>
                </Swiper>
            </div>
            <br />
            <p style={{color : "gray", marginLeft : "38.8%"}}>클릭한 상태로 좌우로 움직여보세요</p>


            




        </div>



    )
}

export default Home