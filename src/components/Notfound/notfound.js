import React from "react"

import Logo from '../../Images/logo.png'


const NotFound = () => {
    return(
        <div className="notfound">
            <h1 className= "notfoundTitle">Not Found</h1>
            <img src = {Logo} alt = "webistelogo" />
        </div>
    )
}


export default NotFound;