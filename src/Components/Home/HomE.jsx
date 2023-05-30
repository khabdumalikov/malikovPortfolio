import React from 'react';
import img from "../../images/img8.jpg"

const HomE = () => {
  return (
    <div className='hom'>
      <div className="night">
        <div className="den">
          <i className="fa-brands fa-cloudflare"></i>
          <h1>Sount</h1>
          <h2>Off</h2>
        </div>
      </div>
      <div className="layout">
        <div className="icon">
          <i className="fa-sharp fa-solid fa-square"></i>
          <i className="fa-solid fa-circle"></i>
          <i className="fa-solid fa-circle-play"></i>
        </div>
      </div>
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="textbox">
        <h1 data-text=" im''O'tkirbek''Malikov"> im''O'tkirbek''Malikov</h1>
        <h2 id='typed' >
          web Developer
        </h2>
        <p>I'm a frontend developer, passionate about making the frontend of any site perfect and deploying it to the browser</p>
        <button> <label>  more about me </label> <span className='span'></span> <i className=" arrow fa-solid fa-arrow-right"></i>  </button>

      </div>
      <div className="textbox1">
      </div>
      <div className="fesbok">
        <div className="inst">
          <i className="fa-brands fa-brands1  fa-linkedin-in"></i>
          <i className="fa-brands fa-brands2  fa-youtube"></i>
          <i className="fa-brands fa-brands3 fa-twitter"></i>
        </div>
      </div>
    </div>
  )
}

export default HomE