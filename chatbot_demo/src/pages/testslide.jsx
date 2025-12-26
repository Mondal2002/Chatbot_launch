import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import '../styles/home1.css'
const Testslide = () => {
  return (
<div>

<Swiper
  direction="vertical"
  slidesPerView={1}
  mousewheel={true}
  height={150}
  modules={[Mousewheel]}
>
  <SwiperSlide><div class='position-relative d-flex align-items-center '>
    <span className="step-number">01</span>
        <div className="work-content-inner-con">
            <h5 class='bit-to-right'>Build with Ease</h5>
            <p class="mb-0 font-lg bit-to-right">Build your chatbot using our intuitive drag-and-drop <br/>
            interface — no coding needed.</p>
            {/* <!-- work content inner con --> */}
        </div>
    </div></SwiperSlide>
  <SwiperSlide><div class='position-relative d-flex align-items-center '>
    
    <span className="step-number">02</span>
        <div class="work-content-inner-con pricing-title">
            <h5 class='bit-to-right'>Train with Your Content</h5>
            <p class="mb-0 font-lg bit-to-right">Train your AI using documents, FAQs, or URLs to create <br/>
            accurate, personalized responses.</p>
            {/* <!-- work content inner con --> */}
            </div>
    </div></SwiperSlide>
  <SwiperSlide><div class='position-relative d-flex align-items-center '>
     <span className="step-number ">03</span>
        <div class="work-content-inner-con ">
            <h5 class='bit-to-right'>Deploy Anywhere</h5>
            <p class="mb-0 font-lg bit-to-right" >Launch on your website, mobile app, or messaging <br/>
            platforms in just a few clicks.</p>
            {/* <!-- work content inner con --> */}
            </div>
    </div></SwiperSlide>
</Swiper>

</div>

  )
}

export default Testslide