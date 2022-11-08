<template>
    <section id="sliderType" class="slider__wrap nexon scroll">
        <h2 class="blind">슬라이드 영역</h2>
        <div class="slider__inner">
            <swiper 
            :navigation="true" 
            :pagination="{
                clickable: true,
            }"
            :centeredSlides="true"
            :modules="modules"
            :spaceBetween="30"
            :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
            }"
            class="mySwiper">
                <swiper-slide>
                    <div class="desc">
                        <span>ANIMALS</span>
                        <h3>CUTE ANIMALS</h3>
                        <p>
                            당신의 반려 동물에게 새로운 친구를 만나게 하고 싶나요?!<br />
                            여기 애니멀 유치원으로 어서 오세요!
                        </p>
                        <div class="btn">
                            <a href="/">자세히 보기</a>
                            <a href="/" class="black">사이트 보기</a>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="desc">
                        <span>ANIMALS</span>
                        <h3>CUTE ANIMALS</h3>
                        <p>
                            당신의 반려 동물에게 새로운 친구를 만나게 하고 싶나요?!<br />
                            여기 애니멀 유치원으로 어서 오세요!
                        </p>
                        <div class="btn">
                            <a href="/">자세히 보기</a>
                            <a href="/" class="black">사이트 보기</a>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="desc">
                        <span>ANIMALS</span>
                        <h3>CUTE ANIMALS</h3>
                        <p>
                            당신의 반려 동물에게 새로운 친구를 만나게 하고 싶나요?!<br />
                            여기 애니멀 유치원으로 어서 오세요!
                        </p>
                        <div class="btn">
                            <a href="/">자세히 보기</a>
                            <a href="/" class="black">사이트 보기</a>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation,Pagination, Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay],
    };
  },
};
</script>

<style>
/* slider Type */
.slider__inner {
    margin-top: 70px;
}
.slider {
    position: relative;
}
.slider__img {
    /* height: 500px;  밑에 세부 영역 잡기 전에 대충 잡아놓은 영역이므로 지우기 */
    background: url(../../assets/img/slider_type01_04.jpg) no-repeat center / cover;
}
.slider__img .desc {
    width: 1160px;
    margin: 0 auto;
    padding: 100px 20px;
    box-sizing: border-box;
}
.slider__img .desc span {
    font-size: 16px;
    background-color: #fff;
    padding: 1px 14px 0 14px;
    border-radius: 30px;
    text-transform: uppercase;
    margin-bottom: 10px;
    display: inline-block;
}
.slider__img .desc h3 {
    font-size: 110px;
    font-weight: 300;
    line-height: 1;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 16px;
    margin-left: -8px;
}
.slider__img .desc p {
    font-size: 20px;
    font-weight: 300;
    color: #fff;
    line-height: 1.35;
    margin-bottom: 130px;
}
.slider__img .desc .btn a {
    font-size: 16px;
    background-color: #fff;
    padding: 11px 50px;
    display: inline-block;
}
.slider__img .desc .btn a.black {
    background: #000;
    color: #fff;
}
.slider__arrow a {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 56px;
    background: url(../../assets/img/slider_icon.svg);
}
.slider__arrow a.left {
    left: 20px;
}
.slider__arrow a.right {
    right: 20px;
    background-position: -50px 0; /* x축으로 -50px이동해야 나온다. */
}
.slider__dot {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 25px;
}
.slider__dot a {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url(../../assets/img/slider_icon.svg);
    background-position: -20px -70px;
}
.slider__dot a.active {
    background-position: 0 -70px;
}
.slider__dot a.play {
    background-position: -40px -70px;
}
.slider__dot a.stop {
    background-position: -60px -70px;
}

/* swiper */
.swiper-slide {
    background: url(../../assets/img/slider_type01_04.jpg) no-repeat center / cover;
}
.swiper-slide .desc {
    width: 1160px;
    margin: 0 auto;
    padding: 100px 20px;
    box-sizing: border-box;
}
.swiper-slide .desc span {
    font-size: 16px;
    height: 20px;
    line-height: 15px;
    background-color: #fff;
    padding: 6px 14px 0 14px;
    border-radius: 30px;
    text-transform:uppercase;
    margin-bottom: 15px;
    display: inline-block;
}
.swiper-slide .desc h3 {
    font-size: 110px;
    font-weight: 500;
    line-height: 1;
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 30px;
    padding-top: 10px;
    margin-left: -8px;
}
.swiper-slide .desc p {
    font-size: 20px;
    font-weight: 300;
    color: #fff;
    line-height: 1.6;
    margin-bottom: 120px;
}
.swiper-slide .desc .btn a {
    font-size: 16px;
    background-color: #fff;
    padding: 11px 50px;
    display: inline-block;
}
.swiper-slide .desc .btn a.black {
    background: #000;
    color: #fff;
}
.swiper-button-next,
.swiper-button-prev {
    width: 30px !important;
    height: 56px !important;
    background-image: url(../../assets/img/slider_icon02.svg);
}
.swiper-button-next {
    background-position: -50px 0;
}
.swiper-button-next::after, 
.swiper-button-prev::after {
    opacity: 0;
}
.swiper-pagination-bullet {
    width: 16px !important;
    height: 16px !important;
    background-image: url(../../assets/img/slider_icon02.svg) !important;
    background-position: -20px -70px !important;
    background-color: transparent !important;
    opacity: 1 !important;
}
.swiper-pagination-bullet-active {
    background-position: 0 -70px !important;
}

.swiper-button {
    position: absolute;
    left: 50%;
    margin-left: 40px;
    bottom: 25px;
    z-index: 1000;
    display: flex;
}

.swiper-button-stop {
    background-image: url(../../assets/img/slider_icon02.svg) !important;
    background-position: -60px -70px;
    width: 16px;
    height: 16px;
}

.swiper-button-play {
    background-image: url(../../assets/img/slider_icon02.svg) !important;
    background-position: -40px -70px;
    width: 16px;
    height: 16px;
}

/* 반응형 */
@media (max-width: 960px){
    .swiper-slide .desc {
        width: 100%;
        text-align: center;
    }
    .swiper-slide .desc h3 {
        font-size: 70px;
    }
}
@media (max-width: 600px){
    .swiper-slide .desc {
        padding: 80px 0;
    }
    .swiper-slide .desc h3 {
        font-size: 40px;
    }
    .swiper-slide .desc p {
        font-size: 16px;
        margin-bottom: 50px;
    }
    .swiper-slide .desc .btn a {
        padding: 10px 25px;
    }
}
@media (max-width: 480px){}
</style>