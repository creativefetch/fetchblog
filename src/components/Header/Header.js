import React, { useEffect, Component } from "react";
import Styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  console.log(window.location);

  const copyBlog = () => {
    // gets the html and all its children
    try {
    const blogContainer = document
      .getElementById("TheFetchBlog")
      .cloneNode(true);
    // gets the text area it is going to be inserted to
    let HTMLTextArea = document.getElementById("htmlString");
    //makes the object a html string
    let insertHtml = blogContainer.outerHTML;
    // sets the text area to the html string
    document.getElementById("htmlString").value = insertHtml;
    // selects the html string inside the text area
    HTMLTextArea.select();
    // excutes the copy command
    document.execCommand("copy");}
    catch(err) {
        alert("No HTML found. Please Choose blog page")
    }
  };

  const backArrow = (
    <svg
      className={Styles.backArrow}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
    </svg>
  );


  return (
    <header className={Styles.headerContainer}>
      <Link to="/">{backArrow}</Link>

      <h1>Fetch Blog By Creative</h1>
      <h2>HTML Generator</h2>
      <div id="htmlCopyContainer" className={Styles.htmlCopyContainer}>
        <button onClick={copyBlog} className={Styles.copyHtmlBtn}>
          Copy HTML To ClipBoard
        </button>
        <textarea id="htmlString" className={Styles.htmlString} />
      </div>
    </header>
  );
};

export default Header;
