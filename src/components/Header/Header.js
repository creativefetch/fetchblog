

import React, { Component } from 'react'
import Styles from "./Header.module.scss";

const Header = () => {

    const copyBlog = () => {
        // gets the html and all its children
        const blogContainer = document.getElementById("TheFetchBlog").cloneNode(true);
        // gets the text area it is going to be inserted to
        let HTMLTextArea = document.getElementById("htmlString")
        //makes the object a html string
        let insertHtml = blogContainer.outerHTML
        // sets the text area to the html string
        document.getElementById("htmlString").value =  insertHtml
        // selects the html string inside the text area  
        HTMLTextArea.select();
        // excutes the copy command
        document.execCommand("copy");
    }


        return (
            <header className={Styles.headerContainer}>
                <h1>Fetch Blog</h1>
                <h2>HTML Generator</h2>
                <div className={Styles.htmlCopyContainer}>
                <button  
                onClick={copyBlog}
                className={Styles.copyHtmlBtn}>
                    Copy HTML To ClipBoard
                </button>
                <textarea id="htmlString" class={Styles.htmlString}></textarea>
                </div>
            </header>
        )
    }

export default Header

