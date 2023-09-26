import React, {useState} from 'react';
import Logo from '../../assets/logo/logo.png';
import  '../../Components/Navbar/Navbar.css';
import {Link} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';


function Navbar() {
   /**Mobile Menu state*/
   const [sideNav, setSideNav] = useState(false);

    /*Desktop Fixed Menu */
    const[stickyState, setSticky] = useState(false);

   /*Mobile Icon */
    const menuIcon = <FontAwesomeIcon icon={faBars} />

   /*sideNav */
     const sideNavShow = () => {
      setSideNav(!sideNav);
     }
  
     /**scroll Fixed Navbar */
     useEffect(() => {
      const handlerScroll = () => {
        setSticky(window.scrollY > 20);
      }
        window.addEventListener("scroll", handlerScroll);
        return () => window.removeEventListener("scroll", handlerScroll);
     })

  return (
    <>
    <header id="site_header" className={`${stickyState ? "sticky" : ''}`}>
        <div className="container">
            <div className="navbar" id="Navbar">
               <div className="navbar_brand">
                <a href="/">
                    <img src={Logo} alt="logo" />
                </a>

               </div>

               <div className="navbar_toggler" onClick={sideNavShow}>
                  {menuIcon}

               </div>
               <div className={`menu_Items ${sideNav === true  ? 'active' : ''}`}>
                  <ul>
                    <li>
                    <Link activeClass="active" to="home" spy={true} smooth={true} >
                      Home
                    </Link>  
                    </li>

                    <li>
                    <Link to="about" spy={true} smooth={true} >
                      About Us
                    </Link>  
                    </li>

                    <li>
                    <Link to="services" spy={true} smooth={true} >
                      Services
                    </Link>  
                    </li>

                    <li>
                    <Link to="blog" spy={true} smooth={true} >
                      Blog
                    </Link>  
                    </li>

                    <li>
                    <Link to="contact" spy={true} smooth={true} >
                      Contact Us
                    </Link>  
                    </li>
                  </ul>
               </div>
            </div>

        </div>

    </header>
    
    </>
  )
}

export default Navbar;
