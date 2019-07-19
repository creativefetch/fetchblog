import React from 'react'

const FetchPicks = (props) => {
    console.log(props)
    return (


        <div class="container fetchBlog">
            <div class="grid">

                <div class="fetchEdit">Fetch Picks</div>
				<div class="dy-sku">
				
					<fop skus={props.Fops.map(element => {
                        return element
                    })} class='grid' fop-class='grid__col grid__col--s-1-of-2 grid__col--m-1-of-2 grid__col--1-of-6'/>
					
				</div>
                <div class="grid__col grid__col--s-none grid__col--m-none grid__col--1-of-8"></div>

            </div>
        </div>
    )

}

export default FetchPicks