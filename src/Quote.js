import React, { useState, useEffect } from 'react';

import QuoteDetails from './QuoteDetails'
import CustomerQuotes from './customerQuotes'

function Quote(props) {
    const [customerId, setCustomerId] = useState(3);
    const [tier, setTier] = useState(1);
    const [quoteNum, setQuoteNum] = useState(0);
    
    console.log(quoteNum,'quoteNum')

    return (
        <>
            <CustomerQuotes customerId={customerId} setQuoteNum={setQuoteNum}/>
            <QuoteDetails customerId={customerId} tier={tier} quoteNum={quoteNum}/>

        </>
    )


}

export default Quote;