import React, { useState } from 'react'
import Todo from '../TodoList/Todo'
const ContactE = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [comment , setComment] = useState('')
  function user(event) {
    // console.log(name, email, subject , comment);
    // console.log(comment);

    event.preventDefault();
  }
  
  return (
    <div className='contact'>
      <div className="title">
        <h1>get in <span className='inTouch'>touch</span></h1>
        <span className='titleContact'>contact</span>
      </div>
      <div className="center">
        <div className="container1">
          <div className="adminPanel">
            <Todo />
          </div>
        </div>
        <div className="container">

          <form onSubmit={user}>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group" data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine">
                  <input value={name} onChange={(e) => setName(e.target.value)} className='malumod' name='subject' required type="text" placeholder='YOUR NAME' />
                </div>
              </div>
              <div className="col-12 col-md-6" >
                
                <div className="form-group" >
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className='malumod' name='subject' required type="email" placeholder='YOUR EMAIL' />
                </div>
              </div>
              <div className=" col-12 col-md-12">
                <div className="form-group" data-aos="zoom-out-right">
                  <input value={subject} onChange={(e) => setSubject(e.target.value)} className='malumod' required type="text" name='subject' placeholder='YOUR SUBJECT' />
                </div>
              </div>
              
              <div className="col-12">
                <div className="form-group" data-aos="flip-right">
                  <textarea value={comment} onChange = {(e) => setComment(e.target.value)} placeholder='YOUR MESSAGE' name="YOUR MESSAGE" id="" cols="30" rows="10"></textarea>
                </div>
              </div>
              <div className="col">
                <button type='submit' className='buttonSend'>
                  <span className='button-text'>Send Message</span>
                  <span className='button_icon fa-sharp fa-solid fa-paper-plane' ></span>
                  <span className='buttonHover'></span>
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>

  )
}

export default ContactE