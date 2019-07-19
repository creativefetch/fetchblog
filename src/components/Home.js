import React from 'react';
import Layout from "./Layout/Layout";
import BlogEntries from "./BlogEntries/BlogEntries";

const Home = (props) => {
  
console.log(props.blogJson)


      return (
        <div>
       
  
            <BlogEntries blogJson={props.blogJson}/>

         
  
  
        </div>
      );
    }
  
  export default Home;