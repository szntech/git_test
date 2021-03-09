import React, { useState, useEffect } from 'react';
import "./css/quotes.css";
import "./css/side-list.css";
import "./css/navbar.css";
import CustomerInfo from "./QuotesCustomerInfo";
import EditInfo from "./newCustomer";

import SideNotePanel from "./sideNotePanel";

import NewOld from "./NewOldCustomer";



function CustomerInfoTab(props) {

    const [edit, setEdit] = useState("complete");

    const { totalPrice,setCustomerInfo,...rest } = props;
console.log(rest,'rest')
    let  display
    
    switch (edit) {
        case 'complete':
            display=<CustomerInfo info={rest} setEdit={setEdit} />
            break;
        case 'edit':
            display=<NewOld setEdit={setEdit} />
            break;
        case 'NewCustomer':
            display=<EditInfo setCustomerInfo={setCustomerInfo} setEdit={setEdit} />
            break;
        default:
            break;
    }
    
    
    return (<>

        <div
            className="tab-pane fade show active p-3 pt-5"
            id="customer-info"
            role="tabpanel"
            aria-labelledby="customer-info-tab"
        >
            <div className="row">
                {display}
                <SideNotePanel totalPrice={totalPrice} />
            </div>


        </div>

    </>)

}
export default CustomerInfoTab;