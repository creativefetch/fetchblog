

import React, { Component } from 'react'
import Styles from "./Header.module.scss";

export default class Header extends Component {

    render() {
        return (
            <header className={Styles.headerContainer}>
                <h1>Fetch Blog</h1>
                <h2>HTML Generator</h2>
            </header>
        )
    }
}
