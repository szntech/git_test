import React, { useState, useEffect } from 'react';


function CustomerQuotes(props){

    const [quotes, setQuotes] = useState([]);

    useEffect(()=>{

     

            fetch(`http://localhost:3002/Quotes?id=${props.customerId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }

            }).then(res => res.json())
                .then(res => {
                    

                    setQuotes(res)


                });

       




    },[props.customerId]) 
   
   
   
   
   
   return(<>
    <div className='QutesWrapper'>
    {quotes.map(quote=><div key={quote.id} onClick={()=>props.setQuoteNum(quote.id)}>QUOTE#{quote.id}  {new Date(quote.dateCreated).toLocaleDateString()}</div>)}
    </div>
    </>)
}

export default CustomerQuotes