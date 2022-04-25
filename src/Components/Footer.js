import { styles } from "dom7";
import React, {useState} from "react";
import './main.css'




function Footer() {
    
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <footer>
        <p className="copyR">Copyright &copy; 2021, Cohort 9</p>
        <div className="socialGroup">
          <a
            className="social"
            href="www.twitter.com"
            target="_blank"
            aria-label="Twitter"
          >
            <span className="fa-stack fa-1x sizeup">
              <i className="fa fa-circle-thin fa-stack-2x"></i>
              <i className="fa fa-twitter fa-stack-1x"></i>
            </span>
          </a>

          <a
            className="social"
            href="www.facebook.com"
            target="_blank"
            aria-label="Facebook"
          >
            <span className="fa-stack fa-1x sizeup">
              <i className="fa fa-circle-thin fa-stack-2x"></i>
              <i className="fa fa-facebook fa-stack-1x"></i>
            </span>
          </a>

          <a
            className="social"
            href="www.instagram.com"
            target="_blank"
            aria-label="Instagram"
          >
            <span className="fa-stack fa-1x sizeup">
              <i className="fa fa-circle-thin fa-stack-2x"></i>
              <i className="fa fa-instagram fa-stack-1x"></i>
            </span>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
