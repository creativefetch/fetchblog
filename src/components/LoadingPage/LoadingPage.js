import React from "react";
import Styles from "./LoadingPage.module.scss";

const LoadingPage = () => {
    return(
        <div className={Styles.LoadingPage}>
            <div>
                <h1>Welcome To The Fetch Blog</h1>
                    <p>Loading...Please Wait...</p>
            </div>
        </div>
    )
}

export default LoadingPage;