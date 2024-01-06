import React from "react";
import './about.css'
import Navbar from "../Navbar/navbar";

import '../Home/home.css';



import HomeImage from '../../Assets/bg.png'


import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import imagemap from '../../Assets/Vijayawada-Google-My-Maps.png';

import { FaCopyright } from "react-icons/fa";



const About = () => {
    return (
        <>
            <Navbar />
            <section className="about-page-container">
                <div className="about-store_image-content">
                    <div className="about-page-content">
                        <h1 className="about-page-title">
                            About Our Store
                        </h1>

                        <p className="about-page-des">
                            In the year 2000, Mahashwari Paints was founded by a visionary entrepreneur whose passion for
                            quality and commitment to excellence set the stage for a remarkable journey. [Founder's Name],
                            our esteemed founder, laid the foundation for a company that would redefine the standards of the painting industry.
                        </p>


                        <p className="about-page-des">
                            [Founder's Son's Name] brought a fresh perspective and a renewed dedication to building upon the
                            solid foundation laid by his father. Despite the challenges of navigating a transition, the commitment
                            to delivering high-quality paints and ensuring customer satisfaction remained unwavering.
                        </p>

                    </div>
                    <img className="about-page-image" src={HomeImage} alt="aboutpageimg" />
                </div>


                <div className="meet-team-section">
                    <h1 className="meet-title">Welcome to the heart of Mahashwari Paints
                    </h1>
                    <p className="meet-desc"> Our Dedicated Team</p>

                    <div className="team_members-container">
                        <div className="team_numberImage">
                            <div className="team-member-container">
                                <h1 className="team-member-name">First Name Paints</h1>
                                <p className="team-member-prof">Team Leader Associate</p>
                            </div>
                        </div>

                        <div className="team_numberImage">
                            <div className="team-member-container">
                                <h1 className="team-member-name">First Name Paints</h1>
                                <p className="team-member-prof">Team Leader Associate</p>
                            </div>
                        </div>

                        <div className="team_numberImage">
                            <div className="team-member-container">
                                <h1 className="team-member-name">First Name Paints</h1>
                                <p className="team-member-prof">Team Leader Associate</p>
                            </div>
                        </div>

                        <div className="team_numberImage">
                            <div className="team-member-container">
                                <h1 className="team-member-name">First Name Paints</h1>
                                <p className="team-member-prof">Team Leader Associate</p>
                            </div>
                        </div>

                        <div className="team_numberImage">
                            <div className="team-member-container">
                                <h1 className="team-member-name">First Name Paints</h1>
                                <p className="team-member-prof">Team Leader Associate</p>
                            </div>
                        </div>

                        <div className="team_numberImage">
                            <div className="team-member-container">
                                <h1 className="team-member-name">First Name Paints</h1>
                                <p className="team-member-prof">Team Leader Associate</p>
                            </div>
                        </div>








                        <div className="contact_us_container">
                            <h1 className="contact_title">Contact Us</h1>
                            <div className="contact_us_conent">
                                <div className="content">
                                    <h1 className="contact_title_content">Address</h1>
                                    <p className="contact_desc">
                                        Door No 28-15-13, Dasu Vari Street, Eluru Road, Arundalpet, Vijayawada - 520002 (Beside Sonovision)
                                    </p>
                                </div>
                                <div className="content">
                                    <h1 className="contact_title_content">Contact</h1>
                                    <p className="contact_desc">
                                        Phone number :<span className="unbold">9392100940 </span>  <br />
                                        Mail ID :<span className="unbold"> MaheswariPaints@gmail.com</span>
                                    </p>
                                </div>
                                <div className="content">
                                    <h1 className="contact_title_content">Opening Hours</h1>
                                    <p className="contact_desc">
                                        Mon -Sat 10:00 am -- 8:00 pm
                                    </p>
                                    <p className="contact_desc">
                                        Sunday  Closed
                                    </p>
                                </div>
                            </div>

                            <div className="Social_mediaIcon_container">
                                <h1 className="socila_title">SocialMedia</h1>
                                <div className="social_icon">
                                    <a href="https://www.facebook.com/" className="social_icon"><FaFacebook /></a>
                                    <a href="https://www.instagram.com/" className="social_icon"><FaSquareInstagram /></a>
                                    <a href="https://twitter.com/" className="social_icon"><FaXTwitter /></a>
                                </div>
                            </div>
                        </div>




                        <div className="map_container">
                            <a href="https://www.google.com/maps/dir//maheswari+paints+map/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a35fab1403de667:0xadb9be16db5b1b25?sa=X&ved=2ahUKEwin1OKwvMCDAxUod2wGHZd2A6sQ9Rd6BAg3EAA" className="map_link"> <img src={imagemap} alt="map_image" className="map_image" /></a>
                        </div>

                        <div className="shopName_title">
                            <h1 className="shopName">Maheswari <span className="black">Paints</span> <br />Vijayawada</h1>
                        </div>





                    </div>
                </div>





            </section>

            <footer className="footer_container">
                <div><h1 className="footer_title">Copyright <FaCopyright /> <span className="bold">MaheswariPaints.</span> All Rights Reserved. </h1></div>

                <div ><h1 className="footer_title_2">Designed By <span className="bold">Datta Gangadhar</span></h1></div>
            </footer>
        </>
    )
}


export default About;