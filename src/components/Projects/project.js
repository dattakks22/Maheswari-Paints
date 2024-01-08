import React from "react";

import './project.css'

import NavBar from "../Navbar/navbar";

import Slide1 from "../Projects/project_slide_1/slide1"
import Slide2 from '../Projects/project_slide_2 copy/slide2'



import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import imagemap from '../../Assets/Vijayawada-Google-My-Maps.png';

import { FaCopyright } from "react-icons/fa";



const Project = () => {

    



    return (
        <div>
            <NavBar />
            <div className="Project_page conatiner">
                <h1 className="Title">
                    Our Top Project
                </h1>
            </div>

            <Slide1 />
            <Slide2 />
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

            <footer className="footer_container">
                <div><h1 className="footer_title">Copyright <FaCopyright /> <span className="bold">MaheswariPaints.</span> All Rights Reserved. </h1></div>

                <div ><h1 className="footer_title_2">Designed By <span className="bold">Datta Gangadhar</span></h1></div>
            </footer>
        </div>
    )
}


export default Project;