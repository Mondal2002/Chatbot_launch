import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import WOW from "wowjs";
import '../styles/home1.css'
import Model from "../components/model";



// import "./assets/images/feature-img1-icon1.png"


// #  --e-global-color-primary: #ffffff;
// #  --e-global-color-secondary: #000000;
// #  --e-global-color-accent: #2777fc;
// #  --e-global-color-text: #5f5f5f;
// #  --e-global-color-text2: #bebebe;
// #  --e-global-color-light-blue: #f2f7ff;
// #  --e-global-color-light-green: #f1fdff;


const Home = () => {
  useEffect(() => {
  new WOW.WOW().init();
}, []);
const[modelvalue,setModelvalue]=useState(false);
  return (
    <div>
      {modelvalue && <Model onClose={() => setModelvalue(false)} />}

      <style>
        {`
        
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

.top-space {
  margin-top: 80px;
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
  background-color: #fff;
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
  min-height: 900px;
  display: flex;
  align-items: center;
}

.custom-img {
  width: 100%;
  max-width: 600px;
}

.banner-img-con {
  text-align: center;
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

.font-lg-bold {
  font-weight: 700;
}

/* =========================
   WHY CHOOSE US
========================= */
.choose-outer-con {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;
}

.choose-box {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
}

/* =========================
   CTA
========================= */
.call-to-action-con .cta-inner-con {
  background-image: url(/assets/images/call-to-action-bg.jpg);
  background-size: cover;
  border-radius: 50px;
  padding: 80px 20px;
}

/* =========================
   FOOTER
========================= */
.footer-con {
  margin-top: 120px;
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
    padding: 80px 0;
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
}

/* Mobile */
@media (max-width: 576px) {
  h1 {
    font-size: 2rem !important;
  }

  .primary_btn,
  .secondary_btn {
    width: 100%;
    margin-bottom: 12px;
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
}


`
}

      </style>
      <div>    <title> Home | ChatNex </title>
      </div>
      <div>
            {/* <!-- Back to top button --> */}
    <a id="button"></a>
    {/* <!-- HEADER SECTION --> */}
    <header class="w-100 float-left header-con position-relative main-box">
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src='assets/images/logo.png' alt="Chat Nex logo" height="40" />
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
          <ul className="navbar-nav ms-auto align-items-center gap-4">

            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>

            <li className="nav-item">
              <a href="#Features">Features</a>
            </li>

            <li className="nav-item">
              <a href="#Services">Services</a>
            </li>

            {/* Blog Dropdown */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Blog
              </span>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/blog">All Blogs</Link></li>
                <li><Link className="dropdown-item" to="/blog/single">Single Blog</Link></li>
              </ul>
            </li>

            {/* Pages Dropdown */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Pages
              </span>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/pricing">Pricing</Link></li>
                <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>
                <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/pricing" className="nav-link">Pricing</Link>
            </li>

            {/* CTA Button */}
            <li className="nav-item">
              <Link to="/contact" className="btn btn-primary px-4 py-2 rounded-pill">
                Try Free Trial
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary rounded-pill px-4" onClick={()=>setModelvalue(true)}>
              Contact Us
            </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
      </div>
    </header>
    {/* <!--  --> */}
    {/* <!-- BANNER SECTION --> */}
    <section class="float-left w-100 banner-con position-relative main-box pricing-title">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-7">
                    <div class="banner-content-con">
                        <ul class="list-unstyled p-0 pricing-title">
                            <li class="position-relative d-inline-block me-4  "><i class="fa-solid fa-circle-check pricing-title"></i>Free
                                14-day
                                trial</li>
                            <li class="position-relative d-inline-block"><i class="fa-solid fa-circle-check"></i>No credit card required</li>
                        </ul>
                        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }} class='pricing-title text-black'>Transform Business Calls with Our  <br/>
                            Intelligent 
                            AI Frontdesk</h1>
                        <h4 class='pricing-title text-black'>An Intelligent AI Frontdesk That Answers Calls,<br /> Books Appointments, and Engages Customers Automatically</h4>
                        <a href="about.html" class="text-decoration-none primary_btn d-inline-block">Get
                            Started</a>
                        <a href="contact.html" class="text-decoration-none secondary_btn d-inline-block">Live Demo</a>
                        {/* <!-- banner content con --> */}
                    </div>
                    {/* <!-- col --> */}
                </div>
                <div className="col-lg-5 col-md-5" >
                    <div class="banner-img-con position-relative">
                        <figure><img src="assets/images/banner-robot.png" alt="robot" class="img-fluid custom-img animated-robot"/></figure>
                        {/* <!-- banner img con --> */}
                    </div>
                    {/* <!-- col --> */}
                </div>
            </div>
            <div class="down_button text-center d-inline-block">
                <a href="#client" class="scroll text-decoration-none">
                    <figure class="banner-dropdownimage mb-0 d-inline-block ">
                        <img src="assets/images/banner-dropdownimage.png" class="img-fluid" alt="image"/>
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
                <h4 class='text' className="padding:20px font-size:100px text-blue ">Amazing Features</h4>
                <h1 class="wow fadeInRight pricing-title" data-wow-duration="2s" data-wow-delay="0.4s" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }} >AI That Understands, Learns
                    <br/>
                    & Engages</h1>
                {/* <!-- heading title con --> */}
            </div>
            <div>
            <div class="row all_row wow fadeIn pricing-title" data-wow-duration="2s" data-wow-delay="0.4s">
                <div class="col-lg-4 col-md-6 all_column wow fadeInLeft pricing-title " data-wow-duration="2s" data-wow-delay="0.5s" >
                    <div class="feature-box position-relative all_boxes">
                        <h3 class="pricing-title  bit-to-right">Conversational AI</h3>
                        <p class="mb-0 bit-to-right bottom-space pricing-title">Respond intelligently with GPT-powered
                            natural language understanding.</p>
                        <img src="assets/images/feature-img1-icon1.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon1  wow fadeInUp bit-to-right" data-wow-duration="2s"
                            data-wow-delay="0.6s"/>

                        <figure><img src="assets/images/feature-img1.png" alt="feature image"
                                class="img-fluid  wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.7s"/>
                        </figure>
                        {/* <a href="services.html"><img src="assets/images/up-right-arrow.png" alt="arrow"
                                class="img-fluid"/></a> */}
                        {/* <!-- feature box --> */}
                    </div>
                    {/* <!-- col --> */}
                </div>
                <div class="col-lg-4 col-md-6 all_column wow fadeInUp pricing-title " data-wow-duration="2s" data-wow-delay="0.5s" >
                    <div class="feature-box position-relative all_boxes bg-green ">
                        <h3 class='pricing-title bit-to-right' >Multi-Platform</h3>
                        <p class="mb-0 bit-to-right bottom-space pricing-title">Integrate with websites, apps, Facebook, <br/>
                            WhatsApp & more.</p>
                        <img src="assets/images/feature-img2-icon1.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon2  wow fadeInLeft" data-wow-duration="2s"
                            data-wow-delay="0.8s"/>
                        <img src="assets/images/feature-img2-icon2.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon3  wow fadeInRight" data-wow-duration="2s"
                            data-wow-delay="0.9s"/>
                        <img src="assets/images/feature-img2-icon3.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon4  wow fadeInLeft" data-wow-duration="2s"
                            data-wow-delay="1.0s"/>
                        <img src="assets/images/feature-img2-icon4.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon5 wow fadeInRight" data-wow-duration="2s"
                            data-wow-delay="1.1s"/>
                        <figure><img src="assets/images/feature-img2.png" alt="feature image"
                                class="img-fluid wow fadeInDown" data-wow-duration="2s" data-wow-delay="1.2s"/>
                        </figure>
                        {/* <a href="services.html"><img src="assets/images/up-right-arrow.png" alt="arrow"
                                class="img-fluid"/></a> */}
                        {/* <!-- feature box --> */}
                    </div>
                    {/* <!-- col --> */}
                </div>
                <div class="col-lg-4 col-md-6 all_column  wow fadeInRight pricing-title " data-wow-duration="2s" data-wow-delay="0.5s">
                    <div class="feature-box position-relative all_boxes">
                        <h3 class='pricing-title bit-to-right'>Real-Time Analytics</h3>
                        <p class="mb-0 bit-to-right bottom-space">Monitor chatbot performance and <br/>
                            user behavior in real time.</p>
                        <img src="assets/images/feature-img3-icon1.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon6 wow fadeInUp" data-wow-duration="2s"
                            data-wow-delay="0.6s"/>
                        {/* <img src="assets/images/elipse-blue.png" alt="feature image"
                            class="img-fluid position-absolute blue-elipse wow fadeInDown" data-wow-duration="2s"
                            data-wow-delay="0.7s"/> */}
                        <figure><img src="assets/images/feature-img3.png" alt="feature image"
                                class="img-fluid feature-img3 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s"/>
                        </figure>
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
    <section class="float-left w-100 position-relative main-box how-it-works-con padding-top padding-bottom pricing-title" id="Services" >
        {/* <figure><img src="assets/images/vector3.png" alt="vector"
                class="img-fluid position-absolute vector3 animated-plane pricing-title"/></figure> */}
        <div class="container wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
            <div class="row all_row">
                <div class="col-lg-7 col-md-12 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.4s">
                    <div class="work-img-con position-relative">
                        <figure><img src="assets/images/work-img.png" alt="image" class="img-fluid position-relative pricing-title"/></figure>
                        {/* <figure><img src="assets/images/robot.png" alt="robot"
                                class="img-fluid position-absolute robot-img animated-robot"/>
                        </figure> */}
                    </div>
                    {/* <!-- col --> */}
                </div>
                <div class="col-lg-5 col-md-12 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                    <div class="work-content-con">
                        <div class="heading-title-con">
                            <span class="special-text color-#0000FF d-block wow fadeInLeft pricing-title font-lg text-blue font-lg-bold" data-wow-duration="2s"
                                data-wow-delay="0.5s">How it Works</span>
                            <h1 class="wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.6s">How Our Advanced
                                <br/>
                                AI Chatbot Works</h1>
                            {/* <!-- heading title con --> */}
                        </div>
                        <ul class="list-unstyled p-0 pricing-title">
                            <li class="position-relative d-flex align-items-center">
                                <span className="step-number">01</span>
                                <div className="work-content-inner-con">
                                    <h5 class='bit-to-right'>Build with Ease</h5>
                                    <p class="mb-0 font-lg bit-to-right">Build your chatbot using our intuitive drag-and-drop <br/>
                                        interface — no coding needed.</p>
                                    {/* <!-- work content inner con --> */}
                                </div>
                            </li>
                            <li class="position-relative d-flex align-items-center pricing-title">
                                <span className="step-number">02</span>
                                <div class="work-content-inner-con pricing-title">
                                    <h5 class='bit-to-right'>Train with Your Content</h5>
                                    <p class="mb-0 font-lg bit-to-right">Train your AI using documents, FAQs, or URLs to create <br/>
                                        accurate, personalized responses.</p>
                                    {/* <!-- work content inner con --> */}
                                </div>
                            </li>
                            <li class="position-relative d-flex align-items-center pricing-title">
                                <span className="step-number ">03</span>
                                <div class="work-content-inner-con ">
                                    <h5 class='bit-to-right'>Deploy Anywhere</h5>
                                    <p class="mb-0 font-lg bit-to-right" >Launch on your website, mobile app, or messaging <br/>
                                        platforms in just a few clicks.</p>
                                    {/* <!-- work content inner con --> */}
                                </div>
                            </li>
                        </ul>
                        <a href="about.html" class="text-decoration-none primary_btn d-inline-block pricing-title ">Get
                            Started</a>
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
    {/* <!-- WHY CHOOSE US SECTION --> */}
    <section class="float-left w-100 position-relative why-choose-us-con padding-top padding-bottom main-box">
        <div class="container wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
            <div class="heading-title-con text-center">
                <span class="special-text color-blue d-block wow fadeInLeft" data-wow-duration="2s"
                    data-wow-delay="0.2s">Why Choose Us</span>
                <h2 class="wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">Unique Selling Points &
                    Advantages <br/>
                    of Our Service</h2>
                {/* <!-- heading title con --> */}
            </div>
            <div class="row justify-content-center wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.5s">
              <div className="col-lg-4 col-md-6 mb-4">
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
              <div className="col-lg-4 col-md-6 mb-4"> 
                <div class="choose-box">
                    <figure><img src="assets/images/choose-icon4.png" alt="icon" class="img-fluid"/></figure>
                    <h6>Scalable Solutions</h6>
                    <p class="mb-0">Our services grow with
                        your business, allowing
                        you to scale up...</p>
                    {/* <!-- choose box --> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
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
            <div class="float-left w-100 m-auto text-center wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
                <a href="about.html" class="text-decoration-none primary_btn d-inline-block">Get
                    Started</a>
            </div>
            {/* <!-- container --> */}
        </div>
        {/* <!-- why choose us  --> */}
    </section>


    {/* <!-- PRICING PLAN SECTION --> */}
    
    {/* <!-- FAQ'S SECTION --> */}
  
    {/* <!-- CALL TO ACTION --> */}
    
    <div class="float-left w-100 position-relative call-to-action-con main-box padding-bottom top-space">
        <div class="container wow fadeInUp top-space pricing title" data-wow-duration="2s" data-wow-delay="0.2s">
            <div class="cta-inner-con padding-top100 padding-bottom100 position-relative top-pricing-title ">
                {/* <figure><img src="assets/images/robot1.png" alt="vector"
                        class="img-fluid position-absolute robot1 animated-robot"/></figure> */}
                {/* <figure><img src="assets/images/robot2.png" alt="vector"
                        class="img-fluid position-absolute robot2 animated-robot "/></figure> */}
                <div class=" text-center mb-0 top-space pricing-title">
                  <span>   <br /></span>
                    <span class="special-text text-blue d-block wow fadeInLeft font-lg top-space pricing-title font-lg-bold" data-wow-duration="2s"
                        data-wow-delay="0.2s">Experience Boost</span>
                    <h1 class="wow fadeInRight " data-wow-duration="2s" data-wow-delay="0.4s">Ready to Supercharge
                        <br/>
                        Your Customer Experience?</h1>
                    <p class="wow fadeInDown font-lg pricing-title" data-wow-duration="2s" data-wow-delay="0.5s">Start using our AI chatbot
                        today to automate support, boost engagement, and save time.</p>
                    <a href="about.html" class="text-decoration-none primary_btn d-inline-block wow fadeInLeft pricing-title"
                        data-wow-duration="2s" data-wow-delay="0.6s">Get
                        Started</a>
                    <a href="contact.html" class="text-decoration-none secondary_btn d-inline-block wow fadeInRight bit-to-right pricing-title"
                        data-wow-duration="2s" data-wow-delay="0.7s">Live Demo</a>
                    {/* <!-- heading title con --> */}
                </div>
                {/* <!-- cta inner con --> */}
            </div>
            {/* <!-- container --> */}
        </div>
    </div>

    {/* <!-- FOOTER SECTION --> */}
    <footer class="footer-con main-box margin-right:40px black-background text-center">
    <section class="footer-con position-relative float-left w-100 main-box bit-to-right black-background">
        <div class="container">
            <div class="middle_portion">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <div class="logo-content bit-to-right">
                            <a href="index.html">
                                <figure class="footer-logo pricing-title">
                                    <img src="assets/images/footer-logo.png" alt="image" class="img-fluid"/>
                                </figure>
                            </a>
                            <p class="text-size-16 text-white pricing-title">We create intelligent, scalable AI solutions that help
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
                    <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-5">
                        <div class="links">
                            <h4 class="heading pricing-title">Navigation</h4>
                            <ul class="list-unstyled mb-0pricing-title text-white">
                                <li><i class="fa-solid fa-arrow-right"></i><a href="#Features"
                                        class="text-decoration-none text-white">About</a></li>
                                <li><i class="fa-solid fa-arrow-right "></i><a href="services.html"
                                        class="text-decoration-none text-white">Services</a></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-7">
                        <div class="icon">
                            <h4 class="heading pricing-title">Contact Info</h4>
                            <ul class="list-unstyled mb-0 pricing-title">
                                <li class="text-white">
                                    <i class="fa-solid fa-phone-volume"></i>
                                    <a href="tel:++61383766284" class="text-decoration-none text-white">+61 3 8376 6284</a>
                                </li>
                                <li class="text-white">
                                    <i class="fa-solid fa-envelope"></i>
                                    <a href="mailto:info@chatnex.com" class="text-decoration-none text-white">info@chatnex.com</a>
                                </li>
                                <li class="text-white">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.332688122342!2d144.96016967662732!3d-37.805675733576976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642cce121b239%3A0xa42b424ded3a529a!2s551%20Swanston%20St%2C%20Carlton%20VIC%203053%2C%20Australia!5e0!3m2!1sen!2s!4v1747807044579!5m2!1sen!2s"
                                        class="text-decoration-none address mb-0 text-white">551 Swanston Street, Melbourne
                                        Victoria 3053 Australia
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                        <div class="email-form">
                            <h4 class="heading pricing-title">Newsletter Signup</h4>
                            <form action="javascript">
                                <div class="form-group position-relative mb-0">
                                    <input type="text" class="form_style" placeholder="Enter Your Email Address"
                                        name="email"/>
                                    <button><i class="send fa-sharp fa-solid fa-paper-plane"></i></button>
                                </div>
                                <div class="form-group check-box mb-0">
                                    <input type="checkbox" id="term"/>
                                    <label for="term">I agree to the <a href="privacy-policy.html">Privacy
                                            Policy</a>.</label>
                                </div>
                            </form>
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
