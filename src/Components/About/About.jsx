import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons'
import AboutImage from '../../assets/about/about_img.jpg';

function About() {
    /*Icons */
    const faBusinessTimeIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
    const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
    const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />
    const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone } />
    

  return (
    <>
      <section id="about">
        <div className="container">
            <div className="title_heading">
                <h3>We Provide Shortage Remarkable Ideas?</h3>
                <p>today's fast-paced and dynamic world, ideas are abundant and innovation is everywhere. We are constantly surrounded by brilliant concepts</p>
            </div>
            <div className="about_box_wrapper">
                <div className="about_box">
                   <div className="about_icon">
                       {faBusinessTimeIcon}
                   </div>
                   <div className="about_content">
                    <h5>Devlopment</h5>
                    <p>Business development is the creation of long-term value for an organization from customers, markets, and relationships.</p>
                   </div>
                </div>
                <div className="about_box">
                   <div className="about_icon green_icon">
                       {faChartPieIcon}
                   </div>
                   <div className="about_content">
                    <h5>Integration</h5>
                    <p>In mathematics, an integral is the continuous analog of a sum, which is used to calculate areas, volumes, and their generalizations.</p>
                   </div>
                </div>

                <div className="about_box">
                   <div className="about_icon blue_icon">
                       {faTruckFastIcon}
                   </div>
                   <div className="about_content">
                    <h5>Branding</h5>
                    <p>A brand is a name, term, design, symbol or any other feature that distinguishes one seller's good or service from those of other sellers.</p>
                   </div>
                </div>
            </div>

            <div className="about_box_details">
              <div className="about_col">
                <div className="about_image">
                  <img src={AboutImage} alt="about_image"/>
                </div>
                <div className="img_info_box">
                  <h6 className="img_info_title"> Get A Price Quote Today!</h6>
                  <p> A price quote delivers a fixed price for a product or service. <br/>It is given to a client or customer</p>
                  <a href="/">{faPhoneIcon} <span>011-800-654-3210</span></a>
                </div>
              </div>
               <div className="about_col more_space">
                <h3>We have Business Skills That Will Increase Your Earnings</h3>
                <p>Do you wonder how to dramatically increase your earnings? Acquire essential financial skills, like: budgeting, risk management and tax planning.</p>

                 
                 <div className="grid_info">
                  <div className="icon">{faUserClockIcon}</div>
                  <div className="detail">
                    <h4>Start Your Own Business In Minutes</h4>
                    <p>Our step-by-step guide with examples from real business owners walks you through every step you need to take to start a business </p>
                  </div>
                 </div>


   
                 <div className="grid_info">
                  <div className="icon green_icon">{faHouseLaptopIcon}</div>
                  <div className="detail">
                    <h4>Open A Business Account Online</h4>
                    <p>Open Current Account online at Bank of Baroda to meet all your banking needs. Go to our website to learn more about the different types of current accounts </p>
                  </div>
                 </div>

               </div>

            </div>
        </div>
      </section>
    </>
  )
}

export default About;
