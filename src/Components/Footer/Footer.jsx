import React, { useEffect, useState } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'


function Footer() {
    const [isVisible, setVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const listenToScroll = () => {
        let heightToHidden = 250;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        (windowScroll > heightToHidden) ? setVisible(true) : setVisible(false);
    }


    useEffect(()=> {
        window.addEventListener("scroll", listenToScroll);
    })

    const yearDate = new Date().getFullYear();
     /*Icons */
     const faArrowUpIcon = <FontAwesomeIcon icon={faArrowUp} />
   
  return (
    <>
     <section className="container">
        <footer className="footer">
           <p>© All Right Reserved {yearDate} Designed By <a href="/">Rkdesigner</a></p> 
        </footer>
        </section> 

        {/* /***scroll to up */}

          {
            isVisible && (
                <div className="scroll-Top" onClick={scrollToTop}>
                {faArrowUpIcon}
            </div>
            )
          }
      
    </>
  )
}

export default Footer;
