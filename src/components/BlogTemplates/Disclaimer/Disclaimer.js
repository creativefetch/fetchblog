import React from 'react';


const Disclaimer = (props) => {
    console.log(props)
    return (
        <div class="grid__col grid__col--3-of-3 ">
            <p class="please-note">{props.Disclaimer}</p>
        </div>
    )

}

export default Disclaimer
