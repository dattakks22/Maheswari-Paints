import React from "react";
import { Link, withRouter } from "react-router-dom";
import './navbar.css';
import Logo from '../../Assets/logo.png'


import { AiOutlineMenuFold } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";



const NavBar = ({ history }) => {

    const ContectPage = () => {
        history.push("/contectUs");
    };

    const showSidebar = () => {
        const sidebar = document.querySelector('.mobile_nav_items');
        sidebar.style.display = "flex";
      };

    const showClosebar = () => {
        const closebar = document.querySelector(".mobile_nav_items");
        closebar.style.display = 'none'
      };



    return (
        <nav className="nav-container">
            <img className="logo" src={Logo} alt="websiteLogo" />
        {/* links */}
            <div className="nav_items">
                <Link to="/" className="nav_link" >Home</Link>
                <Link to="/about" className="nav_link" >About Us</Link>
                <Link to="/project" className="nav_link" >Projects</Link>
            </div>
        {/* button */}
            <button className="nav_button" type="button" onClick={ContectPage}>
                    Contect Us
                </button>


{/* Mobile Device  */}

            <AiOutlineMenuFold className="menuIcon"  onClick={showSidebar} />

{/* Mobile Device Links  */}
            <div className="mobile_nav_items">
            <FaWindowClose className="closeIcon" onClick = {showClosebar} />
                <Link to="/" className="mobileListItem" >Home</Link>
                <Link to="/about" className="mobileListItem" > About Us</Link>
                <Link to="/project" className="mobileListItem" >Projects</Link>
                <Link to="/contectUs" className="mobileListItem" >Projects</Link>
            </div>

        </nav>
    )
}


export default withRouter(NavBar);

