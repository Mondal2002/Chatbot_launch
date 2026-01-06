import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import WOW from "wowjs";
import '../styles/home1.css';
import Model from "../components/model";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import '../styles/animations.css';
import { Collapse } from "bootstrap";
import ChatBot from 'react-chatbotify';
import settings from "../chatbot_style/settings.json";
import styles from "../chatbot_style/styles.json";
import '../chatbot_style/styles.css';




const Home = () => {

useEffect(() => {
  const wow = new WOW.WOW({
    live: false, // important for React
  });

  wow.init();
  wow.sync(); // forces DOM rescan
}, []);



const[modelvalue,setModelvalue]=useState(false);
const[showAllIndustries,setShowAllIndustries]=useState(false);

const closeNavbar = () => {
  const navbar = document.getElementById("mainNavbar");
  if (navbar && navbar.classList.contains("show")) {
    const bsCollapse = Collapse.getInstance(navbar) 
      || new Collapse(navbar, { toggle: false });

    bsCollapse.hide();
  }
};

useEffect(()=>{
    const timeout = setTimeout(() => {
      setModelvalue(true);
    }, 1500); 


    return () => clearTimeout(timeout);
  }, []);


useEffect(() => {
  const navbar = document.getElementById("mainNavbar");
  const toggler = document.querySelector(".navbar-toggler");

  if (!navbar) return;

  const bsCollapse = new Collapse(navbar, { toggle: false });

  const handleOutsideClick = (e) => {
    if (
      navbar.classList.contains("show") &&
      !navbar.contains(e.target) &&
      !toggler.contains(e.target)
    ) {
      bsCollapse.hide();
    }
  };

  const handleNavLinkClick = () => {
    if (navbar.classList.contains("show")) {
      bsCollapse.hide();
    }
  };

  document.addEventListener("mousedown", handleOutsideClick);

  document.querySelectorAll(".navbar-nav .nav-link")
    .forEach(link => {
      link.addEventListener("click", handleNavLinkClick);
    });

  return () => {
    document.removeEventListener("mousedown", handleOutsideClick);

    document.querySelectorAll(".navbar-nav .nav-link")
      .forEach(link => {
        link.removeEventListener("click", handleNavLinkClick);
      });
  };
}, []);
const [count, setCount] = useState(0)

  const flow = {
    "start": {
      "message": "Hello world!"
    }
  }


  return (
    <div>
      {modelvalue && <Model onClose={() => setModelvalue(false)} />}

      <style>
        {`
        
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&amp;display=swap');

/* =========================
   GLOBAL LAYOUT
========================= */
.main-box {
  position: relative;
  overflow: hidden;
}

.pricing-title {
  margin-bottom: 40px;
  margin-top: 40px;
  line-height: 1.4;
}
.bottom-gap{
margin-bottom: 15px;}

.top-space {
  margin-top: 10px;
}
.top-space-more{
 margin-top:50px;
}
.top-space-img{
margin-top:120px;
}

.bottom-space {
  margin-bottom: 40px;
}

.text-blue {
  color: #2777fc;
}

.black-background {
  background-color: #000;
}

/* =========================
   BUTTONS
========================= */
.primary_btn,
.secondary_btn {
  font-size: 16px;
  min-width: 178px;
  padding: 18px 26px;
  font-weight: 700;
  border-radius: 10px;
  display: inline-block;
  transition: all 0.4s ease;
}

.primary_btn {
  background-color: #2777fc;
  color: #fff;
}

.primary_btn:hover {
  background-color: #080808;
  color: #2777fc;
}

.secondary_btn {
  background-color: #fff;
  color: #2777fc;
}

.secondary_btn:hover {
  background-color: #080808;
  color: #fff;
}

/* =========================
   BANNER
========================= */
.banner-con {
  background-image: url(/assets/images/banner-bg-img.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 600px;
  display: flex;
  align-items: center;
}.banner-img-con {
  text-align: center;
}.banner-con p {
    font-size: 20px;
    color: var(--e-global-color-secondary);
    font-weight: 500;
    margin-bottom: 39px;
}.banner-con .down_button {
    left: 0;
    right: 0;
    bottom: 50px;
    position: absolute;
    margin: 0 auto;
}

.banner-con2 .down_button .banner-dropdownimage {
    transition: ease-in-out 0.6s;
}

.custom-img {
  width: 100%;
  max-width: 600px;
}
.custom-img2{
height:100%;
width:100%;
}



h1 {
    font-size: 72px;
    line-height: 80px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 22px;
}
h2 {
    font-size: 56px;
    line-height: 68px;
    font-weight: 600;
    color: #000000;
}
h3 {
    font-size: 36px;
    line-height: 40px;
    font-weight: 500;
    color: #000000;
}

h4 {
    font-size: 26px;
    line-height: 30px;
    font-weight: 600;
    color: #000000;
}
.footer-con h4 {
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;
    color: #ffffff;
}

h5 {
    font-size: 22px;
    line-height: 24px;
    font-weight: 600;
    color: #000000;
}

h6 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    color: #000000;
}
p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #5f5f5f;
    word-break: break-word;
}

/* =========================
   ANIMATIONS
========================= */
.animated-robot {
  animation: float 2s ease-in-out infinite;
  transition: transform 0.4s ease;
}

.animated-robot:hover {
  transform: translateY(-4px);
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
}
.amazing-features-con .feature-box p {
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    padding-bottom: 45px;
}
    .amazing-features-con .feature-box h4 {
    margin-bottom: 15px;
}

/* =========================
   FEATURES
========================= */
.amazing-features-con .feature-box {
  background-color: #f2f7ff;
  border-radius: 20px;
  padding: 40px 30px;
  transition: all 0.4s ease;
}

.amazing-features-con .feature-box:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}
  
.amazing-features-con .feature-box figure {

    text-align: center;
}

.amazing-features-con .feature-box img {
    transition: ease-in-out 0.3s;
}

.amazing-features-con .feature-box:hover a {
    background-color: var(--e-global-color-accent);
}

.amazing-features-con .feature-box:hover a img {
    filter: invert(100%);
}

.amazing-features-con img.feature-icon1 {
    top: 53%;
    left: 41%;
}

.amazing-features-con img.feature-icon2 {
    bottom: 37px;
    left: 23px;
    z-index: 3;
}

.amazing-features-con img.feature-icon3 {
    bottom: 132px;
    left: 66px;
    z-index: 3;
}

.amazing-features-con img.feature-icon4 {
    bottom: 141px;
    right: 78px;
    z-index: 3;
}

.amazing-features-con img.feature-icon5 {
    bottom: 40px;
    right: 16px;
    z-index: 3;
}

.amazing-features-con .blue-elipse {
    right: 22px;
    bottom: 138px;
    z-index: 1;
}

.amazing-features-con .feature-img3 {
    z-index: 2;
    position: relative;
}

.amazing-features-con .feature-icon6 {
    bottom: 57px;
    left: 16px;
    z-index: 3;
    box-shadow: 0px 9px 16px rgb(0 0 0 / 5%);
}.amazing-features-con h1{
    line-height: 50px;
}

.feature-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
  .feature-card .image-wrapper {
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}


  

.bit-to-right {
  margin-left: 20px;
}

/* =========================
   HOW IT WORKS
========================= */
.how-it-works-con {
  background-image: url(/assets/images/work-banner-bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}.how-it-works-con h1{
    font-size: 40px;
    line-height: 50px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 22px;


}


.step-number {
  width: 48px;
  height: 48px;
  background: #fff;
  color: #2777fc;
  font-weight: 700;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.font-lg {
  font-size: 1.1rem;
}
.font-big{
  font-size: 2 rem;
}
.font-lg-bold {
  font-weight: 600;
}

/* =========================
   WHY CHOOSE US
========================= */
.why-choose-us-con .choose-outer-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 25px;
    margin-bottom: 54px;
}

.choose-box {
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 2px 0px 50px rgb(0 0 0 / 3%);
    border-bottom: 2px solid #2777fc;
    padding: 34px 38px 41px 30px;
}

.choose-box img {
    margin-bottom: 24px;
    transition: ease-in-out 0.6s;
}

.choose-box:hover img {
    transform: translateY(-3px);
}

.choose-box h6 {
    margin-bottom: 11px;
}

.choose-box p {
    font-weight: 500;
    line-height: 22px;
    font-size: 16px;
}

/* =========================
   CTA
========================= */
.call-to-action-con .cta-inner-con {
  background-image: url(/assets/images/call-to-action-bg.jpg);
  background-size: cover;
  border-radius: 50px;
  padding:60px 20px;
  
}
.cta-inner-con h2 {
    margin-bottom: 20px;
}

.cta-inner-con p {
    font-size: 22px;
    color: #0f0f0f;
    font-weight: 500;
    margin-bottom: 30px;
}

.cta-inner-con .primary_btn {
    margin-right: 12px;
}


/* =========================
   FOOTER
========================= */
.footer-con {
  margin-top: 120px;
}

.footer-con .middle_portion .logo-content .footer-logo {
    margin-bottom: 24px;
}

.footer-con .middle_portion .logo-content .footer-logo img {
    width: 138px;
}

.copyright-style {
  font-size: 12px;
  padding: 20px 0;
  color: #bebebe;
  border-top: 1px solid rgba(255,255,255,0.1);
}

/* =========================
   RESPONSIVE BREAKPOINTS
========================= */

/* Tablets */
@media (max-width: 992px) {
  .banner-con {
    min-height: auto;
    padding: 10px ;
    text-align: center;
  }

  .bit-to-right {
    margin-left: 0;
  }

  .choose-outer-con {
    grid-template-columns: repeat(2, 1fr);
  }

  .custom-img {
    max-width: 450px;
    margin-top: 40px;
  }
  h1{
  line-height:50px;
  }
  h2 {
    line-height:50px;
}
    top-space{
    margin-top:40px
    }

    .robot1 {
        display: none;
    }

    .robot2 {
        display: none;
    }

     
}

/* Mobile */
@media (max-width: 576px) {
  h1 {
    font-size: 2rem !important;
      display: flex;
    align-items: center;      /* vertical center */
    justify-content: center;
  }
  h2 {
    font-size: 30px;
    line-height: 50px;
    font-weight: 600;
    color: #000000;
}

  .primary_btn,
  .secondary_btn {
    width: 100%;
    margin-bottom: 50px;
  }

  .choose-outer-con {
    grid-template-columns: 1fr;
  }

  .custom-img {
    max-width: 100%;
  }

  .step-number {
    width: 40px;
    height: 40px;
  }
  .robot1 {
        display: none;
    }

    .robot2 {
        display: none;
    }

.header-con .navbar-light .navbar-nav .nav-link {
    font-size: 16px;
    color: #000000;
    font-weight: 500;
    padding: 10px 0 !important;
    position: relative;
}

.header-con .navbar-light .navbar-nav .nav-link:hover {
    color: #2777fc;
    /* text-decoration: underline; */
}

.header-con .navbar-expand-lg .navbar-nav {
    gap: 58px;
    justify-content: center;
    align-items: center;
}

.header-con {
    z-index: 5;
    padding: 19px 0;
    border-top: 2px solid #2777fc;
}

.header-con .navbar {
    padding: 0;
}

.header-con .navbar-brand figure img {
    width: 145px;
}


.header-con .navbar-light .navbar-nav .nav-link:hover::before {
    width: 100%;
}

.header-con .navbar-light .navbar-nav .nav-link::before {
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    content: '';
    position: absolute;
    background: #2777fc;
    transition: ease-in-out 0.6s;
}

.header-con .navbar-light .navbar-nav .nav-link.active {
    color: #2777fc;
}

.header-con .navbar-light .navbar-nav .dropdown .nav-link:hover::after {
    width: 0;
}

.header-con .navbar-light .navbar-nav .dropdown .nav-link::after {
    width: unset;
    position: absolute;
    background: none;
    top: 19px;
    font-size: 15px;
}

.header-con .navbar-light .navbar-nav .dropdown-menu {
    padding: 10px;
    margin: 0;
    background-color:#ffffff;
    border: 0;
    z-index: 2;
    width: 230px;
    margin-top: 10px;
    box-shadow: 0px 0px 100px rgb(0 0 0 / 15%);
    border-radius: 10px;
}

.header-con .navbar-light .navbar-nav .dropdown-menu a:last-child {
    border-bottom: none;
}

.header-con .navbar-light .navbar-nav .dropdown-menu .dropdown-item {
    padding: 7px 12px;
    border-bottom: 1px solid #ffffff;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #000000;
    border-radius: 6px;
}

.header-con .navbar-light .navbar-nav .dropdown-menu .dropdown-item:active,
.header-con .navbar-light .navbar-nav .dropdown-menu .dropdown-item:active {
    background-color: #2777fc;
    color: #ffffff;
}

.header-con .navbar-light .navbar-nav .dropdown-menu .dropdown-item.active {
    background-color: #2777fc;
    color: #ffffff;
}

.header-con .navbar-light .navbar-nav .dropdown-menu .dropdown-item:hover {
    background-color: #2777fc;
    color: #ffffff
}

.header-con .navbar-light .navbar-brand {
    margin: 0;
    padding: 0;
}

  #back-to-top-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;

    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #2777fc;
    border: none;
    border-radius: 14px;

    cursor: pointer;
    z-index: 9999;

    animation: spineer 2s infinite;
}
    .bit-to-right {
  margin-left: 20px;
}

}

@media (min-width: 577px) and (max-width: 991px) {
.navbar-collapse {
    -ms-flex-preferred-size: 90%;
    flex-basis: 90%;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-align: center;
    align-items: center;
}
.navbar-collapse.collapse,
.navbar-collapse.collapsing {
    width: 90%;
    max-width: 420px;           /* prevents it from getting too wide */
    position: fixed;
    top: 58px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    z-index: 999;
    background-color: #ffffff;
    box-shadow: 0px 0px 100px rgb(0 0 0 / 15%);
    padding: 10px;
    align-items: center;
}

  h1 {
    font-size: 2.4rem !important;
  }

  h2 {
    font-size: 1.9rem;
  }

  .primary_btn,
  .secondary_btn {
    width: auto;
    min-width: 180px;
    margin-bottom: 50px;
  }

  .choose-outer-con {
    grid-template-columns: repeat(2, 1fr);
  }

  .custom-img {
    max-width: 85%;
    margin: 0 auto;
  }

  .step-number {
    width: 48px;
    height: 48px;
    font-size: 16px;
  }
  #back-to-top-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;

    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #2777fc;
    border: none;
    border-radius: 14px;

    cursor: pointer;
    z-index: 9999;

    animation: spineer 2s infinite;
}
.bit-to-right {
  margin-left: 20px;
}
}

  .custom-link{
  color: black;
  text-decoration: none;
  }
  .custom-link:hover{
  color: #2777fc;
  }

.image-wrapper {
  display: flex;
  justify-content: center; /* horizontal */
  align-items: center;     /* vertical */
}
body {
    font-family: "Urbanist", sans-serif;
}
.content-font-bold{
font-family: "Urbanist", sans-serif;
font-weight: 600; 
}

.fixed-box {
  height: 240px;
  overflow-y: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
}
.fixed-section::-webkit-scrollbar {
  display: none;               /* Chrome, Safari */
}
.fixed-section {
  scroll-snap-type: y mandatory;
}

.fixed-section > * {
  scroll-snap-align: start;
}
  
.center-all {
  display: flex;
  align-items: center;      /* vertical center */
  justify-content: center;  /* horizontal center */
}
  .work-swiper {
  height: 180px;   /* fixed */
  overflow: hidden;
}.work-swiper .swiper-slide {
  height:auto !important;
}.robot1 {
    width: 180px;
    left: -40px;
  }
.robot2 {
  width: 250px;
  right: -60px;
}
  


/* Back to top button */

@-webkit-keyframes spineer {
    from {
        box-shadow: 0 0 0 0 rgb(39 39 252 / 40%)
    }

    to {
        box-shadow: 0 0 0 35px rgba(39, 39, 252, .01)
    }
}

@keyframes spineer {
    from {
        /* box-shadow: 0 0 0 0 rgb(20 8 45 / 40%) */
        box-shadow: 0 0 0 0 rgb(39 119 252 / 40%)
    }

    to {
        box-shadow: 0 0 0 35px rgba(39, 39, 252, .01)
    }

    
}


.back-to-top-btn {
    position: fixed;
    bottom: 60px;
    right: 60px;

    width: 80px;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #2777fc;
    border: none;
    border-radius: 14px;

    cursor: pointer;
    z-index: 9999;

    animation: spineer 2s infinite;
}

/* ICON STYLING */
#back-to-top-btn i {
    font-size: 26px;
    color: #ffffff;
    line-height: 1;
}

/* Hover effect like modern UI */
.back-to-top-btn:hover {
    transform: translateY(-6px);
    transition: transform 0.3s ease;
}



`
}

      </style>
      <div>    <title> Home | ChatNex </title>
      </div>
      <div>
            {/* <!-- Back to top button --> */}
    <a id="back-to-top-btn" aria-label="Back to top" href='#home' class="back-to-top-btn">
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 15L12 9L6 15"
      stroke="#ffffff"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
  </svg>
  </a>
    {/* <!-- HEADER SECTION --> */}
    <header class="w-100 float-left header-con position-relative main-box">
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src='assets/images/Todung.png' alt="Chat Nex logo" height="40" />
          <span className="fw-bold fs-4"></span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-center gap-5">

            {/* <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li> */}

            <li className="nav-item">
              <a href="#Features" class="custom-link" onClick={closeNavbar}>Features</a>
            </li>

            <li className="nav-item">
              <a href="#Services" class="custom-link" onClick={closeNavbar}>How it Works</a>
            </li>
            <li className="nav-item">
              <a href="#where-to-use" class="custom-link" onClick={closeNavbar}>Where to use</a>
            </li>
            <li>
              <a href="#why choose us" class="custom-link" onClick={closeNavbar}>Why choose us</a>
            </li>

            <li className="nav-item">
              <a onClick={()=>setModelvalue(true)} class="text-decoration-none primary_btn d-inline-block">Contact Us</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
      </div>
    </header>
    {/* <!--  --> */}
    {/* <!-- BANNER SECTION --> */}
    <section class="float-left w-100 banner-con position-relative main-box " id='home'>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-7">
                    <div class="banner-content-con">
                        <ul class="list-unstyled p-0 ">
                            {/* <li class="position-relative d-inline-block me-4  "><i class="fa-solid fa-circle-check "></i>Free
                                14-day
                                trial</li> */}
                            {/* <li class="position-relative d-inline-block  "><i class="fa-solid fa-circle-check"></i>No credit card required</li> */}
                            {/* This is chatbot part */}
                            {/* <li><ChatBot       settings={settings}
      styles={styles} class='.chatbot_hight' flow={flow}/></li> */}
                        </ul>
                        <h1>Transform Business Experience with Our Intelligent AI Frontdesk</h1>
                        <p >An Intelligent AI Frontdesk That Answers Calls,<br /> Books Appointments, and Engages Customers Automatically</p>
                        <a class="text-decoration-none primary_btn d-inline-block " onClick={()=>setModelvalue(true)}>Contact Us</a>
                        {/* <a href="contact.html" class="text-decoration-none secondary_btn d-inline-block">Live Demo</a> */}
                        {/* <!-- banner content con --> */}
                    </div>
                    {/* <!-- col --> */}
                </div>
                <div className="col-lg-5 col-md-5 center-all" >
                    <div class="banner-img-con position-relative">
                        <figure><img src="assets/images/AI_frontdesk2-removebg-preview.png" alt="robot" class="img-fluid animated-robot custom-img2 "/></figure>
                      {/* <div class="coment-box1 d-flex align-items-center popup-bubble popup-delay-1">
                            <img src="assets/images/coment-box-icon1.png" alt="icon" class="img-fluid"/>
                            <p class="typing mb-0" id="text1">Hey how we can help you?</p>
                            {/* <!-- coment box1 --> */}
                        {/* </div> */} 
                        {/* <div class="coment-box2 d-flex align-items-center popup-bubble popup-delay-2">
                            <img src="assets/images/coment-box-icon2.png" alt="icon" class="img-fluid"/>
                            <p class="typing mb-0" id="text2"> Can you please help me to creating the task?</p>
                            {/* <!-- coment box1 --> */}
                        {/* </div> */} 
                        {/* <!-- banner img con --> */}
                    </div>
                    {/* <!-- col --> */}
                </div>

            </div>
            <div class="down_button  d-inline-block  image-wrapper">
                <a href="#Features" class="scroll text-decoration-none image-wrapper">
                    <figure class="banner-dropdownimage mb-0 d-inline-block image-wrapper ">
                        <img src="assets/images/banner-dropdownimage.png" class="img-fluid center-all " alt="image"/>
                    </figure>
                </a>
            </div>
        </div>
    </section>
{/* class='pricing-title text-black' */}
    {/* <!-- CLIENT'S LOGO SECTION --> */}
    {/* <!-- AMAZING FEATURES SECTION --> */}
    <section class="float-left w-100 amazing-features-con position-relative padding-top padding-bottom main-box" id="Features">
        <div class="container wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
            <div class="heading-title-con text-center">
                <h5 class='text' className="content-font  text-blue top-space-more bottom-space">Amazing Features</h5>
                <h1 class="wow fadeInRights" data-wow-duration="2s" data-wow-delay="0.4s" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)"}} >AI That Answers, Assists
& Automates <br /> Your Calls</h1>
                {/* <!-- heading title con --> */}
            </div>
            <div>
            <div class="row all_row wow fadeIn center-all" data-wow-duration="2s" data-wow-delay="0.4s">
                <div class="col-lg-4 col-md-6  all_column wow fadeInLeft bottom-space " data-wow-duration="2s" data-wow-delay="0.5s" >
                    <div class="feature-box position-relative all_boxes feature-card">
                        <h3 class="bit-to-right">AI Call Handling</h3>
                        <p class="mb-0 bit-to-right ">Attends customer calls with natural human-like conversation and instant responses.</p>
                      <div class=' '>
                        {/* <img src="assets/images/feature-img1-icon1.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon1  wow fadeInUp " data-wow-duration="2s"
                            data-wow-delay="0.6s"/> */}

                        <figure><img src="assets/images/AI_Call_Handling-removebg-preview.png" alt="feature image"
                                class="img-fluid  wow fadeInDown image-wrapper" data-wow-duration="2s" data-wow-delay="0.7s"/>
                        </figure>
                        </div>
                        {/* <a href="services.html"><img src="assets/images/up-right-arrow.png" alt="arrow"
                                class="img-fluid"/></a> */}
                        {/* <!-- feature box --> */}
                    </div>
                    {/* <!-- col --> */}
                </div>
                <div class="col-lg-4 col-md-6 all_column wow fadeInUp bottom-space " data-wow-duration="2s" data-wow-delay="0.5s" >
                    <div class="feature-box position-relative all_boxes bg-green feature-card ">
                        <h3 class=' bit-to-right' >Effortless Scheduling</h3>
                        <p class="mb-0 bit-to-right  ">Automatically calls customers for reminders, confirmations, and important updates.</p>
                      <div class="  ">
                        {/* <img src="assets/images/feature-img2-icon1.png" alt="feature image"
                            class="img-fluid  position-absolute feature-icon2  wow fadeInLeft" data-wow-duration="2s"
                            data-wow-delay="0.8s"/>
                        <img src="assets/images/feature-img2-icon2.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon3  wow fadeInRight" data-wow-duration="2s"
                            data-wow-delay="0.9s"/>
                        <img src="assets/images/feature-img2-icon3.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon4  wow fadeInLeft" data-wow-duration="2s"
                            data-wow-delay="1.0s"/>
                        <img src="assets/images/feature-img2-icon4.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon5 wow fadeInRight" data-wow-duration="2s"
                            data-wow-delay="1.1s"/> */}
                        <figure><img src="assets/images/Effortless_Scheduling-removebg-preview.png" alt="feature image"
                                class="img-fluid wow fadeInDown image-wrapper " data-wow-duration="2s" data-wow-delay="1.2s"/>
                        </figure>
                        </div>
                        {/* <a href="services.html"><img src="assets/images/up-right-arrow.png" alt="arrow"
                                class="img-fluid"/></a> */}
                        {/* <!-- feature box --> */}
                    </div>
                    {/* <!-- col --> */}
                </div>
                <div class="col-lg-4 col-md-6 all_column  wow fadeInRight bottom-space" data-wow-duration="2s" data-wow-delay="0.5s">
                    <div class="feature-box position-relative all_boxes feature-card">
                        <h3 class=' bit-to-right'>Secure & Fully Customizable</h3>
                        <p class="mb-0 bit-to-right   ">Tailored for each industry with complete data privacy and enterprise compliance.</p>
                      <div class=''>
                        {/* <img src="assets/images/feature-img3-icon1.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon6 wow fadeInUp " data-wow-duration="2s"
                            data-wow-delay="0.6s"/> */}
                        {/* <img src="assets/images/elipse-blue.png" alt="feature image"
                            class="img-fluid position-absolute blue-elipse wow fadeInDown" data-wow-duration="2s"
                            data-wow-delay="0.7s"/> */}
                        <figure><img src="assets/images/Secure___Fully_Customizable-removebg-preview.png" alt="feature image"
                                class="img-fluid feature-img3 wow fadeIn image-wrapper" data-wow-duration="2s" data-wow-delay="0.8s"/>
                        </figure>
                        </div>
                        {/* <a href="services.html"><img src="assets/images/up-right-arrow.png" alt="arrow"
                                class="img-fluid"/></a> */}
                        {/* <!-- feature box --> */}
                    </div>
                    {/* <!-- col --> */}
                    </div>
                </div>
                {/* <!-- row --> */}
            </div>
            {/* <!-- container --> */}
        </div>
    </section>

    {/* <span className="d-block bg-danger text-white">TEST</span> */}

    {/* <!-- HOW IT WORKS SECTION --> */}
    <section class="float-left w-100 position-relative main-box how-it-works-con padding-top pri " id="Services" >
        {/* <figure><img src="assets/images/vector3.png" alt="vector"
                class="img-fluid position-absolute vector3 animated-plane pricing-title"/></figure> */}
        <div class="container wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
            <div class="row all_row">
                <div class="col-lg-7 col-md-12 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.4s">
                    <div class="work-img-con position-relative">
                  <figure><img src="assets/images/How_it_works.jpeg" alt="image" class="img-fluid top-space-img"></img>
                  </figure>
                      {/* When Done Change the youtube link here */}
                        {/* <div class="video-container top-space-img">
                            <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/JIe8GGITRaE"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        </div> */}
                        {/* <figure><img src="assets/images/robot.png" alt="robot"
                                class="img-fluid position-absolute robot-img animated-robot"/>
                        </figure> */}
                    </div>
                    {/* <!-- col --> */}
                </div>
                <div class="col-lg-5 col-md-12 wow fadeInRight center-all" data-wow-duration="2s" data-wow-delay="0.4s">
                    <div class="work-content-con">
                        <div class="heading-title-con">
                            <h4 class="special-text color-#0000FF d-block wow fadeInLeft  text-blue  top-space-more" data-wow-duration="2s"
                                data-wow-delay="0.5s">How it Works</h4>
                            <h1 class="wow fadeInRight top-space  " data-wow-duration="2s" data-wow-delay="0.6s"  
                            style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)" }}>How Our Advanced
                                <br/>
                                AI Frontdesk Works</h1>
                            {/* <!-- heading title con --> */}
                        </div>
                        <div class='list-unstyled p-0 fixed-box fixed-section'>
                        <Swiper
                            direction="vertical"
                            slidesPerView={1}
                            mousewheel={{
                              forceToAxis: true,
                              releaseOnEdges: true,
                              sensitivity: 1.0,
                            }}
                            freeMode={{
                              enabled: true,
                              momentum: true,
                              momentumRatio: 1.2,
                            }}
                            resistance={true}
                            resistanceRatio={0.85}
                            speed={800}
                            watchOverflow={true}
                            modules={[Mousewheel]}
                            className="work-swiper"
                            >
                          <SwiperSlide><div class='position-relative d-flex align-items-center '>
                            <span className="step-number">01</span>
                                <div className="work-content-inner-con">
                                    <h5 class='bit-to-right'>Customer Speaks</h5>
                                    <p class="mb-0 font-lg bit-to-right">Customers call and interact naturally with the AI assistant.</p>
                                    {/* <!-- work content inner con --> */}
                                </div>
                            </div></SwiperSlide>
                          <SwiperSlide><div class='position-relative d-flex align-items-center '>
                            
                            <span className="step-number">02</span>
                                <div class="work-content-inner-con pricing-title">
                                    <h5 class='bit-to-right'>AI Understands Intent
