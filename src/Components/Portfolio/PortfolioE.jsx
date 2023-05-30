import React from 'react';
import AOS from 'aos';
import cacacola from "../../images/cocacola.png"
import velocity from "../../images/velocity.png"
import stone from "../../images/stone.png"
import easer from "../../images/easer.jpg"
import atelies from "../../images/atelier.jpg"
import pageImg from "../../portImg/port.jpg"
import pageImg1 from "../../portImg/port1.jpg"
import pageImg2 from "../../portImg/port2.jpg"
import pageImg3 from "../../portImg/port3.jpg"
import pageImg4 from "../../portImg/port4.jpg"
import pageImg5 from "../../portImg/port5.jpg"
import pageImg6 from "../../portImg/port6.jpg"
import pageImg7 from "../../portImg/port7.jpg"
import pageImg8 from "../../portImg/port8.jpg"
import { Link } from "react-router-dom"
import 'aos/dist/aos.css';
AOS.init();
const PortfolioE = () => {
  return (
    <div className='portfolio' data-aos="fade-up">

      <div className="portfolio professional react-tabs__tab-panel--selected" role="tabpanel" id="panel:r0:2" aria-labelledby="tab:r0:2">
        <div className="title-section text-left text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
          <h1>
            my
            <span> portfolio </span>
          </h1>
          <span className="title-bg">works</span>
        </div>
        <div className="portfolio-mein">
          <div className="react_tabs">
            <ul className='portfolio_tab_list'>
              <li className='react-tabs_tab'>All</li>
              <li className='react-tabs_tab'>Logo</li>
              <li className='react-tabs_tab'>Vidio</li>
              <li className='react-tabs_tab'>Graphic Design</li>
              <li className='react-tabs_tab'>Mascup</li>
            </ul>
          </div>
          <div className="container">
            <div className="portfolio_all">
              <div className="react-tabs_tab-panel">
                <div className="Tab-container">
                  <div className="Tab-img1" data-aos="fade-right"
                    data-aos-offset="100"

                    data-aos-easing="ease-in-sine">
                    <div className="card" data-aos-delay="0" data-aos="zoom-in"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine">
                      <Link to="https://cocacola-wep-malikov.netlify.app/" target="_blank">
                        <img src={pageImg} alt='' className="images" />
                        <img className='cocacola' src={cacacola} alt="" />
                      </Link>
                    </div>

                    <div className="card" data-aos-delay="0" data-aos="zoom-in"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine">
                      <Link to="https://m-velocity.netlify.app" target="_blank">
                        <img src={pageImg1} className="images" alt="" />
                        <img className='cocacola' src={velocity} alt="" />
                      </Link>
                    </div>
                    <div className="card" data-aos-delay="0" data-aos="zoom-in"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine" >
                      <Link to="https://m-stone.netlify.app" target="_blank">
                        <img src={pageImg2} className="images" alt="" />
                        <img className='cocacola' src={stone} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="Tab-img2" >
                    <div className="card" data-aos-delay="0" data-aos="zoom-in"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine" >
                      <Link to="https://m-easer.netlify.app" target="_blank">
                        <img src={pageImg3} className="images" alt="" />
                        <img className='niChild2' src={easer} alt="" />
                      </Link>
                    </div>

                    <div className="card" data-aos-delay="0" data-aos="zoom-in"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine">
                        <Link to="https://m-atelies.netlify.app" target="_blank" >
                      <img src={pageImg4} className="images" alt=""  />
                      <img className='niChild2' src={atelies} alt="" />
                      </Link>
                    </div>
                    <div className="card" data-aos-delay="0" data-aos="zoom-in"
                      data-aos-offset="100">
                        <Link to="https://sqr3.netlify.app" target="_blank">
                      <img src={pageImg5} className="images" alt=""
                      />
                      </Link>
                    </div>
                  </div>
                  <div className="Tab-img3"  >
                    <div className="card" data-aos-delay="0" data-aos="zoom-in"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine" >
                      <img src={pageImg6} className="images" alt="" />
                    </div>
                    <div className="card" data-aos-delay="0" data-aos="zoom-in"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine">
                      <img src={pageImg7} alt='' className="images" />
                    </div>
                    <div className="card" data-aos-delay="0" data-aos="zoom-in"
                      data-aos-offset="100"
                      data-aos-easing="ease-in-sine">
                      <img src={pageImg8} alt='' className="images" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default PortfolioE