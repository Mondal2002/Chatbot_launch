import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import WOW from "wowjs";
// import "../styles/home1.css";
import Model from "../components/model";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "../styles/animations.css";
import { Collapse } from "bootstrap";
import IndustriesPage from "../components/IndustriesPage";
import AmazingFeaturesPage from "../components/AmazingFeaturesPage";
import "../chatbot_style/styles.css";
import ChatAssistantModal from "../components/coffee_chatbot";
import IndustryGridPage from "../components/IndustryGridPage";
import "./home.css";

const Home = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false, // important for React
    });

    wow.init();
    wow.sync(); // forces DOM rescan
  }, []);

  const [modelvalue, setModelvalue] = useState(false);
  const [showAllIndustries, setShowAllIndustries] = useState(false);
  // const[Showchatbot,setShowchatbot]=useState(false);
  const [isChatOpen, setIsChatOpen] = useState(true);

  const closeNavbar = () => {
    const navbar = document.getElementById("mainNavbar");
    if (navbar && navbar.classList.contains("show")) {
      const bsCollapse =
        Collapse.getInstance(navbar) || new Collapse(navbar, { toggle: false });

      bsCollapse.hide();
    }
  };

  useEffect(() => {
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

    document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);

      document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);

  return (
    <div>
      {modelvalue && <Model onClose={() => setModelvalue(false)} />}
      {isChatOpen && (
        <ChatAssistantModal onClose={() => setIsChatOpen(false)} />
      )}

      <div>
        {" "}
        <title> Home | Todung </title>
      </div>
      <div>
        {/* <!-- Back to top button --> */}
        <a
          id="back-to-top-btn"
          aria-label="Back to top"
          href="#home"
          class="back-to-top-btn"
        >
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
                <Link
                  className="navbar-brand d-flex align-items-center gap-2"
                  to="/"
                >
                  <img
                    src="assets/images/Todung.png"
                    alt="Chat Nex logo"
                    height="40"
                  />
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
                      <a
                        href="#Features"
                        class="custom-link"
                        onClick={closeNavbar}
                      >
                        Features
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        href="#Services"
                        class="custom-link"
                        onClick={closeNavbar}
                      >
                        How it Works
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#where-to-use"
                        class="custom-link"
                        onClick={closeNavbar}
                      >
                        Where to use
                      </a>
                    </li>
                    <li>
                      <a
                        href="#why choose us"
                        class="custom-link"
                        onClick={closeNavbar}
                      >
                        Why choose us
                      </a>
                    </li>

                    <li className="nav-item">
                      <button
                        onClick={() => setModelvalue(true)}
                        class="text-decoration-none primary_btn d-inline-block"
                      >
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
        <section
          class="float-left w-100 banner-con position-relative main-box "
          id="home"
        >
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
                  <h1>
                    Transform Business Experience with Our Intelligent AI
                    Frontdesk
                  </h1>
                  <p>
                    An Intelligent AI Frontdesk That Answers Calls,
                    <br /> Books Appointments, and Engages Customers
                    Automatically
                  </p>
                  <button
                    class="text-decoration-none primary_btn d-inline-block "
                    onClick={() => setModelvalue(true)}
                  >
                    Contact Us
                  </button>
                  {/* <a href="contact.html" class="text-decoration-none secondary_btn d-inline-block">Live Demo</a> */}
                  {/* <!-- banner content con --> */}
                </div>
                {/* <!-- col --> */}
              </div>
              <div className="col-lg-5 col-md-5 center-all">
                <div class="banner-img-con position-relative">
                  <figure>
                    <img
                      src="assets/images/AI_frontdesk2-removebg-preview.png"
                      alt="robot"
                      class="img-fluid animated-robot custom-img2 "
                    />
                  </figure>
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
              <a
                href="#Features"
                class="scroll text-decoration-none image-wrapper"
              >
                <figure class="banner-dropdownimage mb-0 d-inline-block image-wrapper ">
                  <img
                    src="assets/images/banner-dropdownimage.png"
                    class="img-fluid center-all "
                    alt=""
                  />
                </figure>
              </a>
            </div>
          </div>
        </section>
        {/* class='pricing-title text-black' */}
        {/* <!-- CLIENT'S LOGO SECTION --> */}
        {/* <!-- AMAZING FEATURES SECTION --> */}

        <AmazingFeaturesPage />
        {/* <span className="d-block bg-danger text-white">TEST</span> */}

        {/* <!-- HOW IT WORKS SECTION --> */}
        <section
          class="float-left w-100 position-relative main-box how-it-works-con padding-top pri "
          id="Services"
        >
          {/* <figure><img src="assets/images/vector3.png" alt="vector"
                class="img-fluid position-absolute vector3 animated-plane pricing-title"/></figure> */}
          <div
            class="container wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div class="row all_row">
              <div
                class="col-lg-7 col-md-12 wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div class="work-img-con position-relative">
                  <figure>
                    <img
                      src="assets/images/How_it_works.jpeg"
                      alt=""
                      class="img-fluid top-space-img"
                    ></img>
                  </figure>
                  {/* When Done Change the youtube link here */}
                  {/* <div class="video-container top-space-img">
                            <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/fJYCQc9c_hI"
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
              <div
                class="col-lg-5 col-md-12 wow fadeInRight center-all"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div class="work-content-con">
                  <div class="heading-title-con">
                    <h4
                      class="special-text color-#0000FF d-block wow fadeInLeft  text-blue  top-space-more"
                      data-wow-duration="2s"
                      data-wow-delay="0.5s"
                    >
                      How it Works
                    </h4>
                    <h1
                      class="wow fadeInRight top-space  "
                      data-wow-duration="2s"
                      data-wow-delay="0.6s"
                      style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)" }}
                    >
                      How Our Advanced
                      <br />
                      AI Frontdesk Works
                    </h1>
                    {/* <!-- heading title con --> */}
                  </div>
                  <div class="list-unstyled p-0 fixed-box fixed-section">
                    <Swiper
                      direction="vertical"
                      slidesPerView="auto"
                      freeMode={{
                        enabled: true,
                        momentum: true,
                        momentumRatio: 0.9,
                        momentumBounce: false,
                      }}
                      mousewheel={{
                        forceToAxis: true,
                        releaseOnEdges: false,
                        sensitivity: 0.8,
                      }}
                      resistance={false}
                      watchOverflow={true}
                      modules={[Mousewheel]}
                      className="work-swiper"
                    >
                      <SwiperSlide>
                        <div class="position-relative d-flex align-items-center ">
                          <span className="step-number">01</span>
                          <div className="work-content-inner-con">
                            <h5 class="bit-to-right">Customer Speaks</h5>
                            <p class="mb-0 font-lg bit-to-right">
                              Customers call and interact naturally with the AI
                              assistant.
                            </p>
                            {/* <!-- work content inner con --> */}
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div class="position-relative d-flex align-items-center ">
                          <span className="step-number">02</span>
                          <div class="work-content-inner-con pricing-title">
                            <h5 class="bit-to-right">AI Understands Intent</h5>
                            <p class="mb-0 font-lg bit-to-right">
                              The system listens, interprets, and responds
                              intelligently in real time.
                            </p>
                            {/* <!-- work content inner con --> */}
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div class="position-relative d-flex align-items-center ">
                          <span className="step-number ">03</span>
                          <div class="work-content-inner-con ">
                            <h5 class="bit-to-right">Actions Executed</h5>
                            <p class="mb-0 font-lg bit-to-right">
                              It answers questions, handles requests, automates
                              tasks, and records information..
                            </p>
                            {/* <!-- work content inner con --> */}
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div class="position-relative d-flex align-items-center ">
                          <span className="step-number">04</span>
                          <div class="work-content-inner-con pricing-title">
                            <h5 class="bit-to-right">
                              Team Gets Instant Updates
                            </h5>
                            <p class="mb-0 font-lg bit-to-right">
                              Your staff receives real-time updates — no manual
                              effort required.
                            </p>
                            {/* <!-- work content inner con --> */}
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div class="center-all">
                    <button
                      onClick={() => setModelvalue(true)}
                      class="text-decoration-none primary_btn d-inline-block pricing-title "
                    >
                      Contact Us
                    </button>
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
        <section id="where-to-use" className="py-5 position-relative">
          <div className="container">
            <div
              className="text-center mb-5 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <h4 className="text-blue mb-3 fw-bold">Where It Can Be Used</h4>
              <h2
                className="mb-3"
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 600,
                }}
              >
                Versatile AI Solutions
                <br />
                Across Industries
              </h2>
              <p
                className="text-muted"
                style={{
                  fontSize: "18px",
                  maxWidth: "700px",
                  margin: "0 auto",
                }}
              >
                Transform your customer experience with intelligent automation
                tailored for your industry
              </p>
            </div>

            {/* Healthcare Industry */}
            <IndustriesPage />

            {/* And More Button */}
            <div
              className="text-center my-5 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.9s"
            >
              <button
                onClick={() => setShowAllIndustries(!showAllIndustries)}
                className="btn btn-lg px-5 py-3 fw-bold position-relative overflow-hidden"
                style={{
                  background: showAllIndustries
                    ? "linear-gradient(135deg, #1a5fd9 0%, #2777fc 100%)"
                    : "linear-gradient(135deg, #2777fc 0%, #1a5fd9 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  transition: "all 0.4s ease",
                  boxShadow: "0 4px 15px rgba(39, 119, 252, 0.3)",
                }}
              >
                <span className="d-flex align-items-center gap-2">
                  {showAllIndustries ? "Show Less" : "Explore More Industries"}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      transform: showAllIndustries
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.4s ease",
                    }}
                  >
                    <path
                      d="M19 9L12 16L5 9"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Other Industries - Collapsible */}
            <IndustryGridPage show={showAllIndustries} />
          </div>
        </section>

        {/* <!-- WHY CHOOSE US SECTION --> */}
        <section
          class="float-left w-100 position-relative why-choose-us-con padding-top padding-bottom main-box"
          id="why choose us"
        >
          <div
            class="container wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div class="heading-title-con text-center">
              <h4
                class="special-text color-blue d-block wow fadeInLeft text-blue top-space "
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                Why Choose Us
              </h4>
              <h2
                class="wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                Unique Selling Points & Advantages <br />
                of Our Service
              </h2>
              {/* <!-- heading title con --> */}
            </div>
            <div
              class="row justify-content-center wow fadeInDown"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <div className="col-lg-4 col-md-6 mb-4">
                <div class="choose-box">
                  <figure>
                    <img
                      src="assets/images/choose-icon1.png"
                      alt="icon"
                      class="img-fluid"
                    />
                  </figure>
                  <h6>Tailored Solutions</h6>
                  <p class="mb-0">
                    We offer customized services designed to meet the specific
                    needs...
                  </p>
                  {/* <!-- choose box --> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div class="choose-box">
                  <figure>
                    <img
                      src="assets/images/choose-icon2.png"
                      alt="icon"
                      class="img-fluid"
                    />
                  </figure>
                  <h6>Customer Support</h6>
                  <p class="mb-0">
                    Our dedicated support team is available 24/7, providing
                    assistance...
                  </p>
                  {/* <!-- choose box --> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div class="choose-box">
                  <figure>
                    <img
                      src="assets/images/choose-icon3.png"
                      alt="icon"
                      class="img-fluid"
                    />
                  </figure>
                  <h6>Affordable Pricing</h6>
                  <p class="mb-0">
                    Competitive rates with transparent pricing—no hidden fees...
                  </p>
                  {/* <!-- choose box --> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div class="choose-box">
                  <figure>
                    <img
                      src="assets/images/choose-icon4.png"
                      alt="icon"
                      class="img-fluid"
                    />
                  </figure>
                  <h6>Scalable Solutions</h6>
                  <p class="mb-0">
                    Our services grow with your business, allowing you to scale
                    up...
                  </p>
                  {/* <!-- choose box --> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div class="choose-box">
                  <figure>
                    <img
                      src="assets/images/choose-icon5.png"
                      alt="icon"
                      class="img-fluid"
                    />
                  </figure>
                  <h6>Expert Team</h6>
                  <p class="mb-0">
                    Our experienced professionals bring deep industry
                    knowledge...
                  </p>
                  {/* <!-- choose box --> */}
                </div>
              </div>
              {/* <!-- choose outer con --> */}
            </div>

            {/* <!-- container --> */}
          </div>
          {/* <!-- why choose us  --> */}
        </section>

        {/* <!-- PRICING PLAN SECTION --> */}

        {/* <!-- FAQ'S SECTION --> */}

        {/* <!-- CALL TO ACTION --> */}

        <div class="float-left w-100 position-relative call-to-action-con main-box padding-bottom top-space-more">
          <div
            class="container wow fadeInUp top-space "
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div class="cta-inner-con padding-top100 padding-bottom100 position-relative top ">
              <figure>
                <img
                  src="assets/images/AI_frontdesk_right_preview_rev_1.png"
                  alt="vector"
                  class="img-fluid position-absolute robot1 animated-robot"
                />
              </figure>
              <figure>
                <img
                  src="assets/images/AI_frontdesk_left_preview_rev_1.png"
                  alt="vector"
                  class="img-fluid position-absolute robot2 animated-robot "
                />
              </figure>
              <div class=" text-center mb-0  ">
                <span> </span>
                <h4
                  class="special-text text-blue d-block wow fadeInLeft  "
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  Experience Boost
                </h4>
                <h2
                  class="wow fadeInRight "
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                >
                  Ready to Supercharge
                  <br />
                  Your Customer Experience?
                </h2>
                <p
                  class="wow fadeInDown pricing-title"
                  data-wow-duration="2s"
                  data-wow-delay="0.5s"
                >
                  Start using our AI Frontdesk today to automate support, boost
                  engagement, and save time.
                </p>
                <button
                  onClick={() => setModelvalue(true)}
                  class="text-decoration-none primary_btn d-inline-block wow fadeInLeft "
                  data-wow-duration="2s"
                  data-wow-delay="0.6s"
                >
                  Contact Us
                </button>
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
                      <a href="#home">
                        <figure class="footer-logo ">
                          <img
                            src="assets/images/Todung.png"
                            alt=""
                            class="img-fluid"
                          />
                        </figure>
                      </a>
                      <p class="text-size-16 text-white center-all ">
                        We create intelligent, scalable AI solutions that help
                        businesses work smarter, move faster, and achieve more..
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12 bottom-space">
                    <div class="links">
                      <h4 class="heading ">Navigation</h4>
                      <ul class="list-unstyled mb-0 bottom-gap text-white">
                        <li class="bottom-gap">
                          <i class="fa-solid fa-arrow-right "></i>
                          <a
                            href="#Features"
                            class="text-decoration-none text-white"
                          >
                            Features
                          </a>
                        </li>
                        <li class="bottom-gap">
                          <i class="fa-solid fa-arrow-right "></i>
                          <a
                            href="#Services"
                            class="text-decoration-none text-white"
                          >
                            How it works
                          </a>
                        </li>
                        <li class="bottom-gap">
                          <i class="fa-solid fa-arrow-right "></i>
                          <a
                            href="#where-to-use"
                            class="text-decoration-none text-white"
                          >
                            Where to use
                          </a>
                        </li>
                        <li class="bottom-gap">
                          <i class="fa-solid fa-arrow-right "></i>
                          <a
                            href="#why choose us"
                            class="text-decoration-none text-white"
                          >
                            Why choose us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12 bottom-space">
                    <div class="icon">
                      <h4 class="heading ">Contact Info</h4>
                      <ul class="list-unstyled mb-0 bottom-gap">
                        <li class="text-white bottom-gap">
                          <i class="fa-solid fa-phone-volume"></i>
                          <p class="text-decoration-none text-white">
                            +91 89612 75478
                          </p>
                        </li>
                        <li class="text-white bottom-gap">
                          <i class="fa-solid fa-envelope"></i>
                          <p class="text-decoration-none text-white">
                            sen@ebluesoft.in
                          </p>
                        </li>
                        <li class="text-white bottom-gap">
                          <i class="fa-solid fa-location-dot"></i>
                          <a
                            href="https://maps.app.goo.gl/sbVF4p9HWEj6n7jJ6"
                            class="text-decoration-none address mb-0 text-white"
                          >
                            Shrachi EK Tower, EKT/5/Office-B, Newtown, Kolkata,
                            West Bengal 700161
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="copyright-style ">
                <p class="mb-0">
                  Copyright © 2026 EblueSoft Infotech. All Rights Reserved.
                </p>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
};

export default Home;
