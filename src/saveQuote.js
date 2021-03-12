import React, { useState, useEffect } from 'react';

function QuoteDetails(props) {
    



    return (<>

        <div className="saves">
            <div className="save text-center w-100 mt-4">
                <a className="w-100 d-block" onClick={() => {
              
                    props.saveQuote('update')
               
            }
            }>Save</a>
            </div>
            <div
                className="save-as-new-template text-center w-100 mt-4"
            >
                <a className="w-100 d-block" onClick={() => props.saveQuote('insert')}
                >Save as new template</a
                >
            </div>
        </div>

    </>)

}

export default QuoteDetails;