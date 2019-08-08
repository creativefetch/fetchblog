
import React from 'react'

const FopBlockFour = (props) => {

    return (

<div className="container fetchBlog">
<div className="grid">

    <div className="fetchEdit">{props.FopsTitle ? props.FopsTitle : null}</div>
    <div className="dy-sku">
    
        <fop skus={props.FopsPicks.map(element => {
            return element
        })} className='grid' fop-class='grid__col grid__col--s-1-of-2 grid__col--m-1-of-2 grid__col--1-of-4'/>
        
    </div>
    <div className="grid__col grid__col--s-none grid__col--m-none grid__col--1-of-8"></div>

</div>
</div>

)

}

export default FopBlockFour