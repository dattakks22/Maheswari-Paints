import React from "react";

import "./contect.css"
import NavBar from "../Navbar/navbar";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";


import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import imagemap from '../../Assets/Vijayawada-Google-My-Maps.png';

import { FaCopyright } from "react-icons/fa";

const Contect = () => {
    return (
        <>
            <NavBar />
            <section className="contect-page-container">
                <h1 className="contect-page-title">Contact</h1>

                <div className="contact_form-contect">
                    
                    <div className="contect_address">
                        <div className="contact_page_contect">
                            <span className="contact_icon"><FaLocationDot /></span>
                            <p className="contact_address">Door No 28-15-13, Dasu Vari Street, Eluru Road, Arundalpet,
                                Vijayawada - 520002 (Beside Sonovision)</p>
                        </div>

                        <div className="contact_page_contect">
                            <span className="contact_icon"><IoMail /></span>
                            <p className="contact_address">MaheswariPaints@gmail.com</p>
                        </div>
                        <div className="contact_page_contect">
                            <span className="contact_icon"><FaPhone /></span>
                            <p className="contact_address">9392100940</p>
                        </div>
                    </div>

                    <form className="contact_page_form">
                        <label for="nameInput" className="contactInput_name">Name </label>
                        <input id="nameInput" className="name_input" type="text" />
                        <label for="phoneInput" className="contactInput_phone">Phone Number</label>
                        <input id="phoneInput" className="phone_input" type="tel" />
                        <label for="pincodeInput" className="contactInput_pincode">Pincode</label>
                        <input id="pincodeInput" className="pincode_input" type="number" placeholder="Enter Your pincode" />

                        <label for="requirementInput" className="contact_req" > Mention your requirement </label>
                        <input id="requirementInput" className="requre_input" placeholder="Type Your requirement." />

                        <button className="contact_form_button" type="submit">Submit</button>
                    </form>


                </div>



                <div className="Social_mediaIcon_container">
                    <h1 className="socila_title">SocialMedia</h1>
                    <div className="social_icon">
                        <a href="https://www.facebook.com/" className="social_icon"><FaFacebook /></a>
                        <a href="https://www.instagram.com/" className="social_icon"><FaSquareInstagram /></a>
                        <a href="https://twitter.com/" className="social_icon"><FaXTwitter /></a>
                    </div>
                </div>
            </section>




            <section className="map_container">
                <a href="https://www.google.com/maps/dir//maheswari+paints+map/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a35fab1403de667:0xadb9be16db5b1b25?sa=X&ved=2ahUKEwin1OKwvMCDAxUod2wGHZd2A6sQ9Rd6BAg3EAA" className="map_link"> <img src={imagemap} alt="map_image" className="map_image" /></a>
            </section>

            <section className="shopName_title">
                <h1 className="shopName">Maheswari <span className="black">Paints</span> <br />Vijayawada</h1>
            </section>



            <footer className="footer_container">
                <div><h1 className="footer_title">Copyright <FaCopyright /> <span className="bold">MaheswariPaints.</span> All Rights Reserved. </h1></div>

                <div ><h1 className="footer_title_2">Designed By <span className="bold">Datta Gangadhar</span></h1></div>
            </footer>





        </>
    )
}


export default Contect;