</h5>
                                    <p class="mb-0 font-lg bit-to-right">The system listens, interprets, and responds intelligently in real time.</p>
                                    {/* <!-- work content inner con --> */}
                                    </div>
                            </div></SwiperSlide>
                          <SwiperSlide><div class='position-relative d-flex align-items-center '>
                             <span className="step-number ">03</span>
                                <div class="work-content-inner-con ">
                                    <h5 class='bit-to-right'>Actions Executed</h5>
                                    <p class="mb-0 font-lg bit-to-right" >It answers questions, handles requests, automates tasks, and records information..</p>
                                    {/* <!-- work content inner con --> */}
                                    </div>
                            </div></SwiperSlide>

                            <SwiperSlide><div class='position-relative d-flex align-items-center '>
                            
                            <span className="step-number">04</span>
                                <div class="work-content-inner-con pricing-title">
                                    <h5 class='bit-to-right'>Team Gets Instant Updates
</h5>
                                    <p class="mb-0 font-lg bit-to-right">Your staff receives real-time updates — no manual effort required.</p>
                                    {/* <!-- work content inner con --> */}
                                    </div>
                            </div></SwiperSlide>
                          
                        </Swiper>
                        </div>
                        <div class='center-all'>
                          <a onClick={()=>setModelvalue(true)} class="text-decoration-none primary_btn d-inline-block pricing-title ">Contact Us</a>
                        </div>
                        {/* <!-- work content con --> */}
                    </div>
                    {/* <!-- col --> */}
                </div>
                {/* <!--  --> */}
            </div>
            {/* <!-- container --> */}
        </div>
        {/* <!-- how it works con --> */}
    </section>
{/* where to use */}
<section id="where-to-use" className="py-5 position-relative" >
  <div className="container">
    <div className="text-center mb-5 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
      <h4 className="text-blue mb-3 fw-bold">Where It Can Be Used</h4>
      <h2 className="mb-3" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 600 }}>
        Versatile AI Solutions<br/>Across Industries
      </h2>
      <p className="text-muted" style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
        Transform your customer experience with intelligent automation tailored for your industry
      </p>
    </div>

    {/* Healthcare Industry */}
    <div className="mb-5">
      <div className="d-flex align-items-center mb-4 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
        <div className="rounded-3 p-3" style={{ background: 'linear-gradient(135deg, #2777fc 0%, #1a5fd9 100%)' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12H18L15 21L9 3L6 12H2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="mb-0 fw-bold bit-to-right">Healthcare & Hospitals</h3>
      </div>
      <div className="row g-4 mb-5 center-all ">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
          <div className="h-100 p-4 rounded-4 bg-white shadow-sm hover-lift feature-box-2" style={{ border: '2px solid #e8f0ff', background: 'linear-gradient(135deg, #f2f7ff)', transition: 'all 0.4s ease', borderLeft: '4px solid #2777fc' }}>
            <h5 className="mb-3 fw-semibold text-blue">Smart Triage & Direction</h5>
            <p className="text-muted mb-3" style={{ lineHeight: '1.7', fontSize: '15px' }}>
              Patients simply state their problem and get directed to the correct floor, ward, or counter instantly.
            </p>
            <div className="d-flex align-items-start mb-2">
              <span className="text-blue me-2">•</span>
              <small className="text-muted">Real-time doctor availability tracking</small>
            </div>
            <div className="d-flex align-items-start">
              <span className="text-blue me-2">•</span>
              <small className="text-muted">Department routing based on symptoms</small>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
          <div className="h-100 p-4 rounded-4  shadow-sm  feature-box-2" style={{ border: '2px solid #e8f0ff', background: 'linear-gradient(135deg, #f2f7ff)', transition: 'all 0.4s ease', borderLeft: '4px solid #2777fc' }}>
            <h5 className="mb-3 fw-semibold text-blue">Touchless Check-In Kiosk</h5>
            <p className="text-muted mb-3" style={{ lineHeight: '1.7', fontSize: '15px' }}>
              Verify appointments, print tokens, and assign waiting rooms without long queues.
            </p>
            <div className="d-flex align-items-start mb-2">
              <span className="text-blue me-2">•</span>
              <small className="text-muted">QR code scanning for instant check-in</small>
            </div>
            <div className="d-flex align-items-start">
              <span className="text-blue me-2">•</span>
              <small className="text-muted">Automated token generation & queue updates</small>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
          <div className="h-100 p-4 rounded-4 bg-white shadow-sm hover-lift feature-box-2" style={{ border: '2px solid #e8f0ff', background: 'linear-gradient(135deg, #f2f7ff)', transition: 'all 0.4s ease', borderLeft: '4px solid #2777fc' }}>
            <h5 className="mb-3 fw-semibold text-blue">24/7 FAQ Handler</h5>
            <p className="text-muted mb-3" style={{ lineHeight: '1.7', fontSize: '15px' }}>
              Answer repetitive questions about visiting hours, cafeteria, pharmacy locations, and billing.
            </p>
            <div className="d-flex align-items-start mb-2">
              <span className="text-blue me-2">•</span>
              <small className="text-muted">Multilingual support (Hindi, Bengali, English)</small>
            </div>
            <div className="d-flex align-items-start">
              <span className="text-blue me-2">•</span>
              <small className="text-muted">Reduces receptionist workload by 70%</small>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.7s">
          <div className="h-100 p-4 rounded-4 bg-white shadow-sm hover-lift feature-box-2" style={{ border: '2px solid #e8f0ff', background: 'linear-gradient(135deg, #f2f7ff)', transition: 'all 0.4s ease', borderLeft: '4px solid #2777fc' }}>
            <h5 className="mb-3 fw-semibold text-blue">Patient Education & Comfort</h5>
            <p className="text-muted mb-3" style={{ lineHeight: '1.7', fontSize: '15px' }}>
              Explain medical procedures like MRI, CT scans in simple terms to reduce patient anxiety.
            </p>
            <div className="d-flex align-items-start mb-2">
              <span className="text-blue me-2">•</span>
              <small className="text-muted">Queue management with wait time estimates</small>
            </div>
            <div className="d-flex align-items-start">
              <span className="text-blue me-2">•</span>
              <small className="text-muted">Pre-procedure preparation instructions</small>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
          <div className="h-100 p-4 rounded-4 bg-white shadow-sm hover-lift feature-box-2" style={{ border: '2px solid #e8f0ff', background: 'linear-gradient(135deg, #f2f7ff)', transition: 'all 0.4s ease', borderLeft: '4px solid #2777fc' }}>
            <h5 className="mb-3 fw-semibold text-blue">Emergency & Safety Assist</h5>
            <p className="text-muted mb-3" style={{ lineHeight: '1.7', fontSize: '15px' }}>
              Detect emergency keywords and trigger immediate alerts to medical staff.
            </p>
            <div className="d-flex align-items-start mb-2">
              <span className="text-blue me-2">•</span>
              <small className="text-muted">Visual alarm system with flashing lights</small>
            </div>
            <div className="d-flex align-items-start">
              <span className="text-blue me-2">•</span>
              <small className="text-muted">Instant ping to nearest nurse station</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* And More Button */}
    <div className="text-center my-5 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
      <button 
        onClick={() => setShowAllIndustries(!showAllIndustries)}
        className="btn btn-lg px-5 py-3 fw-bold position-relative overflow-hidden"
        style={{ 
          background: showAllIndustries ? 'linear-gradient(135deg, #1a5fd9 0%, #2777fc 100%)' : 'linear-gradient(135deg, #2777fc 0%, #1a5fd9 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          transition: 'all 0.4s ease',
          boxShadow: '0 4px 15px rgba(39, 119, 252, 0.3)'
        }}
      >
        <span className="d-flex align-items-center gap-2">
          {showAllIndustries ? 'Show Less' : 'Explore More Industries'}
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ 
              transform: showAllIndustries ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.4s ease'
            }}
          >
            <path d="M19 9L12 16L5 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </div>

    {/* Other Industries - Collapsible */}
    {showAllIndustries && (
    <div className="wow fadeIn" data-wow-duration="1s">
    <div className="row g-4">
      {/* Corporate Offices */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
        <div className="h-100 p-4 rounded-4 position-relative overflow-hidden feature-box-2 bg-for-cards" >
          <div className="position-absolute" style={{ top: '-20px', right: '-20px', opacity: '0.1' }}>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="#333">
              {/* <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"/> */}+
            </svg>
          </div>
          <h4 className="mb-3 fw-bold">Corporate Offices & Reception</h4>
          <p className="mb-3" style={{ fontSize: '15px', opacity: '0.95' }}>
Greets visitors, verifies appointments, provides basic directions, and informs staff of arrivals.          </p>
          <div className="d-flex align-items-start mb-2">
            <span className="me-2" style={{ opacity: '0.8' }}>✓</span>
            <small style={{ opacity: '0.9' }}>Touchless visitor check-in</small>
          </div>
          <div className="d-flex align-items-start">
            <span className="me-2" style={{ opacity: '0.8' }}>✓</span>
            <small style={{ opacity: '0.9' }}>Multilingual assistance for guests (Hindi,English,Bengali).</small>
          </div>
        </div>
      </div>

      {/* Banking & Finance */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
        <div className="h-100 p-4 rounded-4 position-relative overflow-hidden feature-box-2 bg-for-cards">
          <div className="position-absolute" style={{ top: '-20px', right: '-20px', opacity: '0.1' }}>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="#333">
              {/* <rect x="2" y="5" width="20" height="14" rx="2"/>
              <path d="M2 10H22"/> */}
            </svg>
          </div>
          <h4 className="mb-3 fw-bold">Banks & Financial Services</h4>
          <p className="mb-3" style={{ fontSize: '15px', opacity: '0.95' }}>
            Provides quick answers about banking services and directs customers to the appropriate queue or counter.
          </p>
          <div className="d-flex align-items-start mb-2">
            <span className="me-2" style={{ opacity: '0.8' }}>✓</span>
            <small style={{ opacity: '0.9' }}>Automated token generation</small>
          </div>
          <div className="d-flex align-items-start">
            <span className="me-2" style={{ opacity: '0.8' }}>✓</span>
            <small style={{ opacity: '0.9' }}>Real-time service availability info</small>
          </div>
        </div>
      </div>

      {/* Retail & Customer Service */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
        <div className="h-100 p-4 rounded-4 position-relative overflow-hidden feature-box-2 bg-for-cards" >
          <div className="position-absolute" style={{ top: '-20px', right: '-20px', opacity: '0.1' }}>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="#333">
              {/* <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/> */}
              {/* <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"/> */}
            </svg>
          </div>
          <h4 className="mb-3 fw-bold">Retail & Customer Care</h4>
          <p className="mb-3" style={{ fontSize: '15px', opacity: '0.95' }}>
            Helps customers find information quickly such as product details, service desk location, or billing help.
          </p>
          <div className="d-flex align-items-start mb-2">
            <span className="me-2" style={{ opacity: '0.8' }}>✓</span>
            <small style={{ opacity: '0.9' }}>Return & exchange policy FAQs</small>
          </div>
          <div className="d-flex align-items-start">
            <span className="me-2" style={{ opacity: '0.8' }}>✓</span>
            <small style={{ opacity: '0.9' }}>Store service desk routing</small>
          </div>
        </div>
      </div>

      {/* Hotels & Hospitality */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.7s">
        <div className="h-100 p-4 rounded-4 position-relative overflow-hidden feature-box-2 bg-for-cards" >
          <div className="position-absolute" style={{ top: '-20px', right: '-20px', opacity: '0.1' }}>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="#333">
              {/* <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"/>
              <path d="M9 22V12H15V22"/> */}
            </svg>
          </div>
          <h4 className="mb-3 fw-bold">Hotels & Hospitality</h4>
          <p className="mb-3" style={{ fontSize: '15px', opacity: '0.95' }}>
            Acts as a friendly digital concierge to help with check-in prompts, amenity queries, and general information.
          </p>
          <div className="d-flex align-items-start mb-2">
            <span className="me-2" style={{ opacity: '0.8' }}>✓</span>
            <small style={{ opacity: '0.9', fontcolor:'#2e2d2d9a' }}>Multilingual tourist assistance (Hindi,English,Bengali).</small>
          </div>
          <div className="d-flex align-items-start">
            <span className="me-2" style={{ opacity: '0.8' }}>✓</span>
            <small style={{ opacity: '0.9' }}>Restaurant & service desk info</small>
          </div>
        </div>
      </div>

      {/* Government Offices */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s">
        <div className="h-100 p-4 rounded-4 position-relative overflow-hidden feature-box-2 bg-for-cards" >
          <div className="position-absolute" style={{ top: '-20px', right: '-20px', opacity: '0.1' }}>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="#333">
              {/* <path d="M3 21H21M3 7L12 3L21 7M4 21V7M20 21V7M8 9V13M12 9V13M16 9V13"/> */}
            </svg>
          </div>
          <h4 className="mb-3 fw-bold">Government Offices</h4>
          <p className="mb-3" style={{ fontSize: '15px', opacity: '0.95' }}>
            Guides visitors to the correct department, explains document requirements, and supports basic inquiry handling.
          </p>
          <div className="d-flex align-items-start mb-2">
            <span className="me-2" style={{ opacity: '0.8' }}>✓</span>
            <small style={{ opacity: '0.9' }}>Multilingual citizen support</small>
          </div>
          <div className="d-flex align-items-start">
            <span className="me-2" style={{ opacity: '0.8' }}>✓</span>
            <small style={{ opacity: '0.9' }}>Ticketing and appointment confirmation</small>
          </div>
        </div>
      </div>

      {/* Educational Institutions */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.9s">
        <div className="h-100 p-4 rounded-4 position-relative overflow-hidden feature-box-2 bg-for-cards" >
          <div className="position-absolute" style={{ top: '-20px', right: '-20px', opacity: '0.1' }}>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="#333">
              {/* <path d="M12 14L12 14.01M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"/> */}
              {/* <path d="M12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10"/> */}
            </svg>
          </div>
          <h4 className="mb-3 fw-bold">Educational Institutions</h4>
          <p className="mb-3" style={{ fontSize: '15px', opacity: '0.85' }}>
            Assists students and visitors with campus inquiries, administrative office directions, and event information.
          </p>
          <div className="d-flex align-items-start mb-2">
            <span className="me-2" style={{ opacity: '0.7' }}>✓</span>
            <small style={{ opacity: '0.8' }}>Admission and course FAQs</small>
          </div>
          <div className="d-flex align-items-start">
            <span className="me-2" style={{ opacity: '0.7' }}>✓</span>
            <small style={{ opacity: '0.8' }}>Attendance hours and department guidance</small>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action */}
    
    </div>
    )}
  </div>
</section>

    {/* <!-- WHY CHOOSE US SECTION --> */}
    <section class="float-left w-100 position-relative why-choose-us-con padding-top padding-bottom main-box" id='why choose us'>
        <div class="container wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
            <div class="heading-title-con text-center">
                <h4 class="special-text color-blue d-block wow fadeInLeft text-blue top-space " data-wow-duration="2s"
                    data-wow-delay="0.2s">Why Choose Us</h4>
                <h2 class="wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s" >Unique Selling Points &
                    Advantages <br/>
                    of Our Service</h2>
                {/* <!-- heading title con --> */}
            </div>
            <div class="row justify-content-center wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.5s">
              <div className="col-lg-4 col-md-6 mb-4" >
                <div class="choose-box">
                    <figure><img src="assets/images/choose-icon1.png" alt="icon" class="img-fluid"/></figure>
                    <h6>Tailored Solutions</h6>
                    <p class="mb-0">We offer customized
                        services designed to meet
                        the specific needs...</p>
                    {/* <!-- choose box --> */}
                </div>
                </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div class="choose-box">
                    <figure><img src="assets/images/choose-icon2.png" alt="icon" class="img-fluid"/></figure>
                    <h6>Customer Support</h6>
                    <p class="mb-0">Our dedicated support
                        team is available 24/7,
                        providing assistance...</p>
                    {/* <!-- choose box --> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div class="choose-box">
                    <figure><img src="assets/images/choose-icon3.png" alt="icon" class="img-fluid"/></figure>
                    <h6>Affordable Pricing</h6>
                    <p class="mb-0">Competitive rates with
                        transparent pricing—no
                        hidden fees...
                    </p>
                    {/* <!-- choose box --> */}
                </div>
              </div>
              <div  className="col-lg-4 col-md-6 mb-4"> 
                <div class="choose-box">
                    <figure><img src="assets/images/choose-icon4.png" alt="icon" class="img-fluid"/></figure>
                    <h6>Scalable Solutions</h6>
                    <p class="mb-0">Our services grow with
                        your business, allowing
                        you to scale up...</p>
                    {/* <!-- choose box --> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4" >
                <div class="choose-box">
                    <figure><img src="assets/images/choose-icon5.png" alt="icon" class="img-fluid"/></figure>
                    <h6>Expert Team</h6>
                    <p class="mb-0">Our experienced
                        professionals bring deep
                        industry knowledge...</p>
                    {/* <!-- choose box --> */}
                </div>
              </div>
                {/* <!-- choose outer con --> */}
            </div>
            {/* <div class="float-left w-100 m-auto text-center wow fadeInUp bottom-gap bottom-space" data-wow-duration="2s" data-wow-delay="0.4s">
                <a onClick={()=>setModelvalue(true)} class="text-decoration-none primary_btn d-inline-block">Contact Us</a>
            </div> */}
            {/* <!-- container --> */}
        </div>
        {/* <!-- why choose us  --> */}
    </section>




    {/* <!-- PRICING PLAN SECTION --> */}
    
    {/* <!-- FAQ'S SECTION --> */}
  
    {/* <!-- CALL TO ACTION --> */}
    
    <div class="float-left w-100 position-relative call-to-action-con main-box padding-bottom top-space-more">
        <div class="container wow fadeInUp top-space " data-wow-duration="2s" data-wow-delay="0.2s">
            <div class="cta-inner-con padding-top100 padding-bottom100 position-relative top ">
                <figure><img src="assets/images/AI_frontdesk_right_preview_rev_1.png" alt="vector"
                        class="img-fluid position-absolute robot1 animated-robot"/></figure>
                <figure><img src="assets/images/AI_frontdesk_left_preview_rev_1.png" alt="vector"
                        class="img-fluid position-absolute robot2 animated-robot "/></figure>
                <div class=" text-center mb-0  ">
                  <span>  </span>
                    <h4 class="special-text text-blue d-block wow fadeInLeft  " data-wow-duration="2s"
                        data-wow-delay="0.2s">Experience Boost</h4>
                    <h2 class="wow fadeInRight " data-wow-duration="2s" data-wow-delay="0.4s"  >Ready to Supercharge
                        <br/>
                        Your Customer Experience?</h2>
                    <p class="wow fadeInDown pricing-title" data-wow-duration="2s" data-wow-delay="0.5s">Start using our AI Frontdesk
                        today to automate support, boost engagement, and save time.</p>
                    <a onClick={()=>setModelvalue(true)} class="text-decoration-none primary_btn d-inline-block wow fadeInLeft "
                        data-wow-duration="2s" data-wow-delay="0.6s">Contact Us</a>
                    {/* <a href="contact.html" class="text-decoration-none secondary_btn d-inline-block wow fadeInRight bit-to-right pricing-title"
                        data-wow-duration="2s" data-wow-delay="0.7s">Live Demo</a> */}
                    {/* <!-- heading title con --> */}
                </div>
                {/* <!-- cta inner con --> */}
            </div>
            {/* <!-- container --> */}
        </div>
    </div>

    {/* <!-- FOOTER SECTION --> */}
    <footer class="footer-con main-box margin-right:40px black-background text-center">
    <section class="footer-con position-relative float-left w-100 main-box  black-background">
        <div class="container">
            <div class="middle_portion ">
                <div class="row ">
                    <div class="col-lg-4 col-md-12 bottom-space center-all">
                        <div class="logo-content ">
                            <a href="home">
                                <figure class="footer-logo ">
                                    <img src="assets/images/Todung.png" alt="image" class="img-fluid"/>
                                </figure>
                            </a>
                            <p class="text-size-16 text-white center-all ">We create intelligent, scalable AI solutions that help
                                businesses work smarter, move faster, and achieve more..</p>
                            <ul class="list-unstyled mb-0 social-icons">
                                <li><a href="https://www.facebook.com/" class="text-decoration-none"><i
                                            class="fa-brands fa-facebook-f social-networks"></i></a></li>
                                <li><a href="https://www.instagram.com/" class="text-decoration-none"><i
                                            class="fa-brands fa-instagram social-networks"></i></a></li>
                                <li><a href="https://www.linkedin.com/" class="text-decoration-none"><i
                                            class="fa-brands fa-linkedin-in social-networks"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 bottom-space">
                        <div class="links">
                            <h4 class="heading ">Navigation</h4>
                            <ul class="list-unstyled mb-0 bottom-gap text-white">
                                <li class="bottom-gap"><i class="fa-solid fa-arrow-right "></i><a href="#Features"
                                        class="text-decoration-none text-white">Features</a></li>
                                <li class="bottom-gap"><i class="fa-solid fa-arrow-right "></i><a href="#Services"
                                        class="text-decoration-none text-white">How it works</a></li>
<li class="bottom-gap"><i class="fa-solid fa-arrow-right "></i><a href="#where-to-use"
                                        class="text-decoration-none text-white">Where to use</a></li>
                                <li class="bottom-gap"><i class="fa-solid fa-arrow-right "></i><a href="#why choose us"
                                        class="text-decoration-none text-white">Why choose us</a></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 bottom-space">
                        <div class="icon">
                            <h4 class="heading ">Contact Info</h4>
                            <ul class="list-unstyled mb-0 bottom-gap">
                                <li class="text-white bottom-gap">
                                    <i class="fa-solid fa-phone-volume"></i>
                                    <a href="tel:++91 89612 75478" class="text-decoration-none text-white">+91 89612 75478</a>
                                </li>
                                <li class="text-white bottom-gap">
                                    <i class="fa-solid fa-envelope"></i>
                                    <a href="mailto:sen@ebluesoft.in" class="text-decoration-none text-white">sen@ebluesoft.in</a>
                                </li>
                                <li class="text-white bottom-gap">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <a href="https://maps.app.goo.gl/sbVF4p9HWEj6n7jJ6"
                                        class="text-decoration-none address mb-0 text-white">Shrachi EK Tower, EKT/5/Office-B, Newtown, Kolkata, West Bengal 700161
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-style ">
                <p class="mb-0">Copyright © 2025 Aivio. All Rights Reserved.</p>
            </div>
        </div>
    </section>
    </footer>
    {/* <!-- PRE LOADER -->
    <div class="loader-mask">
        <div class="loader">
            <div></div>
            <div></div>
        </div>
    </div> */}
    {/* <!-- Latest compiled JavaScript --> */}
    {/* <script src="assets/js/jquery-3.7.1.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/owl.carousel.js"></script>
    <script src="assets/js/carousel.js"></script>
    <script src="assets/js/wow.js"></script>
    <script src="assets/js/back-to-top-button.js"></script>
    <script src="assets/js/preloader.js"></script>
    <script src="assets/js/counter.js"></script>  */}
      </div>
    </div>
  );
};

export default Home;


