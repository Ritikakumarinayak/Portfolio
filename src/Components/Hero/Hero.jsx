import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ProfileImage from "../../assets/Profilephoto.png"
import Myresume from "../../assets/MY_RESUME.pdf"
import ritucv from "../../assets/ritucv.pdf"
import my_image from "../../assets/my_image.jpg"
const Hero = () => {
  return (
    <div id='home'className='hero'>
    
        <img  className="anim"src={my_image} alt="" />
        <h1 className='anim'><span >I'm Ritika,</span> frontend developer</h1>
        <p className='anim'> Proficient in front-end and back-end technologies, I specialize in creating dynamic and responsive websites and web applications. With a keen eye for design and a strong foundation in programming languages such as HTML, CSS, and JavaScript, I collaborate with clients to bring their visions to life. </p>
        <div className="hero-action anim">
            <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>  Connect with me </AnchorLink>
            </div><a href={ritucv} download><div className="hero-resume">
                My Resume
            </div></a>
        </div>

    </div>
  )
}

export default Hero