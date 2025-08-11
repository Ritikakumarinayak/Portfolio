import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // formData.append("access_key", "66a7478b-35f9-4a86-b85e-f9a9b68a6529"); 
    formData.append("access_key", "bf994250-ea49-4f20-b086-c25e7d59fb68"); 

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      event.target.reset();
      alert(res.message)
      console.log("Success", res);
    
    }
  };
  return (

    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to ask
            about anything that you want me to work on. You can contact anytime
          </p>
          <div className="contact-details">
            <div className="contact-detail">
           <img src={mail_icon} alt="" /><p>ritikakumarinayak@gmail.com</p>
            </div>
            <div className="contact-detail">
                <img src={call_icon} alt="" /><p>81444584761</p>
            </div>
            <div className="contact-detail">
                <img src={location_icon} alt="" /><p>Berhampur,Odisha</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" required />
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder="Enter your email" name="email" required />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" id="" cols="30" rows="8" placeholder="Enter your message"></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
            
        </form>
      </div>
    </div>
  );
};

export default Contact;
