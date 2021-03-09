import React, { useState, useEffect } from 'react';

function QuoteDetails(props) {
    console.log(props,'details')

    const [quoteNum, setQuoteNum] = useState(null);

    const handler = (type) => {
        console.log(type)
        fetch(`http://localhost:3002/savequote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...props, type: type, quoteNum: quoteNum })
        }).then(res => res.json())
            .then(res => {
                console.log(res, 'savequote')

                if (res.type === "insert") {
                    setQuoteNum(res.query[0].insertId)
                }




            });




        console.log(props, 'props')
    }

    

    return (<>

        <div className="saves">
            <div className="save text-center w-100 mt-4">
                <a className="w-100 d-block" onClick={() => {
                if (quoteNum !== null) {
                    handler('update')
                } else {
                    handler('insert')
                }
            }
            }>Save</a>
            </div>
            <div
                className="save-as-new-template text-center w-100 mt-4"
            >
                <a className="w-100 d-block" onClick={() => handler('insert')}
                >Save as new template</a
                >
            </div>
        </div>

    </>)

}

export default QuoteDetails;