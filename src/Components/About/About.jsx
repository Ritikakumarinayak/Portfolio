import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import pic from '../../assets/pic.jpg'
import my_image2 from '../../assets/my_image2.jpg'

const About = () => {
    return (
        <div id='about' className='about '>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left anime">
                    <img src='/uploads/r3.jpeg' alt="" />
                </div>
                <div className="about-right ani ">
                    <div className="about-para">
                        <p>
                            Passionate web developer with a keen eye for detail and a drive for creating exceptional digital experiences.</p>
                        <p>

                            Experienced web developer with a knack for problem-solving and a flair for creative design. Committed to crafting robust, user-friendly websites that elevate brands and drive results.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>JAVASCRIPT</p> <hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>REACTJS</p> <hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>NEXTJS</p> <hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>NODEJS</p> <hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>MONGODB</p> <hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS BUILT</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>50+</h1>
                    <p>FEATURES IMPLEMENTED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>COLLABORATIONS</p>
                </div>


            </div>
        </div>
    )
}

export default About