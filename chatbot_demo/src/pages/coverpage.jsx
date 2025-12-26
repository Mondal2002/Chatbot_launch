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


const Coverpage = () => {
  return (
    <div>

      <style>
        {`
        /*------------------------------------------------------------------
[Master Stylesheet]

Project:  ChatNex
-------------------------------------------------------------------*/
/*------------------------------------------------------------------
[Table of contents]

1. Body
2. Header  / .header
3. Banner  /.banner-con
4. Services  /.our-services-con
5. Work  /.our-work-con
6. Projects  /.our-projects-con
7. Pricing  /.pricing-plans-con
8. Testimonial  /.testimonial-con
9. Faq  /.faq-con
10. Build  /.build-con
11. Footer  /.footer-con
*/
/*------------------------------------------------------------------
# [Color Codes]

#  --e-global-color-primary: #ffffff;
#  --e-global-color-secondary: #000000;
#  --e-global-color-accent: #2777fc;
#  --e-global-color-text: #5f5f5f;
#  --e-global-color-text2: #bebebe;
#  --e-global-color-light-blue: #f2f7ff;
#  --e-global-color-light-green: #f1fdff;

*/
/*------------------------------------------------------------------
# [Typography]
 
Body copy: "Urbanist", sans-serif;
Heading: "Urbanist", sans-serif;
*/

@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&amp;display=swap');

body {
    font-family: "Urbanist", sans-serif;
}

:root {
    --e-global-color-primary: #ffffff;
    --e-global-color-secondary: #000000;
    --e-global-color-accent: #2777fc;
    --e-global-color-text: #5f5f5f;
    --e-global-color-text2: #bebebe;
    --e-global-color-light-blue: #f2f7ff;
    --e-global-color-light-green: #f1fdff;

}

figure {
    margin-bottom: 0;
}

h1 {
    font-size: 86px;
    line-height: 92px;
    font-weight: 600;
    color: var(--e-global-color-secondary);
    margin-bottom: 22px;
}

h2 {
    font-size: 56px;
    line-height: 68px;
    font-weight: 600;
    color: var(--e-global-color-secondary);
}


h3 {
    font-size: 36px;
    line-height: 40px;
    font-weight: 500;
    color: var(--e-global-color-secondary);
}

h4 {
    font-size: 26px;
    line-height: 30px;
    font-weight: 600;
    color: var(--e-global-color-secondary);
}

.footer-con h4 {
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;
    color: var(--e-global-color-primary);
}

h5 {
    font-size: 22px;
    line-height: 24px;
    font-weight: 600;
    color: var(--e-global-color-secondary);
}

h6 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    color: var(--e-global-color-secondary);
}

/* h6::before {
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto 0;
    width: 8px;
    height: 8px;
    position: absolute;
    border-radius: 100%;
    background-color: var(--e-global-color-white);
} */

p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: var(--e-global-color-text);
    word-break: break-word;
}

.text-size-18 {
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    color: var(--e-global-color-text);
}

.text-size-16 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: var(--e-global-color-text);
}

.text-size-14 {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: var(--e-global-color-secondary);
}

.primary_btn {
    font-size: 16px;
    min-width: 178px;
    padding: 22px 30px;
    line-height: 16px;
    font-weight: 700;
    text-align: center;
    border-radius: 10px;
    position: relative;
    display: inline-block;
    color: var(--e-global-color-primary);
    background-color: var(--e-global-color-accent);
    transition: all 0.8s ease-in-out;
}

.primary_btn:hover {
    color: var(--e-global-color-secondary);
    background-color: var(--e-global-color-primary);
}

.secondary_btn {
    font-size: 16px;
    min-width: 178px;
    padding: 22px 30px;
    line-height: 16px;
    font-weight: 700;
    text-align: center;
    border-radius: 10px;
    position: relative;
    display: inline-block;
    color: var(--e-global-color-secondary);
    background-color: var(--e-global-color-primary);
    transition: all 0.8s ease-in-out;
}

.secondary_btn:hover {
    color: var(--e-global-color-primary);
    background-color: var(--e-global-color-secondary);
}

html {
    scroll-behavior: smooth;
}

.all_row {
    display: flex;
    flex-wrap: wrap;
}

.all_column {
    display: flex;
}

.all_boxes {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.padding-top {
    padding-top: 140px;
}

.padding-bottom {
    padding-bottom: 150px;
}

.padding-top100 {
    padding-top: 100px;
}

.padding-bottom100 {
    padding-bottom: 100px;
}

.heading-title-con {
    margin-bottom: 46px;
}

.font-weight-600 {
    font-weight: 600;
}

.font-weight-500 {
    font-weight: 500;
}

.color-blue {
    color: var(--e-global-color-accent);
}

.bg-green {
    background-color: var(--e-global-color-light-green) !important;
}

/* special classes ends here */
/* Home Page */

/* Header */

/* HEADER SECTION */
.header-con .navbar-light .navbar-nav .nav-link {
    font-size: 16px;
    color: var(--e-global-color-secondary);
    font-weight: 500;
    padding: 10px 0 !important;
    position: relative;
}

.header-con .navbar-light .navbar-nav .nav-link:hover {
    color: var(--e-global-color-accent);
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
    border-top: 2px solid var(--e-global-color-accent);
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
    background: var(--e-global-color-accent);
    transition: ease-in-out 0.6s;
}

.header-con .navbar-light .navbar-nav .nav-link.active {
    color: var(--e-global-color-accent);
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
    background-color: var(--e-global-color-primary);
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
    border-bottom: 1px solid var(--e-global-color-primary);
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: var(--e-global-color-secondary);
    border-radius: 6px;
}

.header-con .navbar-light .navbar-nav .dropdown-menu .dropdown-item:active,
.header-con .navbar-light .navbar-nav .dropdown-menu .dropdown-item:active {
    background-color: var(--e-global-color-accent);
    color: var(--e-global-color-primary);
}

.header-con .navbar-light .navbar-nav .dropdown-menu .dropdown-item.active {
    background-color: var(--e-global-color-accent);
    color: var(--e-global-color-primary);
}

.header-con .navbar-light .navbar-nav .dropdown-menu .dropdown-item:hover {
    background-color: var(--e-global-color-accent);
    color: var(--e-global-color-primary);
}

.header-con .navbar-light .navbar-brand {
    margin: 0;
    padding: 0;
}

/* HEADER SECTION */
/* BACK TO TOP BUTTON */
#back-to-top-btn {
    display: none;
    position: fixed;
    bottom: 60px;
    right: 60px;
    z-index: 99;
    font-size: 18px;
    border: none;
    background-color: var(--e-global-color-accent);
    color: var(--e-global-color-primary);
    cursor: pointer;
    width: 80px;
    height: 80px;
    -webkit-animation: spineer 2s infinite;
    animation: spineer 2s infinite;
    border-radius: 10px;
}

.header-contact .contact-btn {
    min-width: 158px;
    background-color: var(--e-global-color-accent);
    color: var(--e-global-color-primary);
    height: 52px;
    line-height: 32px;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    padding: 10px;
    width: 100%;
    text-decoration: none;
    z-index: 1;
    border-radius: 10px;
}

.header-contact .contact-btn:hover {
    background-color: var(--e-global-color-secondary);
    color: var(--e-global-color-primary);
    transition: ease-in-out 0.6s;
    /* box-shadow: 0px 10px 20px rgb(0 0 0 / 15%); */
}


.header-contact {
    margin-left: 22px;
}

.free-trial {
    margin-right: 0;
    font-weight: 700;
    padding-left: 100px;
}

.font-weight-700 {
    font-weight: 700 !important;
}

/* .free-trial a:hover {
    text-decoration: none;
    color: var(--e-global-color-text) !important;
} */

/* Header */

/* Footer */

.footer-con {
    background: var(--e-global-color-secondary);
}

.footer-con .middle_portion {
    padding: 122px 0 116px;
}

.footer-con .middle_portion .logo-content .footer-logo {
    margin-bottom: 24px;
}

.footer-con .middle_portion .logo-content .footer-logo img {
    width: 138px;
}

.footer-con .middle_portion .logo-content p {
    margin-bottom: 28px;
    padding-right: 15px;
    color: var(--e-global-color-text2);
}

.footer-con .middle_portion .social-icons li {
    margin: 0 9px;
    display: inline-block;
    transition: all 0.6s ease-in-out;
}

.footer-con .middle_portion .social-icons a {
    margin-left: 0 !important;
}

.footer-con .middle_portion .social-icons i {
    font-size: 18px;
    color: var(--e-global-color-primary);
    transition: all 0.6s ease-in-out;
}

.footer-con .middle_portion .social-icons i:hover {
    transform: translateY(-5px);
    color: var(--e-global-color-accent);
}

.footer-con .middle_portion .social-icons li:first-child {
    margin-left: 0;
}

.footer-con .middle_portion .social-icons li:last-child {
    margin-right: 0;
}

.footer-con .middle_portion h4 {
    margin-bottom: 26px;
    color: var(--e-global-color-primary);
}

.footer-con .middle_portion .links {
    padding-left: 44px;
}

.footer-con .middle_portion li {
    margin-bottom: 16px;
}

.footer-con .middle_portion li:last-child {
    margin-bottom: 0 !important;
}

.footer-con .middle_portion li i {
    font-size: 12px;
    top: -2px;
    position: relative;
    color: var(--e-global-color-accent);
}

.footer-con .middle_portion li a {
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
    margin-left: 18px;
    color: var(--e-global-color-text2);
    transition: all 0.8s ease-in-out;
}

.footer-con .middle_portion li a:hover {
    color: var(--e-global-color-accent);
}

.footer-con .middle_portion .icon {
    padding-left: 45px;
}

.footer-con .middle_portion .icon li {
    position: relative;
    margin-bottom: 16px;
    padding-left: 34px;
    display: inline-block;
}

.footer-con .middle_portion .icon i {
    position: absolute;
    font-size: 16px;
    left: 0;
    top: 4px;
}

.footer-con .middle_portion .icon a {
    margin-left: 0 !important;
}

.footer-con .middle_portion .email-form {
    padding-left: 12px;
}

.footer-con .middle_portion .email-form h4 {
    margin-bottom: 30px;
}

.footer-con .middle_portion .email-form input {
    position: relative;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: var(--e-global-color-text2);
    background-color: rgb(255 255 255 / 8%);
    border-radius: 10px;
    padding: 19px 56px 19px 20px;
    margin-bottom: 18px;
    width: 100%;
    border: 1px solid transparent;
    overflow: visible;
    outline: none;
}

.footer-con .middle_portion .email-form input::placeholder {
    color: var(--e-global-color-text2);
}

.footer-con .middle_portion .email-form input:focus {
    border: 1px solid var(--e-global-color-accent);
}

.footer-con .middle_portion .email-form button {
    font-size: 16px;
    color: var(--e-global-color-primary);
    background-color: var(--e-global-color-accent);
    border-radius: 10px;
    width: 62px;
    height: 60px;
    line-height: 60px;
    border: none !important;
    float: right;
    position: absolute;
    top: 0;
    right: 0;
    overflow: visible;
    outline: none;
    transition: all 0.6s ease-in-out;
}

.footer-con .middle_portion .email-form button:hover {
    color: var(--e-global-color-accent);
    background-color: var(--e-global-color-primary);
}

.footer-con .middle_portion .email-form .check-box {
    padding-left: 38px;
}

.footer-con .middle_portion .email-form .check-box input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
}

.footer-con .middle_portion .email-form .check-box label {
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
    color: var(--e-global-color-text2);
    position: relative;
    cursor: pointer;
    margin: 0;
}

.footer-con .middle_portion .email-form .check-box label a {
    text-decoration: underline;
    color: var(--e-global-color-text2);
    transition: 0.8s ease-in-out;
}

.footer-con .middle_portion .email-form .check-box label a:hover {
    color: var(--e-global-color-accent);
}

.footer-con .middle_portion .email-form .check-box label:before {
    content: '';
    -webkit-appearance: none;
    background-color: rgb(255 255 255 / 10%);
    border-radius: 5px;
    padding: 2px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: -21px;
    width: 20px;
    height: 20px;
    top: -1px;
    left: -38px;
}

.footer-con .middle_portion .email-form .check-box input:checked+label:after {
    content: '';
    display: block;
    position: absolute;
    top: 3px;
    left: -30px;
    width: 5px;
    height: 10px;
    border: solid var(--e-global-color-accent);
    border-width: 0 2px 2px 0;
    transform: rotate(50deg);
}

.footer-con .copyright p {
    font-size: 12px;
    line-height: 12px;
    font-weight: 400;
    padding: 21px 0;
    text-align: center;
    color: var(--e-global-color-text2);
    border-top: 1px solid rgb(255 255 255 / 10%);
}

/* Back to top button */

#button {
    display: inline-block;
    background-color: var(--e-global-color-accent);
    width: 64px;
    height: 64px;
    text-align: center;
    border-radius: 10px;
    position: fixed;
    bottom: 60px;
    right: 80px;
    transition: background-color .3s, opacity .5s, visibility .5s;
    opacity: 0;
    visibility: hidden;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-animation: spineer 2s infinite;
    animation: spineer 2s infinite;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.6s ease-in-out;
}

#button::after {
    content: "\f062";
    font-family: "Font Awesome 5 free";
    font-size: 20px;
    line-height: 20px;
    color: #fff;
    font-weight: 600;
}

#button.show {
    opacity: 1;
    visibility: visible;
}

#button:hover {
    transform: translateY(-5px);
}

.special-text {
    color: var(--e-global-color-accent);
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 10px;
    font-weight: 600;
}

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

/* Preloader -------------------------------------------------------*/

/* Loader Styles start here */
.loader-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 99999;
}

.loader {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50px;
    height: 50px;
    font-size: 0;
    color: var(--e-global-color-accent);
    display: inline-block;
    margin: -25px 0 0 -25px;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}

.lead {
    font-size: 13px;
}

.loader div {
    background-color: var(--e-global-color-accent);
    display: inline-block;
    float: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    opacity: .5;
    border-radius: 10%;
    -webkit-animation: ballPulseDouble 2s ease-in-out infinite;
    animation: ballPulseDouble 2s ease-in-out infinite;
}

.loader div:last-child {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
}

@-webkit-keyframes ballPulseDouble {

    0%,
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    50% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@keyframes ballPulseDouble {

    0%,
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    50% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

/* Preloader -------------------------------------------------------*/

/*  */
/* 404 page styling start here */
.coming-soon-con,
.error-section {
    height: 100vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background-image: url(../images/pricing-plan-bg-img.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

.error-con {
    position: relative;
    z-index: 2;
}

.error-con h2 {
    font-size: 170px;
    line-height: 165px;
    margin-bottom: 30px;
    color: var(--e-global-color-secondary);
}

.error-con h2 i {
    font-size: 130px;
    line-height: 140px;
    color: var(--e-global-color-accent);
}

.error-con h4 {
    font-size: 34px;
    line-height: 34px;
    margin-bottom: 18px;
    color: var(--e-global-color-accent);
}

.error-con p {
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 30px;
    color: var(--e-global-color-secondary);
}

.error-con .primary-button a i {
    margin-left: 0;
}

/* COMING SOON PAGE */
.coming-soon-con .new-logo {
    margin-bottom: 35px;
}

.coming-soon-con h1 {
    margin-bottom: 30px;
    font-size: 85px;
    line-height: 95px;
    text-transform: uppercase;
}

.coming-soon-con h3 {
    margin-bottom: 20px;
    font-size: 34px;
    color: var(--e-global-color-accent);
}

/* coming soon countdown timer styling */
.compaign_countdown ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.compaign_countdown ul li {
    float: left !important;
    width: auto;
    margin: 0;
    text-align: center;
    margin: 0 13px;
    min-height: 133px;
    min-width: 133px;
    background-color: var(--e-global-color-primary);
    padding: 20px 16px;
    color: var(--e-global-color-secondary);
    font-size: 22px;
    font-weight: 300;
    border-radius: 10px;
}

.compaign_countdown ul li:first-child {
    margin-left: 0;
}

.compaign_countdown ul li:last-child {
    margin-right: 0;
}

.compaign_countdown ul li span.days,
.compaign_countdown ul li span.hours,
.compaign_countdown ul li span.minutes,
.compaign_countdown ul li span.seconds {
    display: block;
    color: var(--e-global-color-accent);
    width: auto;
    font-size: 60px;
    line-height: 65px;
    border-radius: 10px;
    font-weight: 600;
}

.compaign_countdown {
    margin: 0 auto;
    width: 70%;
}

.coming-soon-con {
    flex-grow: 1;
    min-height: 100vh;
}

.error-banner,
.coming-soon-con {
    flex-grow: 1;
}

/* BANNER SECTION */
.banner-con {
    background-image: url(../images/banner-bg-img.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 909px;
}

.banner-con::before {
    position: absolute;
    content: '';
    background-image: url(../images/faded-ellipse.png);
    background-repeat: no-repeat;
    background-size: cover;
    width: 558px;
    height: 558px;
    top: 80px;
    left: 90px;
}

.banner-con .row {
    padding-top: 78px;
}

.banner-con p {
    font-size: 20px;
    color: var(--e-global-color-secondary);
    font-weight: 500;
    margin-bottom: 39px;
}

.banner-content-con ul {
    margin-bottom: 14px;
}

.banner-content-con ul li i {
    color: var(--e-global-color-accent);
    position: absolute;
    left: 0;
    top: 4px;
}

.banner-content-con ul li {
    padding-left: 25px;
    margin-right: 20px;
    font-weight: 500;
    color: var(--e-global-color-secondary);
}

/* .animated-robot {
    animation: float 2s ease-in-out infinite;
    transition: transform 0.4s ease-in-out;
} */

#typingText {
    /* font-size: 1.2rem; */
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid var(--e-global-color-secondary);
    width: fit-content;
}

/* Floating up and down */
@keyframes float {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0px);
    }
}

/* Subtle glow animation */
@keyframes glow {
    0% {
        filter: drop-shadow(0 0 5px rgba(39, 119, 252, 0.3));
    }

    100% {
        filter: drop-shadow(0 0 15px rgba(39, 119, 252, 0.6));
    }
}

.banner-con a.primary_btn {
    margin-right: 12px;
}

.banner-con .banner-img-con .coment-box1 {
    background-color: rgb(255 255 255 / 90%);
    border-radius: 10px;
    width: 240px;
    padding: 10px 12px;
    position: absolute;
    top: 245px;
    box-shadow: 0px 9px 16px rgb(0 0 0 / 5%);

}

.banner-con .banner-img-con p {
    font-size: 14px;
    line-height: 1.1em;
    margin-left: 10px;
    font-weight: 500;
    color: var(--e-global-color-secondary);
}

.banner-con .banner-img-con .coment-box2 {
    background-color: rgb(255 255 255 / 90%);
    border-radius: 10px;
    width: 240px;
    padding: 14px 12px;
    position: absolute;
    bottom: 230px;
    right: -60px;
    box-shadow: 0px 9px 16px rgb(0 0 0 / 5%);
}

/*  */
.popup-bubble {
    opacity: 0;
    transform: scale(0.8) translateY(10px);
    animation: popIn 0.6s ease-out forwards;
}

.popup-delay-1 {
    animation-delay: 0.4s;
}

.popup-delay-2 {
    animation-delay: 1.0s;
}

@keyframes popIn {
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.banner-con .down_button {
    left: 0;
    right: 0;
    bottom: 50px;
    position: absolute;
    margin: 0 auto;
}

.banner-con2 .down_button .banner-dropdownimage {
    transition: ease-in-out 0.6s;
}

/* CLIENT'S LOGO SECTION */
.client-logo-con {
    padding-top: 80px;
    overflow: hidden;
}

.client-logo-inner p {
    font-size: 20px;
    line-height: 29px;
    font-weight: 600;
    color: var(--e-global-color-secondary);
}

.logos-con {
    gap: 75px;
}

.logos-con img {
    transition: ease-in-out 0.6s;
}

.logos-con img:hover {
    transform: translateY(-3px);
}

/* AMAZING FEATURES SECTION */
.amazing-features-con .feature-box {
    background-color: var(--e-global-color-light-blue);
    border-radius: 20px;
    padding: 44px 30px 0 34px;
    transition: all 0.4s ease;
    transform: translateY(0);
}

.amazing-features-con .feature-box:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.floating-icon {
    animation: floaty 3s ease-in-out infinite;
}

@keyframes floaty {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-8px);
    }

    100% {
        transform: translateY(0px);
    }
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

.amazing-features-con .feature-box a {
    width: 54px;
    height: 54px;
    background-color: var(--e-global-color-primary);
    line-height: 54px;
    position: absolute;
    top: 12px;
    right: 12px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ease-in-out 0.3s;
}

.amazing-features-con .feature-box figure {
    margin-top: auto;
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
}

/* HOW IT WORKS SECTION */
.how-it-works-con {
    background-image: url(../images/work-banner-bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}

.how-it-works-con img.robot-img {
    top: 187px;
    left: -79px;
}

.work-img-con {
    padding-top: 74px;
    padding-bottom: 68px;
}

.work-img-con::before {
    content: "";
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: 0 auto;
    width: 636px;
    height: 636px;
    position: absolute;
    border-radius: 100%;
    background-color: var(--e-global-color-primary);
    z-index: 1;
}

.work-img-con figure {
    text-align: center;
}

.work-img-con figure img {
    position: relative;
    z-index: 2;
}

.how-it-works-con .work-content-con ul li {
    margin-bottom: 35px;
}

.how-it-works-con .work-content-con ul li span {
    font-size: 26px;
    font-weight: 600;
    width: 60px;
    height: 60px;
    line-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: var(--e-global-color-primary);
    border-radius: 15px;
    margin-right: 27px;
}

.how-it-works-con .work-content-con .primary_btn:hover {
    background-color: var(--e-global-color-secondary);
    color: var(--e-global-color-primary);
}

.how-it-works-con .vector3 {
    position: absolute;
    right: 111px;
    bottom: 186px;
}

/* .animated-plane {
    animation: hoverZigZag 4s ease-in-out infinite;
} */

/* Localized hover + zigzag motion */
@keyframes hoverZigZag {
    0% {
        transform: translate(0px, 0px) rotate(0deg);
    }

    25% {
        transform: translate(-8px, -5px) rotate(-5deg);
    }

    50% {
        transform: translate(6px, 4px) rotate(3deg);
    }

    75% {
        transform: translate(-4px, -6px) rotate(-2deg);
    }

    100% {
        transform: translate(0px, 0px) rotate(0deg);
    }
}

.how-it-works-con .animated-plane {
    filter: drop-shadow(0 0 6px rgba(39, 119, 252, 0.4));
}


/* FAQ SECTION */
.faq-con .faq_content h2 {
    margin-bottom: 50px;
}

.faq-con h6 {
    margin-bottom: 0;
    color: var(--e-global-color-secondary);
}

.faq-con a h6:hover {
    color: var(--e-global-color-accent);
}

.faq-con .accordion-card {
    margin-bottom: 30px;
    width: 100%;
    border-radius: 15px;
    background-color: var(--e-global-color-primary);
    border: 1px solid transparent;
}

.faq-con .accordion-card:last-child {
    margin-bottom: 0;
}

.faq-con .accordian-inner .card-header {
    padding: 0;
    margin-bottom: 0;
    background: none;
    border: none;
    box-shadow: 0px 0px 50px rgb(0 0 0 / 3%);
    border-radius: 15px;
}

.faq-con .accordian-inner .card-header a {
    padding: 22px 50px 22px 36px;
}

.faq-con .accordian-inner .card-body {
    padding: 0 36px 22px;
}

.faq-con .accordion-card a.btn.btn-link:focus {
    outline: none;
    box-shadow: none;
}

.faq-con .accordian-inner .accordion-card i {
    position: absolute;
    right: 20px;
    margin: -6px 0;
}

.faq-con .accordian-inner .accordion-card .btn {
    text-decoration: none;
    text-align: left;
    display: block;
    border-radius: 10px;
}

.faq-con .accordion-card a.btn.btn-link {
    position: relative;
}

.faq-con .accordion-card .btn-link:before {
    content: "\f068";
    font-size: 18px;
    top: 20px;
    right: 22px;
    position: absolute;
    font-family: 'FontAwesome';
    color: var(--e-global-color-accent);
}

.faq-con .accordion-card .collapsed:before {
    content: "2b";
}

.faq-con .accordion-card:has(.show) .btn-link:before {
    content: "f068";
}

.faq-con .accordion-card:has(.show) .btn-link h6 {
    color: var(--e-global-color-accent);

}

.faq-con .accordion-card:has(.show) {
    border: 1px solid var(--e-global-color-accent);
}


.faq-con .accordion-card:has(.show) .card-header {
    box-shadow: none;
}

.vector1 {
    position: absolute;
    left: 120px;
    top: 194px;
}

.vector2 {
    position: absolute;
    right: 136px;
    bottom: 237px;
}

/*  WHY CHOOSE US SECTION */
.why-choose-us-con .choose-outer-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 25px;
    margin-bottom: 54px;
}

.choose-box {
    background-color: var(--e-global-color-primary);
    border-radius: 20px;
    box-shadow: 2px 0px 50px rgb(0 0 0 / 3%);
    border-bottom: 2px solid var(--e-global-color-accent);
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

.why-choose-us-con .primary_btn:hover {
    background-color: var(--e-global-color-secondary);
    color: var(--e-global-color-primary);
}

.how-it-works-con,
.faq-con,
.statistics-con,
.testimonials-con,
.call-to-action-con,
.amazing-features-con,
.why-choose-us-con,
.pricing-plan-con,
.about-us-con,
.our-team-con,
.privacy-policy-content-con,
.contact-info-con,
.contact-form-con {
    overflow: hidden;
}

/* Fun zig-zag flight animation */
@keyframes zigzag-flight {
    0% {
        transform: translate(0, 0) rotate(-5deg);
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    20% {
        transform: translate(100px, -20px) rotate(5deg);
    }

    40% {
        transform: translate(300px, 20px) rotate(-3deg);
    }

    60% {
        transform: translate(500px, -15px) rotate(4deg);
    }

    80% {
        transform: translate(700px, 10px) rotate(-2deg);
    }

    100% {
        transform: translate(900px, -10px) rotate(0deg);
        opacity: 0;
    }
}

/* PRICING PLAN SECTION */
.pricing-plan-con {
    background-image: url(../images/pricing-plan-bg-img.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

.pricing-plan-con .pricing-box {
    background-color: var(--e-global-color-primary);
    padding: 56px 50px;
    border-radius: 30px;
    transition: ease-in-out 0.6s;
}

.pricing-plan-con .pricing-box p {
    margin-bottom: 30px;
}

.pricing-plan-con ul {
    margin-bottom: 30px;
}

.pricing-plan-con ul li {
    padding-left: 30px;
    margin-bottom: 7px;
    color: var(--e-global-color-text);
    font-weight: 500;
}

.pricing-plan-con ul li i {
    color: var(--e-global-color-accent);
    position: absolute;
    left: 0;
    top: 4px;
}

.generic-price span.starting-at {
    font-size: 16px;
    margin-bottom: 10px;
    color: var(--e-global-color-secondary);
    font-weight: 500;
}

.generic-price sup {
    font-size: 24px;
    top: -14px;
    color: var(--e-global-color-accent);
}

.generic-price span.price-text {
    font-size: 54px;
    line-height: 60px;
    color: var(--e-global-color-accent);
    font-weight: 600;
}

.generic-price span.per-month {
    font-size: 24px;
    color: var(--e-global-color-text);
}

.generic-price {
    margin-bottom: 20px;
}

.pricing-box:hover {
    background-color: var(--e-global-color-accent);
}

.pricing-box:hover * {
    color: var(--e-global-color-primary);
}

.pricing-box:hover .generic-price span.price-text,
.pricing-box:hover .generic-price span.per-month,
.pricing-box:hover span.starting-at {
    color: var(--e-global-color-primary);
}

.pricing-box:hover .primary_btn {
    background-color: var(--e-global-color-primary);
    color: var(--e-global-color-secondary);
}

.pricing-box:hover {
    transform: translateY(-5px);
}

/* CTA SECTION */
.call-to-action-con .cta-inner-con {
    background-image: url(../images/call-to-action-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50px;
}

.cta-inner-con h2 {
    margin-bottom: 20px;
}

.cta-inner-con p {
    font-size: 20px;
    color: var(--e-global-color-secondary);
    font-weight: 500;
    margin-bottom: 30px;
}

.cta-inner-con .primary_btn {
    margin-right: 12px;
}

.robot1 {
    left: -45px;
    top: 0;
    bottom: 0;
    margin: auto;
}

.robot2 {
    right: -95px;
    top: 0;
    bottom: 0;
    margin: auto;
}

/* TESTIMONIAL SECTION */
.testimonial-box {
    background-color: var(--e-global-color-primary);
    border-radius: 20px;
    box-shadow: 2px 0px 50px rgb(0 0 0 / 3%);
    border-bottom: 2px solid var(--e-global-color-accent);
    padding: 37px 22px 35px 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.testimonials-con .owl-carousel .owl-item img {
    width: auto !important;
    margin-bottom: 15px;
}

.testimonial-box p {
    font-weight: 500;
    line-height: 25px;
    color: var(--e-global-color-text);
    margin-bottom: 15px;
}

.testimonial-box span.customer {
    font-size: 18px;
    color: var(--e-global-color-secondary);
}

.testimonial-box span.designation {
    color: var(--e-global-color-text);
}

.testimonials-con .owl-stage-outer {
    padding-top: 20px;
}

.testimonials-con .owl-theme .owl-nav.disabled+.owl-dots {
    margin-top: 40px;
}

.testimonials-con .owl-theme .owl-dots .owl-dot span {
    width: 13px !important;
    height: 13px !important;
    background-color: rgb(39 119 252 / 15%);
}

.testimonials-con .owl-theme .owl-dots .owl-dot.active span {
    width: 19px !important;
    height: 19px !important;
    background-color: var(--e-global-color-accent);
    margin-bottom: 2px;
}

.testimonials-con .owl-theme .owl-dots .owl-dot:hover span {
    background-color: var(--e-global-color-accent);
}

.testimonials-con .row::before {
    content: "";
    left: 0;
    top: 0;
    width: 16%;
    height: 100%;
    position: absolute;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7) 100%, transparent 100%);
    z-index: 2;
}

.testimonials-con .row::after {
    content: "";
    right: 0;
    bottom: 0;
    height: 100%;
    width: 16%;
    position: absolute;
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0.7) 100%, transparent 100%);
    z-index: 2;
}

/* SERVICES SECTION */
/* SUB BANNER */
.sub-banner-con {
    background-image: url(../images/sub-banner-bg-img.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 64px;
}

.sub-banner-con h1 {
    margin-bottom: 22px;
}

.sub-banner-con p {
    font-size: 20px;
    line-height: 31px;
    font-weight: 500;
    color: var(--e-global-color-secondary);
    margin-bottom: 30px;
}

.sub-banner-con::before {
    position: absolute;
    content: '';
    background-image: url(../images/faded-elipse2.png);
    background-repeat: no-repeat;
    background-size: cover;
    width: 373px;
    height: 373px;
    top: 51px;
    left: 147px;
}

/* breadcrumb */

.breadcrumb-item+.breadcrumb-item::before,
.breadcrumb-item.active {
    color: var(--e-global-color-accent);
}

.breadcrumb-item {
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
}

.breadcrumb {
    padding: 14.5px 20px;
    min-width: 178px;
    transition: ease-in-out 0.6s;
    justify-content: center;
    background-color: var(--e-global-color-primary);
    border-radius: 10px;

}

.breadcrumb-item a {
    text-decoration: none;
    color: var(--e-global-color-secondary);
}

.breadcrumb-item a:hover {
    color: var(--e-global-color-accent);
}


/* .breadcrumb:hover .breadcrumb-item a,
.breadcrumb:hover .breadcrumb-item.active {
    color: var(--accent--color);
} */

.breadcrumb-item+.breadcrumb-item::before {
    color: var(--e-global-color-secondary);
    content: "/";
    font-family: "Font Awesome 6 Free";
    font-size: 15px;
    padding: 0 13px;
    font-weight: 600;
}

.breadcrumb-item+.breadcrumb-item {
    padding-left: 0;
}

/* .breadcrumb:hover .breadcrumb-item+.breadcrumb-item::before {
    color: var(--accent--color);
} */

/* OUR TEAM SECTION */
.our-team-con figure img {
    border-radius: 20px;
    margin-bottom: 26px;
}

.our-team-con .team-box span {
    font-size: 16px;
    color: var(--e-global-color-text);
    font-weight: 500;
    margin-bottom: 20px;
}

.our-team-con .team-box .social-icons li {
    margin: 0 4px;
    display: inline-block;
    transition: all 0.6s ease-in-out;
}

.our-team-con .team-box .social-icons a {
    margin-left: 0 !important;
}

.our-team-con .team-box .social-icons i {
    font-size: 18px;
    color: var(--e-global-color-primary);
    transition: all 0.6s ease-in-out;
    background-color: var(--e-global-color-accent);
    width: 38px;
    height: 38px;
    line-height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}

.our-team-con .team-box .social-icons i:hover {
    transform: translateY(-5px);
    color: var(--e-global-color-primary);
    background-color: var(--e-global-color-secondary);
}

.our-team-con .team-box .social-icons li:first-child {
    margin-left: 0;
}

.our-team-con .team-box .social-icons li:last-child {
    margin-right: 0;
}

.our-team-con .team-box {
    transition: ease-in-out 0.6s;
    border-radius: 20px;
    padding-bottom: 20px;
}

.our-team-con .team-box:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.our-team-con .col-lg-3 {
    margin-bottom: 60px;
}

.our-team-con .col-lg-3:nth-last-of-type(-n+4) {
    margin-bottom: 20px;
}

/* PRIVACY POLICY PAGE */
.privacy-policy-content-con h2 {
    margin-bottom: 25px;
}

.privacy-policy-content-con h4 {
    margin-bottom: 18px;
}

.privacy-policy-content-con p {
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 26px;
}

/* ABOUT US PAGE */
.about-us-con .about-us-img-con img {
    border-radius: 40px;
    transition: ease-in-out 0.6s;
}

.about-us-con .about-us-img-con img:hover {
    transform: translateY(-6px);
}

.about-us-con .about-us-img-con .abt-img2 {
    padding-left: 30px;
    padding-top: 50px;
}

.about-us-con .about-us-content-con {
    padding-left: 25px;
}

.about-us-con .about-us-content-con p,
.statistics-con .statistics-content-con p {
    font-size: 18px;
    line-height: 30px;
    padding-right: 10%;
}

.about-us-con .about-us-content-con h2,
.statistics-con .statistics-content-con h2 {
    margin-bottom: 18px;
}

.about-us-con .about-us-content-con ul {
    margin-bottom: 32px;
}

.about-us-con .about-us-content-con ul li {
    font-size: 16px;
    font-weight: 500;
    color: var(--e-global-color-text);
    line-height: 24px;
    padding-left: 30px;
    margin-bottom: 8px;
}

.about-us-con .about-us-content-con ul li i {
    color: var(--e-global-color-accent);
    position: absolute;
    left: 0;
    top: 4px;
    font-size: 14px;
}

.about-us-con .about-us-content-con p.prgrph-2 {
    margin-bottom: 22px;
}

.about-us-con .primary_btn:hover,
.statistics-con .statistics-content-con .primary_btn:hover {
    background-color: var(--e-global-color-secondary);
    color: var(--e-global-color-primary);
}

/* STATISTICS SECTION */
.statistics-con {
    background-image: url(../images/statistics-bg-img.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}

.heading-title-con h2 {
    margin-bottom: 18px;
}

.statistics-con .statistics-content-con p {
    margin-bottom: 35px;
}

.statistics-con .statistics-box {
    background-color: var(--e-global-color-primary);
    border-radius: 20px;
    box-shadow: 2px 0px 50px rgb(0 0 0 / 3%);
    border-bottom: 2px solid var(--e-global-color-accent);
    padding: 30px 30px 29px;
    text-align: center;
}

.statistics-con .statistics-outer-con {
    padding-left: 10%;
}

.statistics-con .statistics-box span {
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 10px;
    font-weight: 600;
}

.statistics-con .statistics-box sup {
    font-size: 36px;
    font-weight: 600;
    top: unset;
}

.statistics-con .statistics-box span.span-text {
    font-size: 16px;
    line-height: 16px;
    color: var(--e-global-color-text);
    margin-bottom: 0;
    font-weight: 500;
}

.statistics-con .statistics-box img {
    margin-bottom: 19px;
}

.statistics-outer-con .col-lg-6.col-md-6 {
    margin-bottom: 30px;
}

.statistics-outer-con .col-lg-6.col-md-6:nth-last-of-type(-n+2) {
    margin-bottom: 0;
}

/* PRICING PAGE */
.pricing-plan-con.main-pricing-con {
    background-image: unset;
}

.pricing-plan-con.main-pricing-con .pricing-box {
    box-shadow: 2px 0px 50px rgb(0 0 0 / 3%);
    border-bottom: 2px solid var(--e-global-color-accent);
}

/* .animate__animated {
    --animate-duration: 0.1s;
} */

/* contact page */
.contact-info-box {
    background-color: var(--e-global-color-primary);
    border-radius: 20px;
    box-shadow: 2px 0px 50px rgb(0 0 0 / 3%);
    border-bottom: 2px solid var(--e-global-color-accent);
    padding: 36px 30px 40px 30px;
    transition: ease-in-out 0.6s;
}

.contact-info-con .contact-info-box:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1)
}

.contact-info-con .contact-info-box img {
    margin-bottom: 17px;
}

.contact-info-con .contact-info-box h6 {
    margin-bottom: 13px;
}

.contact-info-con .contact-info-box a {
    color: var(--e-global-color-text);
    font-weight: 500;
}

.contact-info-con .contact-info-box a:hover {
    color: var(--e-global-color-accent);
}

/*  */
.contact-form-con {
    background-image: url(../images/get-in-touch-bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}

/* map section */
.contact-map-con iframe {
    height: 546px;
    width: 100%;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    margin-bottom: -8px;
    pointer-events: none;
    border-radius: 25px;
    border: none;
}

.contact-map-con iframe:hover {
    filter: none;
}

/*  */

.contact-form-con #contactpage span.error {
    font-size: 14px;
    line-height: 20px;
    margin-top: 10px;
    display: block;
    padding-left: 14px;
    color: var(--e-global-color-accent);
    text-align: left;
}

.contact-form-con form ul li {
    float: left;
    width: 31.6%;
    margin-right: 28px;
    margin-bottom: 30px;
}

.contact-form-con form ul li:nth-child(3) {
    margin-right: 0;
}

.contact-form-con form ul li input {
    width: 100%;
    padding: 11px 19px;
    background-color: var(--e-global-color-primary);
    height: 60px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    color: var(--e-global-color-secondary);
    border-radius: 12px;
    box-shadow: 2px 0px 50px rgb(0 0 0 / 3%);
}

.contact-form-con form ul li input::placeholder,
.contact-form-con form ul li textarea::placeholder {
    color: var(--e-global-color-text);
}

.contact-form-con form ul li:last-child {
    width: 100%;
}

.contact-form-con form ul li textarea {
    height: 137px;
    padding: 11px 19px;
    background-color: var(--e-global-color-primary);
    border: none;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    color: var(--e-global-color-secondary);
    float: left;
    /* border: 2px solid transparent; */
    border-radius: 12px;
    box-shadow: 2px 0px 50px rgb(0 0 0 / 3%);
}

.contact-form-con form ul li textarea::placeholder {
    color: var(--e-global-color-text);
}

.contact-form-con form ul li:last-child {
    width: 100%;
    margin-right: 0;
    margin-bottom: 45px;
}

.contact-form-con form ul li input:focus-visible,
.contact-form-con form ul li textarea:focus-visible {
    border: none;
    outline: none;

}

.contact-form-con form ul li input:focus,
.contact-form-con form ul li textarea:focus {
    /* background-color: var(--primary-color); */
    border: 1px solid var(--e-global-color-accent);
    box-shadow: 0 1px 8px rgb(39 119 2552 / 15%);
}

button.primary_btn {
    border: none;
    box-shadow: none;
}

button.primary_btn:hover {
    background-color: var(--e-global-color-secondary);
    color: var(--e-global-color-primary);
}

.testimonials-con .owl-carousel .owl-stage {
    display: flex;
}

.animated-robot,
.animated-robot:hover {
    transition: ease-in-out 0.6s;
}

.animated-robot:hover {
    transform: translateY(-3px);
}

`
}

      </style>



    {/* <!-- Back to top button --> */}
    <a id="button"></a>
    {/* <!-- HEADER SECTION --> */}
    <header class="w-100 float-left header-con position-relative main-box">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="index.html">
                    <figure class="mb-0">
                        <img src="assets/images/logo.png" alt="logo-icon"/>
                    </figure>
                </a>
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">

                        <li class="nav-item">
                            <a class="nav-link p-0 active" href="index.html">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link p-0" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="services.html">Services</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle p-0" href="blog.html" id="navbarDropdown4" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown4">
                                <a class="dropdown-item" href="blog.html">Blog</a>
                                <a class="dropdown-item" href="load-more.html">Load More</a>
                                <a class="dropdown-item" href="single-blog.html">Single Blog</a>
                                <a class="dropdown-item" href="one-column.html">One Column</a>
                                <a class="dropdown-item" href="two-column.html">Two Column</a>
                                <a class="dropdown-item" href="three-column.html">Three Column</a>
                                <a class="dropdown-item" href="three-colum-sidbar.html">Three Column Sidbar</a>
                                <a class="dropdown-item" href="four-column.html">Four Column</a>
                                <a class="dropdown-item" href="six-colum-full-wide.html">Six Column</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle p-0" href="#" id="navbarDropdown5" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown5">
                                <a class="dropdown-item" href="about.html">About</a>
                                <a class="dropdown-item" href="contact.html">Contact</a>
                                <a class="dropdown-item" href="services.html">Services</a>
                                <a class="dropdown-item" href="faq.html">Faq's</a>
                                <a class="dropdown-item" href="pricing.html">Pricing</a>
                                <a class="dropdown-item" href="team.html">Team</a>
                                <a class="dropdown-item" href="404.html">404</a>
                                <a class="dropdown-item" href="coming-soon.html">Coming Soon</a>
                                <a class="dropdown-item" href="testimonials.html">Testimonial</a>
                                <a class="dropdown-item" href="privacy-policy.html">Privacy Policy</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-0" href="pricing.html">Pricing</a>
                        </li>
                        <li class="nav-item free-trial"><a class="nav-link font-weight-700" href="contact.html">Try
                                Free
                                Trial</a></li>
                    </ul>

                    {/* <!-- navbar collapse --> */}
                </div>
                <div class="header-contact">
                    <ul class="list-unstyled mb-0">
                        <li class="d-inline-block"><a href="contact.html" class="contact-btn d-inline-block">Contact
                                Us</a></li>
                        {/* <!-- list unstyled --> */}
                    </ul>
                    {/* <!-- header contact --> */}
                </div>
            </nav>
            {/* <!-- container --> */}
        </div>
        {/* <!-- header-con --> */}
    </header>
    {/* <!--  --> */}
    {/* <!-- BANNER SECTION --> */}
    <section class="float-left w-100 banner-con position-relative main-box">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-7">
                    <div class="banner-content-con">
                        <ul class="list-unstyled p-0">
                            <li class="position-relative d-inline-block"><i class="fa-solid fa-circle-check"></i>Free
                                14-day
                                trial</li>
                            <li class="position-relative d-inline-block"><i class="fa-solid fa-circle-check"></i>No
                                credit card
                                required</li>
                        </ul>
                        <h1>Boost Conversations <br/>
                            with Our Intelligent <br/>
                            <span class="d-inline-block font-weight-bold color-blue">Chatbot</span> Platform</h1>
                        <p>Build human-like AI chatbots for websites, apps, and customer service in minutes.</p>
                        <a href="about.html" class="text-decoration-none primary_btn d-inline-block">Get
                            Started</a>
                        <a href="contact.html" class="text-decoration-none secondary_btn d-inline-block">Live Demo</a>
                        {/* <!-- banner content con --> */}
                    </div>
                    {/* <!-- col --> */}
                </div>
                <div class="col-lg-5 col-md-5">
                    <div class="banner-img-con position-relative">
                        <figure><img src="assets/images/banner-robot.png" alt="robot" class="animated-robot"/></figure>
                        <div class="coment-box1 d-flex align-items-center popup-bubble popup-delay-1">
                            <img src="assets/images/coment-box-icon1.png" alt="icon" class="img-fluid"/>
                            <p class="typing mb-0" id="text1"></p>
                            {/* <!-- coment box1 --> */}
                        </div>
                        <div class="coment-box2 d-flex align-items-center popup-bubble popup-delay-2">
                            <img src="assets/images/coment-box-icon2.png" alt="icon" class="img-fluid"/>
                            <p class="typing mb-0" id="text2"></p>
                            {/* <!-- coment box1 --> */}
                        </div>
                        {/* <!-- banner img con --> */}
                    </div>
                    {/* <!-- col --> */}
                </div>
            </div>
            <div class="down_button text-center d-inline-block">
                <a href="#client" class="scroll text-decoration-none">
                    <figure class="banner-dropdownimage mb-0 d-inline-block">
                        <img src="assets/images/banner-dropdownimage.png" class="img-fluid" alt="image"/>
                    </figure>
                </a>
            </div>
        </div>
    </section>

    {/* <!-- CLIENT'S LOGO SECTION --> */}
    <div class="float-left w-100 client-logo-con position-relative main-box" id="client">
        <div class="container wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
            <div class="client-logo-inner d-flex align-items-center justify-content-between">
                <p class="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">Trusted by <br/>
                    10,000+ Businesses Globally:</p>
                <div class="logos-con d-flex align-items-center justify-content-between wow fadeIn"
                    data-wow-duration="2s" data-wow-delay="0.2s">
                    <figure><img src="assets/images/client-logo1.png" alt="shopify" class="img-fluid wow fadeInRight"
                            data-wow-duration="2s" data-wow-delay="0.6s"/></figure>
                    <figure><img src="assets/images/client-logo2.png" alt="slack" class="img-fluid wow fadeInRight"
                            data-wow-duration="2s" data-wow-delay="1.0s"/></figure>
                    <figure><img src="assets/images/client-logo3.png" alt="zendesk" class="img-fluid wow fadeInRight"
                            data-wow-duration="2s" data-wow-delay="1.4s"/></figure>
                    <figure><img src="assets/images/client-logo4.png" alt="discord" class="img-fluid wow fadeInRight"
                            data-wow-duration="2s" data-wow-delay="1.8s"/></figure>
                    <figure><img src="assets/images/client-logo5.png" alt="telegram" class="img-fluid wow fadeInRight"
                            data-wow-duration="2s" data-wow-delay="2.2s"/></figure>
                </div>
                {/* <!-- client logo inner --> */}
            </div>
            {/* <!-- container --> */}
        </div>
        {/* <!-- client logo --> */}
    </div>
    {/* <!-- AMAZING FEATURES SECTION --> */}
    <section class="float-left w-100 amazing-features-con position-relative padding-top padding-bottom main-box">
        <div class="container wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
            <div class="heading-title-con text-center">
                <span class="special-text color-blue d-block wow fadeInLeft" data-wow-duration="2s"
                    data-wow-delay="0.2s">Amazing Features</span>
                <h2 class="wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">AI That Understands, Learns
                    <br/>
                    & Engages</h2>
                {/* <!-- heading title con --> */}
            </div>
            <div class="row all_row wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                <div class="col-lg-4 col-md-6 all_column wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.5s">
                    <div class="feature-box position-relative all_boxes">
                        <h4>Conversational AI</h4>
                        <p class="mb-0">Respond intelligently with GPT-powered
                            natural language understanding.</p>
                        <img src="assets/images/feature-img1-icon1.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon1  wow fadeInUp" data-wow-duration="2s"
                            data-wow-delay="0.6s"/>

                        <figure><img src="assets/images/feature-img1.png" alt="feature image"
                                class="img-fluid  wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.7s"/>
                        </figure>
                        <a href="services.html"><img src="assets/images/up-right-arrow.png" alt="arrow"
                                class="img-fluid"/></a>
                        {/* <!-- feature box --> */}
                    </div>
                    {/* <!-- col --> */}
                </div>
                <div class="col-lg-4 col-md-6 all_column wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                    <div class="feature-box position-relative all_boxes bg-green">
                        <h4>Multi-Platform</h4>
                        <p class="mb-0">Integrate with websites, apps, Facebook, <br/>
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
                        <a href="services.html"><img src="assets/images/up-right-arrow.png" alt="arrow"
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
                        <img src="assets/images/feature-img3-icon1.png" alt="feature image"
                            class="img-fluid position-absolute feature-icon6 wow fadeInUp" data-wow-duration="2s"
                            data-wow-delay="0.6s"/>
                        <img src="assets/images/elipse-blue.png" alt="feature image"
                            class="img-fluid position-absolute blue-elipse wow fadeInDown" data-wow-duration="2s"
                            data-wow-delay="0.7s"/>
                        <figure><img src="assets/images/feature-img3.png" alt="feature image"
                                class="img-fluid feature-img3 wow fadeIn/" data-wow-duration="2s" data-wow-delay="0.8s"/>
                        </figure>
                        <a href="services.html"><img src="assets/images/up-right-arrow.png" alt="arrow"
                                class="img-fluid"/></a>
                        {/* <!-- feature box --> */}
                    </div>
                    {/* <!-- col --> */}
                </div>
                {/* <!-- row --> */}
            </div>
            {/* <!-- container --> */}
        </div>
    </section>

    {/* <!-- HOW IT WORKS SECTION --> */}
    <section class="float-left w-100 position-relative main-box how-it-works-con padding-top padding-bottom">
        <figure><img src="assets/images/vector3.png" alt="vector"
                class="img-fluid position-absolute vector3 animated-plane"/></figure>
        <div class="container wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
            <div class="row all_row">
                <div class="col-lg-7 col-md-12 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.4s">
                    <div class="work-img-con position-relative">
                        <figure><img src="assets/images/work-img.png" alt="image" class="img-fluid"/></figure>
                        <figure><img src="assets/images/robot.png" alt="robot"
                                class="img-fluid position-absolute robot-img animated-robot"/>
                        </figure>
                    </div>
                    {/* <!-- col --> */}
                </div>
                <div class="col-lg-5 col-md-12 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                    <div class="work-content-con">
                        <div class="heading-title-con">
                            <span class="special-text color-blue d-block wow fadeInLeft" data-wow-duration="2s"
                                data-wow-delay="0.5s">How it Works</span>
                            <h2 class="wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.6s">How Our Advanced
                                <br/>
                                AI Chatbot Works</h2>
                            {/* <!-- heading title con --> */}
                        </div>
                        <ul class="list-unstyled p-0">
                            <li class="position-relative d-flex align-items-center">
                                <span class="d-block color-blue">01</span>
                                <div class="work-content-inner-con">
                                    <h5>Build with Ease</h5>
                                    <p class="mb-0">Build your chatbot using our intuitive drag-and-drop <br/>
                                        interface — no coding needed.</p>
                                    {/* <!-- work content inner con --> */}
                                </div>
                            </li>
                            <li class="position-relative d-flex align-items-center">
                                <span class="d-block color-blue">02</span>
                                <div class="work-content-inner-con">
                                    <h5>Train with Your Content</h5>
                                    <p class="mb-0">Train your AI using documents, FAQs, or URLs to create <br/>
                                        accurate, personalized responses.</p>
                                    {/* <!-- work content inner con --> */}
                                </div>
                            </li>
                            <li class="position-relative d-flex align-items-center">
                                <span class="d-block color-blue">03</span>
                                <div class="work-content-inner-con">
                                    <h5>Deploy Anywhere</h5>
                                    <p class="mb-0">Launch on your website, mobile app, or messaging <br/>
                                        platforms in just a few clicks.</p>
                                    {/* <!-- work content inner con --> */}
                                </div>
                            </li>
                        </ul>
                        <a href="about.html" class="text-decoration-none primary_btn d-inline-block">Get
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
            <div class="choose-outer-con wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.5s">
                <div class="choose-box">
                    <figure><img src="assets/images/choose-icon1.png" alt="icon" class="img-fluid"/></figure>
                    <h6>Tailored Solutions</h6>
                    <p class="mb-0">We offer customized
                        services designed to meet
                        the specific needs...</p>
                    {/* <!-- choose box --> */}
                </div>
                <div class="choose-box">
                    <figure><img src="assets/images/choose-icon2.png" alt="icon" class="img-fluid"/></figure>
                    <h6>Customer Support</h6>
                    <p class="mb-0">Our dedicated support
                        team is available 24/7,
                        providing assistance...</p>
                    {/* <!-- choose box --> */}
                </div>
                <div class="choose-box">
                    <figure><img src="assets/images/choose-icon3.png" alt="icon" class="img-fluid"/></figure>
                    <h6>Affordable Pricing</h6>
                    <p class="mb-0">Competitive rates with
                        transparent pricing—no
                        hidden fees...
                    </p>
                    {/* <!-- choose box --> */}
                </div>
                <div class="choose-box">
                    <figure><img src="assets/images/choose-icon4.png" alt="icon" class="img-fluid"/></figure>
                    <h6>Scalable Solutions</h6>
                    <p class="mb-0">Our services grow with
                        your business, allowing
                        you to scale up...</p>
                    {/* <!-- choose box --> */}
                </div>
                <div class="choose-box">
                    <figure><img src="assets/images/choose-icon5.png" alt="icon" class="img-fluid"/></figure>
                    <h6>Expert Team</h6>
                    <p class="mb-0">Our experienced
                        professionals bring deep
                        industry knowledge...</p>
                    {/* <!-- choose box --> */}
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

 

    {/* <!-- CALL TO ACTION --> */}
    <section class="float-left w-100 position-relative call-to-action-con main-box padding-bottom">
        <div class="container wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
            <div class="cta-inner-con padding-top100 padding-bottom100 position-relative">
                <figure><img src="assets/images/robot1.png" alt="vector"
                        class="img-fluid position-absolute robot1 animated-robot"/></figure>
                <figure><img src="assets/images/robot2.png" alt="vector"
                        class="img-fluid position-absolute robot2 animated-robot"/></figure>
                <div class="heading-title-con text-center mb-0">
                    <span class="special-text color-blue d-block wow fadeInLeft" data-wow-duration="2s"
                        data-wow-delay="0.2s">Experience Boost</span>
                    <h2 class="wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">Ready to Supercharge
                        <br/>
                        Your Customer Experience?</h2>
                    <p class="wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.5s">Start using our AI chatbot
                        today to automate support, boost engagement, and save time.</p>
                    <a href="about.html" class="text-decoration-none primary_btn d-inline-block wow fadeInLeft"
                        data-wow-duration="2s" data-wow-delay="0.6s">Get
                        Started</a>
                    <a href="contact.html" class="text-decoration-none secondary_btn d-inline-block wow fadeInRight"
                        data-wow-duration="2s" data-wow-delay="0.7s">Live Demo</a>
                    {/* <!-- heading title con --> */}
                </div>
                {/* <!-- cta inner con --> */}
            </div>
            {/* <!-- container --> */}
        </div>
    </section>

    {/* <!-- FOOTER SECTION --> */}
    <section class="footer-con position-relative float-left w-100 main-box">
        <div class="container">
            <div class="middle_portion">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <div class="logo-content">
                            <a href="index.html">
                                <figure class="footer-logo">
                                    <img src="assets/images/footer-logo.png" alt="image" class="img-fluid"/>
                                </figure>
                            </a>
                            <p class="text-size-16 text">We create intelligent, scalable AI solutions that help
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
                            <h4 class="heading">Navigation</h4>
                            <ul class="list-unstyled mb-0">
                                <li><i class="fa-solid fa-arrow-right"></i><a href="about.html"
                                        class="text-decoration-none">About</a></li>
                                <li><i class="fa-solid fa-arrow-right"></i><a href="services.html"
                                        class="text-decoration-none">Services</a></li>
                                <li><i class="fa-solid fa-arrow-right"></i><a href="faq.html"
                                        class="text-decoration-none">Faq</a></li>
                                <li><i class="fa-solid fa-arrow-right"></i><a href="pricing.html"
                                        class="text-decoration-none">Pricing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-7">
                        <div class="icon">
                            <h4 class="heading">Contact Info</h4>
                            <ul class="list-unstyled mb-0">
                                <li class="text">
                                    <i class="fa-solid fa-phone-volume"></i>
                                    <a href="tel:++61383766284" class="text-decoration-none">+61 3 8376 6284</a>
                                </li>
                                <li class="text">
                                    <i class="fa-solid fa-envelope"></i>
                                    <a href="mailto:info@chatnex.com" class="text-decoration-none">info@chatnex.com</a>
                                </li>
                                <li class="text">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.332688122342!2d144.96016967662732!3d-37.805675733576976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642cce121b239%3A0xa42b424ded3a529a!2s551%20Swanston%20St%2C%20Carlton%20VIC%203053%2C%20Australia!5e0!3m2!1sen!2s!4v1747807044579!5m2!1sen!2s"
                                        class="text-decoration-none address mb-0">551 Swanston Street, Melbourne
                                        Victoria 3053 Australia
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                        <div class="email-form">
                            <h4 class="heading">Newsletter Signup</h4>

                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <p class="mb-0">Copyright © 2025 Aivio. All Rights Reserved.</p>
            </div>
        </div>
    </section>

    {/* <!-- PRE LOADER --> */}
    <div class="loader-mask">
        <div class="loader">
            <div></div>
            <div></div>
        </div>
    </div>
</div>
)

}
export default Coverpage;
