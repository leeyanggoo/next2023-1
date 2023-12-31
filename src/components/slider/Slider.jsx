"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const Slider = () => {
  return (
    <section id="sliderSection" className="slider__wrap NanumM">
      <div className="slider__inner">
        <h2 className="blind">배너 슬라이드</h2>
        <div className="slider__img">
          <Swiper
            loop={true}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            <SwiperSlide className="bg-gradient">
              <div className="slider s1 container">
                <div className="text">
                  <h3>
                    너의 장미꽃이 그토록 소중한 것은
                    <br />그 꽃을 위해 네가 공들인 그 시간 때문이야.
                  </h3>
                  <p>
                    우리가 아직도 어린왕자를 찾아가는 이유
                    <br />
                    <em>김덕배</em> 시인과 함께 알아보는 시간
                  </p>
                  <a href="/" className="more button-blue">
                    더 알아보기
                  </a>
                </div>
                <div className="img">
                  <Image
                    width={600}
                    height={600}
                    src="/assets/images/slider/littleprince.png"
                    alt="어린왕자"
                    priority={true}
                  />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-gradient">
              <div className="slider s1 container">
                <div className="text">
                  <h3>
                    너의 장미꽃이 그토록 소중한 것은
                    <br />그 꽃을 위해 네가 공들인 그 시간 때문이야.
                  </h3>
                  <p>
                    우리가 아직도 어린왕자를 찾아가는 이유
                    <br />
                    <em>김덕배</em> 시인과 함께 알아보는 시간
                  </p>
                  <a href="/" className="more button-blue">
                    더 알아보기
                  </a>
                </div>
                <div className="img">
                  <Image
                    width={600}
                    height={600}
                    src="/assets/images/slider/littleprince.png"
                    alt="어린왕자"
                    priority={true}
                  />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-gradient">
              <div className="slider s1 container">
                <div className="text">
                  <h3>
                    너의 장미꽃이 그토록 소중한 것은
                    <br />그 꽃을 위해 네가 공들인 그 시간 때문이야.
                  </h3>
                  <p>
                    우리가 아직도 어린왕자를 찾아가는 이유
                    <br />
                    <em>김덕배</em> 시인과 함께 알아보는 시간
                  </p>
                  <a href="/" className="more button-blue">
                    더 알아보기
                  </a>
                </div>
                <div className="img">
                  <Image
                    width={600}
                    height={600}
                    src="/assets/images/slider/littleprince.png"
                    alt="어린왕자"
                    priority={true}
                  />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <div className="slider__btn">
          <a href="/" className="left">
            <span className="ir">이전 이미지</span>
          </a>
          <a href="/" className="right">
            <span className="ir">다음 이미지</span>
          </a>
        </div>
        <div className="slider__dot">
          <a href="/" className="dot active">
            <span className="ir">1번 이미지</span>
          </a>
          <a href="/" className="dot">
            <span className="ir">2번 이미지</span>
          </a>
          <a href="/" className="dot">
            <span className="ir">3번 이미지</span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Slider;
