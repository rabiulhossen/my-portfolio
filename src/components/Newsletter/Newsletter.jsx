import React from 'react'
import './Newsletter.css';


export default function Newsletter() {


  return (
    <div className="contact-form" id="contact">
    {/* left side copy and paste from work section */}
    <div className="w-left">
      <div className="awesome">
       
        <span>Get in Touch</span> <br />
        <span>Contact me</span>
        <div
          className="blur s-blur1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>
    </div>
    {/* right side form */}
    <div className="c-right">
      <form>
        <input type="text" name="user_name" className="useri"  placeholder="Name"/>
        <input type="email" name="user_email" className="useri" placeholder="Email"/>
        <textarea name="message" className="useri" placeholder="Message"/>
        <input type="submit" value="Send" className="button b-Send"/>
        <span> "Thanks for Contacting me"</span>
        <div
          className="blur c-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
      </form>
    </div>
  </div>
  )
}
