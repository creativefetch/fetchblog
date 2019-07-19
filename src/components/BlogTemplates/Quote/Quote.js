import React from 'react';
import QuoteCopy from "./QuoteCopy";
import QuoteImage from "./QuoteImage";

const Quote = (props) => {
    return (
        <div className="grid__col grid__col--s-4-of-4 grid__col--t-3-of-5 grid__col--m-2-of-5 grid__col--1-of-3 miniTabT3">
            <QuoteImage Image={props.quoteImage ? props.quoteImage : null}/>
            <QuoteCopy quoteCopy={props.blogQuote ? props.blogQuote : null}/>
        </div>
    )

}
export default Quote