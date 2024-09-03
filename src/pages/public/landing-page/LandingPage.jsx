import React, { useState } from "react";
import "./landingpage.css";
import Navbar from "../../../components/navbar/Navbar";


import AccordionList from "../../../components/accordion/Accordion";
import Footer from "../../../components/footer/Footer";
// import { Link } from "react-router-dom";
// icon //
import { IoIosArrowForward } from "react-icons/io";

// video
import video from "../../../assets/video/tvVideo1.m4v";
  import videoOne from"../../../assets/video/tvVideo2.m4v"

// img
import imgone from "../../../assets/tv.png";
import imgtwo from "../../../assets/strangeThings.jpg"
import imgthree  from "../../../assets/tvImg2.png"
import imgfour from "../../../assets/children.png"
import Button from "../../../components/button/Button";
import Heading from "../../../components/heading/Heading";
import Input from "../../../components/input/Input";
import Content from "../../../components/heading/Content"
import Banner from "../../../components/banner/Banner";






const LandingPage = () => {
  const[email,setEmail]=useState("")
  console.log(email);
  return (
    <div className="container">
      <div className="main-continer">
        <Navbar/>

        <div className="main-title">
                    <Heading
                        size="bold"
                        color="white"
                        title="Unlimited movies, TV shows and more"
                    />
                    <Content color="white" content="Watch anywhere. Cancel anytime." />
                    <Content
                        color="white"
                        content="Ready to watch? Enter your email to create or restart your membership."
                    />

                    <div className="content-box">
                        <Input
                            bg="bg-transparent"
                            label="Email Address"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <Button
                            size="large"
                            rounded="rounded"
                            color="white"
                            bg="bg-2"
                            iconProp="rightarrow"
                            icon={<IoIosArrowForward />}
                            value="Get Started"
                        />
                    </div>
                </div>
     

      </div>
{/* banner */}
       <article className='total-banner-container'>
          <Banner
           head={"Enjoy on your TV"}
           para={"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."}
           img={imgone}
           video={video}
           image="image"
            videopng="videopng"
          />
             <Banner
             img={imgtwo}  
             head={"Download your shows to watch offline"} 
             para={"Save your favourites easily and always have something to watch."}
             direction={"row-reverse"} 
             image="image"
          />
           <Banner 
            head={"Watch everywhere"}
            para={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."}
            img={imgthree}
            video={videoOne}
            image="image3"
            videopng="videopng2"
            />
        
             <Banner
             img={imgfour}  
             head={"Create profiles for kids"} 
             para={"Send children on adventures with their favourite characters in a space made just for them—free with your membership."}
             direction={"row-reverse"} 
             image="image"
          />
          </article>

  
      {/* accordion */}
      <div className="accordion-container">
        <Heading
        color="white"
        size="heading-accordion"
          content="Frequently Asked Questions"
        />
        <AccordionList/>
        <Content
         color="white"
         size="accordion-size"
         content="Ready to watch? Enter your
          email to create or restart your membership."
        />
        <div className="content-box">
                    <Input
                        bg="bg-transparent"
                        label="Email Address"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Button
                        size="large"
                        rounded="rounded"
                        color="white"
                        bg="bg-2"
                        iconProp="rightarrow"
                        icon={<IoIosArrowForward />}
                        value="Get Started"
                    />
                </div>
      </div>
        <Footer
       />
    </div>
  );
};

export default LandingPage;