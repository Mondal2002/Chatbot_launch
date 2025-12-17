import React from 'react'

const Coverpage = () => {
  return (
    
    <div>
        <style>

      {/* Inline CSS for simplicity */}
        {`
        .navbar {
          width: 100%;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          background: transparent;   /* no color */
        }

        .nav-left {
          display: flex;
          gap: 20px;
        }

        .banner {
          background-image: url("https://img.freepik.com/premium-vector/elegant-lavender-white-gradient-grainy-texture-background_901408-32345.jpg");
          background-size: cover;
          background-position: center;
          width: 100%;
          height: 80vh;  /* full page height */
        }
          .fixed-image {
            max-width: 100%;
            max-height: 500px;   /* change this value as you like */
            width: auto;
            height: auto;
            object-fit: contain; /* prevents distortion */
            display: block;
            float: right;     
}
            .img-controlled {
              width: 200px;        /* set width */
              height: 80px;       /* set height */
              object-fit: cover;   /* fills box, crops if needed */
              display: block;
            }
            .btn-bd-primary {
            fontSize:clamp(2rm,2vw, 2rm);
            font-weight:6;
            color:#fff;
            background-color:#712cf9;
            border-color:#712cf9
        }
        `}</style>coverpage
        
        <div>
                  <div className="navbar">
        <div className="nav-left">
          <img src="https://img.freepik.com/premium-vector/robot-chat-chat-bot-logo-modern-conversation-automatic-technology-logo-design-vector-template_148524-1362.jpg?w=2000" alt="" className="img-controlled" />
          <Link to="/" className="text-blue">Home</Link>
          <Link className="text-blue">Connect</Link>
        </div>

        <button class="btn btn-primary" className="border px-3 py-1 rounded" type='button'>Contact Us</button>
      </div>

      {/* Full-page background section */}
      <div className="banner">
        <div>
          <img src="https://assets/images.squarespace-cdn.com/content/v1/5e6964a1fc788a470813b1d2/1584054968695-WGM5Z3WM5RLL3Y0Q7EVZ/shutterstock_696506128.jpg" alt="" className="fixed-image" />


          <p>Free 14-day trial</p>
          <p>No credit card required</p>


          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Transform Business Calls 
          </h1>

          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            with Our Intelligent
          </h1>
 
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            AI Frontdesk
          </h1>
          <h4>An Intelligent AI Frontdesk That Answers Calls,<br /> Books Appointments, and Engages Customers Automatically</h4>
        </div>
        <br />
        <a href="pricing.html" class="text-decoration-none primary_btn">Get Started</a>

      </div>
      <div>

      </div>
            <div class="heading-title-con text-center">
                <span class="special-text color-blue d-block wow fadeInLeft" data-wow-duration="2s"
                    data-wow-delay="0.2s">Amazing Features</span>
                <h2 class="wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">AI That Understands, Learns
                    <br/>
                    & Engages</h2>
            </div>
            <br />
            <div>
              <div class="row all_row wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                <div class="col-lg-4 col-md-6 all_column wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.5s">
                    <div class="feature-box position-relative all_boxes">
                        <h4>Conversational AI</h4>
                        <p class="mb-0">Respond intelligently with GPT-powered
                            natural language understanding.</p>
                        <img src="/assets/images/feature-img1-icon1.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon1  wow fadeInUp" data-wow-duration="2s"
                            data-wow-delay="0.6s"/>

                        <figure><img src="/assets/images/feature-img1.png" alt="feature image"
                                class="img-fluid  wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.7s"/>
                        </figure>
                        <a href="services.html"><img src="/assets/images/up-right-arrow.png" alt="arrow"
                                class="img-fluid"/></a>
                        {/* <!-- feature box --> */}
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 all_column wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                    <div class="feature-box position-relative all_boxes bg-green">
                        <h4>Multi-Platform</h4>
                        <p class="mb-0">Integrate with websites, apps, Facebook, <br/>
                            WhatsApp & more.</p>
                        <img src="/assets/images/feature-img2-icon1.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon2  wow fadeInLeft" data-wow-duration="2s"
                            data-wow-delay="0.8s"/>
                        <img src="/assets/images/feature-img2-icon2.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon3  wow fadeInRight" data-wow-duration="2s"
                            data-wow-delay="0.9s"/>
                        <img src="/assets/images/feature-img2-icon3.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon4  wow fadeInLeft" data-wow-duration="2s"
                            data-wow-delay="1.0s"/>
                        <img src="/assets/images/feature-img2-icon4.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon5 wow fadeInRight" data-wow-duration="2s"
                            data-wow-delay="1.1s"/>
                        <figure><img src="/assets/images/feature-img2.png" alt="feature image"
                                class="img-fluid wow fadeInDown" data-wow-duration="2s" data-wow-delay="1.2s"/>
                        </figure>
                        <a href="services.html"><img src="/assets/images/up-right-arrow.png" alt="arrow"
                                class="img-fluid"/></a>
                        {/* <!-- feature box --> */}
                    </div>
                    {/* <!-- col --> */}
                </div>
            <div class="col-lg-4 col-md-6 all_column  wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.5s">
                    <div class="feature-box position-relative all_boxes">
                        <h4>Real-Time Analytics</h4>
                        <p class="mb-0">Monitor chatbot performance and <br/>
                            user behavior in real time.</p>
                        <img src="/assets/images/feature-img3-icon1.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s"/>
                        <img src="/assets/images/elipse-blue.png" alt="feature image"
                            class="img-fluid position-absolute blue-elipse wow fadeInDown" data-wow-duration="2s"
                            data-wow-delay="0.7s"/>
                        <figure><img src="/assets/images/feature-img3.png" alt="feature image"
                                class="img-fluid feature-img3 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s"/>
                        </figure>
                        <a href="services.html"><img src="/assets/images/up-right-arrow.png" alt="arrow"
                                class="img-fluid"/></a>
                    </div>
                </div>
            </div>

    </div>

        </div>
        <div>
          class="coment-box1 d-flex align-items-center popup-bubble popup-delay-1"
          <div class="coment-box2 d-flex align-items-center popup-bubble popup-delay-2">
          <img src="assets/images/coment-box-icon2.png" alt="icon" class="img-fluid"/>
          <p class="typing mb-0" id="text2"></p>
            {/* <!-- coment box1 --> */}
          </div>
        </div>
        
        
        </div>
  )
}

export default Coverpage