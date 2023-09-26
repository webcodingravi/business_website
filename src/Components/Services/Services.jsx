import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faChartBar, faCopy, faMarker, faUserGear, faCoins} from '@fortawesome/free-solid-svg-icons'

function Services() {
     /*Icons */
     const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />
     const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />
     const faCopyIcon = <FontAwesomeIcon icon={faCopy} />
     const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />
     const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />
     const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />
  return (
    <>
      <div id="services">
        <div className="container">
            <div className="title_heading">
                <h3>What's Services We Are offering to Our Customers</h3>
                <p>Customer service is the support you offer your customers from the moment they first contact your business to the months and years afterward</p>
            </div>
            <div className="service_wrapper">
                <div className="service_box">
                    <div className="service_icon blue_icon">
                       {faLaptopCodeIcon}
                    </div>
                    <h4 className="number">01</h4>
                    <div className="service_content">
                        <h5>Cloud Computing</h5>
                        <p>Cloud computing is on-demand access, via the internet, to computing resources—applications, servers physical servers and virtual servers, data storage</p>
                        <a href="/" className="read">Read More</a>
                    </div>
                </div>

                <div className="service_box">
                    <div className="service_icon">
                       {faChartBarIcon}
                    </div>
                    <h4 className="number">02</h4>
                    <div className="service_content">
                        <h5>Business Strategy</h5>
                        <p>To craft a successful business strategy, it's necessary to obtain a thorough understanding of value creation. In the online course Business Strategy</p>
                        <a href="/" className="read">Read More</a>
                    </div>
                </div>


                <div className="service_box">
                    <div className="service_icon green_icon">
                       {faCopyIcon}
                    </div>
                    <h4 className="number">03</h4>
                    <div className="service_content">
                        <h5>Report Analysis</h5>
                        <p>An analysis report is an essential business report displaying analysis results and feasible suggestions, and providing valuable information</p>
                        <a href="/" className="read">Read More</a>
                    </div>
                </div>

                <div className="service_box">
                    <div className="service_icon">
                       {faMarkerIcon}
                    </div>
                    <h4 className="number">04</h4>
                    <div className="service_content">
                        <h5>Decision Maker</h5>
                        <p>A decision maker is the person or group of individuals who is responsible for making strategically important decisions based on a number of variables,</p>
                        <a href="/" className="read">Read More</a>
                    </div>
                </div>

                <div className="service_box">
                    <div className="service_icon green_icon">
                       {faUserGearIcon}
                    </div>
                    <h4 className="number">05</h4>
                    <div className="service_content">
                        <h5>Customer Oriented</h5>
                        <p>Customer involvement management, CIM, is a marketing management method that takes customer orientation further than</p>
                        <a href="/" className="read">Read More</a>
                    </div>
                </div>

                <div className="service_box">
                    <div className="service_icon blue_icon">
                       {faCoinsIcon}
                    </div>
                    <h4 className="number">06</h4>
                    <div className="service_content">
                        <h5>Solution Focused</h5>
                        <p>Solution-focused practice concentrates on helping people move towards the future that they want and to learn what can be done</p>
                        <a href="/" className="read">Read More</a>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default Services;
