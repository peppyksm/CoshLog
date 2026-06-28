
import { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { useNavigate } from "react-router";
import explainPhoto1 from "../image/home.png";
import explainPhoto2 from "../image/forum.png";
import explainPhoto3 from "../image/mypage.png";
import { useEffect } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Home.css";


function Home() {

    const [btnChecked, setBtnChecked] = useState(false);
    let navigate = useNavigate();
    
    useEffect(() => {
        const fadeItems = document.querySelectorAll(".scrollFade");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            {
                threshold: 0.3,
            }
        );

        fadeItems.forEach((item) => {
            observer.observe(item);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="homePage">

            <h1 style={{ textAlign: "center", marginTop: "5%" }}>여기에 뭘 쓸지를 모르겠네</h1>
            <h1 style={{ textAlign: "center" }}>추천좀 받겠습니다</h1>


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
                        <button className="quickMove" onClick={() => { navigate("/forum/fe/html") }} >바로가기</button>
                    </SwiperSlide>

                    <SwiperSlide className="Box css">
                        <p>CSS</p>
                        <button className="quickMove" onClick={() => { navigate("/forum/fe/css") }}>바로가기</button>
                    </SwiperSlide>

                    <SwiperSlide className="Box react">
                        <p>React</p>
                        <button className="quickMove" onClick={() => { navigate("/forum/fe/react") }}>바로가기</button>
                    </SwiperSlide>

                    <SwiperSlide className="Box javascript">
                        <p>JavaScript</p>
                        <button className="quickMove" onClick={() => { navigate("/forum/fe/javascript") }}>바로가기</button>
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
                        <button className="quickMove" onClick={() => { navigate("/forum/be/java") }}>바로가기</button>
                    </SwiperSlide>

                    <SwiperSlide className="Box node">
                        <p>Node.js</p>
                        <button className="quickMove" onClick={() => { navigate("/forum/be/node") }}>바로가기</button>
                    </SwiperSlide>

                    <SwiperSlide className="Box python">
                        <p>Python</p>
                        <button className="quickMove" onClick={() => { navigate("/forum/be/python") }}>바로가기</button>
                    </SwiperSlide>

                    <SwiperSlide className="Box go">
                        <p>Go</p>
                        <button className="quickMove" onClick={() => { navigate("/forum/be/go") }}>바로가기</button>
                    </SwiperSlide>
                </Swiper>
            </div>
            <br />
            <p style={{ color: "gray", marginLeft: "42.9%" }}>클릭한 상태로 좌우로 움직여보세요</p>







            <div className="explainContainer">
                <div className="explainSidebar scrollFade">
                    <img className="explainimg1" src={explainPhoto1} />
                    <div style={{ lineHeight: "40px", marginLeft: "5%" }}>
                        <h1><span className="fontColor">사이드바</span>로</h1>
                        <h1>어디든 <span className="underLine">간편하게 이동</span> </h1>
                    </div>
                </div>
                <div className="explainForum scrollFade">
                    <div style={{ lineHeight: "40px", marginLeft: "5%", textAlign: "end" }}>
                        <h1><span className="fontColor">세분화된 카테고리</span>로</h1>
                        <h1>더욱 <span className="underLine">정밀한 구분</span></h1>
                    </div>
                    <img className="explainimg2" src={explainPhoto2} />
                </div>

                <div className="explainMypage scrollFade" >
                    <img className="explainimg1" src={explainPhoto3} />
                    <div style={{ lineHeight: "40px", marginLeft: "5%" }}>
                        <h1><span className="fontColor">마이페이지</span>로</h1>
                        <h1>프로필카드를 <span className="underLine">커스터마이징</span></h1>
                    </div>
                </div>

                <div className="explainGame scrollFade">
                    <div style={{ lineHeight: "40px", marginLeft: "5%", textAlign: "end" }}>
                        <h1><span className="fontColor">게임</span>으로</h1>
                        <h1>나의 실력을 <span className="underLine">테스트</span> </h1>
                    </div>
                    <img className="explainimg2" src={explainPhoto2} />
                </div>

                <div className="explainRank scrollFade">
                    <img className="explainimg1" src={explainPhoto3} />
                    <div style={{ lineHeight: "40px", marginLeft: "5%" }}>
                        <h1><span className="fontColor">레벨랭킹</span>으로</h1>
                        <h1><span className="underLine">경쟁</span>해서 우위를 점해보세요</h1>
                    </div>
                </div>

                <div className="explainTeam scrollFade">
                    <div style={{ lineHeight: "40px", marginLeft: "5%", textAlign: "end" }}>
                        <h1>팀 구인/구직 페이지와</h1>
                        <h1>팀 간의 <span className="fontColor">Private</span>한 작업실까지</h1>
                    </div>
                    <img className="explainimg2" src={explainPhoto2} />
                </div>



            </div>
        </div>



    )
}

export default Home