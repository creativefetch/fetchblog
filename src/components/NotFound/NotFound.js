import React from "react";
import {Link} from "react-router-dom"
import Styles from "./NotFound.module.scss"

const NotFound = () => {
    return (
        <div className={Styles.NotFound}>
            <h1>404 Error. Page Not Found.</h1>
            <img className={Styles.logo} src="https://fetch.co.uk/static/shop/ui-departmentstore/images/cognac/logo-large.svg" alt="Fetch logo" />
            <Link to="/"><button>Back To Home Page</button></Link>
        </div>
    )
}

export default NotFound;