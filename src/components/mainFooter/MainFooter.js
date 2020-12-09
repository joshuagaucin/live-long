import React from "react";
import { Link } from "react-router-dom";


import "./MainFooter.css";

const MainFooter = () => {
  return (
    <footer className="main-footer">
      <section className="main-footer-top">
        <header className="main-footer-top-header">
          <h2
            className="main-footer-top-header__title wow fadeInLeft"
            data-wow-delay=".5s"
            data-wow-duration="1.2s"
          >
            Live Long
          </h2>
          
        </header>

        <div id="portfolio"className="main-footer-top-item">
          <h3 className="main-footer-top-item__title">portfolio: </h3>
          <p>
            <a
              href="https://joshuagaucin.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.joshuagaucin.com
            </a>
          </p>
        </div>

        <div id="phone" className="main-footer-top-item">
          <h3 className="main-footer-top-item__title">phone number:</h3>
          <p>816-206-7394</p>
        </div>

        <p className="main-footer-top-copyright">
          Copyright &copy;2020
          <br /> Code and design by{" "}
          <a
            href="https://joshuagaucin.github.io/Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joshua Gaucin
          </a>
        </p>
      </section>

      
           
         
    </footer>
  );
};

export default MainFooter;
