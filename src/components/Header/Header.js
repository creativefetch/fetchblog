

import React, { Component } from 'react'
import Styles from "./Header.module.scss";

const Header = () => {

    const copyBlog = () => {
        const blogContainer = document.getElementById("TheFetchBlog").cloneNode(true)
        console.log("test button")
        console.log(blogContainer)
    } 
    


        return (
            <header className={Styles.headerContainer}>
                <h1>Fetch Blog</h1>
                <h2>HTML Generator</h2>
                <button  
                onClick={copyBlog}
                className={Styles.copyHtmlBtn}>
                    Copy HTML To ClipBoard
                </button>
            </header>
        )
    }

export default Header

