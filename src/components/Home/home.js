import React, { Component } from "react"

import './home.css'

import NavBar from "../Navbar/navbar";
import HomeImage from '../../Assets/bg.png'
import paintImg from '../../Assets/paint.png'

import { GrPaint } from "react-icons/gr";

import { MdTexture } from "react-icons/md";

import { MdOutlineWallpaper } from "react-icons/md";

import logo1 from '../../Assets/1.png';
import logo2 from '../../Assets/2.png';
import logo3 from '../../Assets/3.png';
import logo4 from '../../Assets/4.png';
import logo5 from '../../Assets/Logo (1).png';

import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import imagemap from '../../Assets/Vijayawada-Google-My-Maps.png';

import { FaCopyright } from "react-icons/fa";

import SlideImagesSection from "../ImagesSection/images";



class Home extends Component {
    render() {
        return (
            <> <NavBar />
                <section className="home_container">
                    
                    <img src={HomeImage} alt="homeImage" className="homeimg" />
                    <div className="text-form-container">
                        <h1 className="homeTitle">Transforming Homes into <br /> <span className="boldTitle">Beautiful Homes </span>: Bringing Life to Your Walls</h1>

                        <form className="form-container">
                            <h1 className="formTitle">Get in touch with us</h1>
                            <input type="text" className="inputname" placeholder="Enter your name" />
                            <input type="tel" className="inputnum" placeholder="Your Mobile Number" />
                            <input type="number" className="inputpin" placeholder="Your Pincode" />
                            <button type="submit" className="formBtn" >Submit</button>
                        </form>
                    </div>
                

                </section>

                <section className="about_container">
                    <div className="title_pick">
                        <div className="title_content">
                            <h1 className="aboutTitle">Welcome To Maheswari Paints</h1>
                            <p className="about_dec">When renovating or constructing any office or house, painting is one of the key elements in converting any
                                space into something new and appealing. Painting your house or even office can help change the entire mood of the room and make it seem different.
                                Paint Dealers in Vijayawada help customers to choose the correct paint option in their budget.</p>
                            <button className="aboutBtn" type="button" >Contact Us</button>
                        </div>
                        <img className="aboutimg" src={paintImg} alt="aboutImg" />
                    </div>

                    <div className="title_pick_2">
                        <img className="aboutimg_2" src={paintImg} alt="aboutImg" />
                        <div className="title_content_2">
                            <h1 className="aboutTitle_2">Why Choose Us ? </h1>
                            <p className="about_dec_2">Choosing between just one or two of the various brands that are all available in the market could be intimidating. Paint dealers will help you based on your budget and requirement.</p>
                            <button className="aboutBtn_2" type="button" >Contact Us</button>
                        </div>
                    </div>

                </section>


                <section className="service_container">
                    <div className="service_title_container">
                        <h1 className="service_title">A One-Stop Destination for all your Home Paint Needs</h1>
                        <p className="serviceDesc">We offer a diverse selection of products and services at our paint shop, tailored to help you turn your artistic visions into reality.</p>
                        <h1 className="service_title_2">OUR SERVICES</h1>
                        <div className="service_container_2">
                            <div className="service_painting_service_img display">
                                <button className="buttonService">Painting Service</button>
                            </div>
                            <div className="service_color_consulation display">
                                <button className="buttonService">Color Consultation</button>
                            </div>
                            <div className="service_water_proofing display">
                                <button className="buttonService">Water Proofing Solution</button>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="product_categories">
                    <h1 className="products_categories_title">PRODUCTS CATEGORIES</h1>
                    <div className="products_items">
                        <div className="product_item">
                            <div className="icon" ><GrPaint /></div>
                            <h1 className="item_title">Paints</h1>
                            <p className="item_desc">
                                Choose from a huge collection of interior & exterior paints from Asian Paints & Berger
                            </p>
                        </div>

                        <div className="product_item">
                            <div className="icon" ><MdOutlineWallpaper /></div>
                            <h1 className="item_title">Wallpapers</h1>
                            <p className="item_desc">
                                Choose from a vast collection of wallpapers to add style and personality to your walls
                            </p>
                        </div>

                        <div className="product_item">
                            <div className="icon" ><MdTexture /></div>
                            <h1 className="item_title">Wall Textures</h1>
                            <p className="item_desc">
                                Transform your walls with a stunning  textured finishes & designs
                            </p>
                        </div>
                    </div>
                </section>


                <section className="brand_categories">

                    <div className="brand_title_container ">
                        <h1 className="brand_title">
                            Brands at our Store
                        </h1>
                    </div>

                    <div className="brands_logo_container">
                        <img className="brand_logo" src={logo1} alt="asianPaints" />
                        <img className="brand_logo" src={logo2} alt="asianPaints" />
                        <img className="brand_logo" src={logo3} alt="asianPaints" />

                        <img className="brand_logo" src={logo4} alt="asianPaints" />
                        <img className="brand_logo" src={logo5} alt="asianPaints" />
                        <img className="brand_logo" src={logo5} alt="asianPaints" />

                        <img className="brand_logo" src={logo5} alt="asianPaints" />
                        <img className="brand_logo" src={logo5} alt="asianPaints" />
                        <img className="brand_logo" src={logo5} alt="asianPaints" />

                    </div>

                </section>

              
                
                    <SlideImagesSection />
                  
                    
         


                <section className="contact_us_container">
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
                </section>




                <section className="map_container">
                    <a href="https://www.google.com/maps/dir//maheswari+paints+map/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a35fab1403de667:0xadb9be16db5b1b25?sa=X&ved=2ahUKEwin1OKwvMCDAxUod2wGHZd2A6sQ9Rd6BAg3EAA" className="map_link"> <img src={imagemap} alt="map_image" className="map_image" /></a>
                </section>

                <section className="shopName_title">
                    <h1 className="shopName">Maheswari <span className="black">Paints</span> <br/>Vijayawada</h1>
                </section>



                <footer className="footer_container">
                    <div><h1 className="footer_title">Copyright <FaCopyright /> <span className="bold">MaheswariPaints.</span> All Rights Reserved. </h1></div>

                    <div ><h1 className="footer_title_2">Designed By <span className="bold">Datta Gangadhar</span></h1></div>
                </footer>

            </>

        )
    }
}


export default Home;