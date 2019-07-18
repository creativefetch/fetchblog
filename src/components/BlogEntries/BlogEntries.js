import React from 'react';
import Styles from "./BlogEntries.module.scss"
import Template1 from "../BlogTemplates/Template1"

class BlogEntries extends React.Component {
    render() {
        return (
            <div className={Styles.BlogEntriesContainer}>
                <Template1 />
            </div>
        );
    }
}

export default BlogEntries;
