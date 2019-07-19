import React from 'react';
import Styles from "./BlogEntries.module.scss"
import { Link } from "react-router-dom"

const BlogEntries = (props) => {
  
    console.log(props.blogJson)
    
    // Generates the blog list from contentful
    const BlogList = props.blogJson.map(element => (

        <div className={Styles.BlogEntriesContainer} key={element.sys.id}>

            <h2>{element.fields.blogTitle}</h2>
            <p>{element.fields.cardCopy}</p>
            <Link to={`/${element.fields.url}`}><button> Go To Post</button></Link>
            <hr/>

        </div>
    ))

    return BlogList
      
    }
    
    export default BlogEntries;