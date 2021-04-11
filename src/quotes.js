import React, { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";
import "./css/quotes.css";
import "./css/side-list.css";
import "./css/navbar.css";
import backIcon from "./img/quotes/back-icon.png";
import logo from "./img/quotes/logo.png";
import supplierIcon from "./img/quotes/suppliers.svg";
import contactsIcon from "./img/quotes/users.svg";
import printImg from "./img/quotes/printer.svg";
import shareImg from "./img/quotes/share.svg";
import plusIcon from "./img/quotes/plus-circle.svg";
import resetIcon from "./img/quotes/reset.svg";
import uploadIcon from "./img/quotes/upload.svg"

import { FontAwesomeIcon, i } from '@fortawesome/react-fontawesome'
import { faCoffee, fas, faTimes, faHome, faUsers, faCaretDown, faPlus, faSearch, faEdit, faTrash, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import CustomerInfo from "./customerInfoTab";
import QuoteDetails from "./quoteDetailsF";
import ShippingInfo from "./shippingInfo";
import FileUpload from "./fileUpload";
import Notes from "./notes";

function Quotes(props) {
    const quotenum=new URLSearchParams(useLocation().search).get('quoteNum')
    const [tabType, setTabType] = useState("quoteDetails");
    const [quoteDetails, setQuoteDetails] = useState([]);
    let [customerTier, setCustomerTier] = useState({ multiplier: 1 });
    const [totalPrice, setTotalPrice] = useState(0);
    const [catalog, setCatalog] = useState([]);
    let [counter, setCounter] = useState(1);
    let [supplierSelected, setSupplierSelected] = useState(null);
    let [quoteNumber, setQuoteNumber] = useState(null);
    let [customerInfo, setCustomerInfo] = useState({ customerId:null,companyName: "", zipcode: null, firstName: "",lastName:"", phoneNumber: null,cellNumber:null, state: "", email: "", city: "" });
console.log(customerInfo,'customerInfoquotes')
    let tabDetails = "active";
    let tabCustInfo = null;
    let tabShipInfo = null;
    let tabFileUpload = null;
    let tabNotes = null;


    let tabContent;
 
    const saveQuote = (type) => {
        
        if(type==="update"&&quoteNumber===null){
            type="insert";
        }

        fetch(`${global.config.host}/savequote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quoteDetails,relatedCustomer:customerInfo.customerId,tier:customerTier.multiplier, type: type, quoteNum: quoteNumber })
        }).then(res => res.json())
            .then(res => {
                console.log(res, 'savequote')
    
                if (res.type === "insert") {
                    setQuoteNumber(res.query[0].insertId)
                }
    
    
    
    
            });
        }
    if (tabType === "quoteDetails") {
        tabDetails = "active";
        tabCustInfo = null;
        tabShipInfo = null;
        tabFileUpload = null;
        tabNotes = null;
        tabContent = <QuoteDetails supplierSelected={supplierSelected} saveQuote={saveQuote} setSupplierSelected={setSupplierSelected} counter={counter} setCounter={setCounter} catalog={catalog} setCatalog={setCatalog} customerTier={customerTier} totalPrice={totalPrice} quoteDetails={quoteDetails} setQuoteNumber setQuoteDetails={setQuoteDetails}></QuoteDetails>
    } else if (tabType === "cutomerInfo") {
        tabDetails = null;
        tabCustInfo = "active";
        tabShipInfo = null;
        tabFileUpload = null;
        tabNotes = null;
        tabContent = <CustomerInfo customerInfo={customerInfo} setCustomerInfo={setCustomerInfo} totalPrice={totalPrice}></CustomerInfo>
    } else if (tabType === "shipInfo") {
        tabDetails = null;
        tabCustInfo = null;
        tabShipInfo = "active";
        tabFileUpload = null;
        tabNotes = null;
        tabContent = <ShippingInfo totalPrice={totalPrice}></ShippingInfo>
    } else if (tabType === "fileUpload") {

        tabDetails = null;
        tabCustInfo = null;
        tabShipInfo = null;
        tabFileUpload = "active";
        tabNotes = null;
        tabContent = <FileUpload totalPrice={totalPrice}></FileUpload>
    } else if (tabType === "Notes") {
        tabDetails = null;
        tabCustInfo = null;
        tabShipInfo = null;
        tabFileUpload = null;
        tabNotes = "active";
        tabContent = <Notes totalPrice={totalPrice}></Notes>
    }






 
    useEffect(() => {
        let count = 0
        quoteDetails.forEach((detail) => {
            count += detail.price * detail.qty * (detail.multiplier * customerTier.multiplier)
        })

        setTotalPrice(count)

    }, [quoteDetails])

    return (<>

        <section className="dashboard-section">
            <div className="container-fluid px-xxl-5">
                <div className="row">
                    <div className="col-xl-3 col-xxl-2">
                        <div className="side-list-box quote-box">

                            <div className="px-3 pt-3 d-flex align-items-center">
                                <select class="border-0">
                                    <option value="All Quotes">All Quotes</option>
                                    <option value="Category 1">Category 1</option>
                                    <option value="Category 2">Category 2</option>
                                </select>

                                <i><FontAwesomeIcon icon={fas, faCaretDown} /></i>
                                <button class="add-btn border-0 ms-auto">

                                    <i><FontAwesomeIcon icon={fas, faPlus} /></i>
                                </button>
                            </div>

                            <div class="px-3">
                                <form
                                    action="javascript:void(0)"
                                    class="seacrh my-3 d-flex align-items-center px-2"
                                >
                                    <input
                                        class="border-0 py-2"
                                        type="search"
                                        name="Seacrh"
                                        placeholder="Search Quotes"
                                    />
                                    <button class="border-0" type="submit">
                                        <FontAwesomeIcon icon={fas, faSearch} />
                                    </button>
                                </form>
                            </div>

                            <div class="side-list-item quote-item">
                                <div class="dropdown-quote">

                                    <div
                                        class="side-list-item quote-item side-color-ffafaf py-3 px-4 border-top d-flex align-items-center"
                                    >
                                        <div class="num">#365</div>
                                        <div class="ms-3">
                                            <h4>
                                                Quote Title <FontAwesomeIcon icon={fas, faCaretDown} />
                                            </h4>
                                            <p class="date w-100 d-block">Jan 13, 2021</p>
                                        </div>
                                        <div class="dots ms-auto align-self-start">
                                            <a href="javascript:void(0)">

                                                <FontAwesomeIcon icon={fas, faEllipsisH} style={{ color: "black" }} />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="dropdown-quote-items w-100">

                                        <div
                                            class="side-list-item quote-item side-color-ffe2e2 py-3 px-4 border-top d-flex align-items-center"
                                        >
                                            <div class="num">#366</div>
                                            <div class="ms-3">
                                                <h4>Aprtment 1</h4>
                                                <p class="date w-100 d-block">Jan 13, 2021</p>
                                            </div>
                                            <div class="dots ms-auto align-self-start">
                                                <a href="javascript:void(0)">
                                                    <i class="fas fa-ellipsis-h"></i
                                                    ></a>
                                            </div>
                                        </div>

                                        <div
                                            class="side-list-item quote-item side-color-ffe2e2 py-3 px-4 border-top d-flex align-items-center"
                                        >
                                            <div class="num">#367</div>
                                            <div class="ms-3">
                                                <h4>Aprtment 2</h4>
                                                <p class="date w-100 d-block">Jan 13, 2021</p>
                                            </div>
                                            <div class="dots ms-auto align-self-start">
                                                <a href="javascript:void(0)">
                                                    <i class="fas fa-ellipsis-h"></i
                                                    ></a>
                                            </div>
                                        </div>

                                        <div
                                            class="side-list-item quote-item side-color-ffe2e2 py-3 px-4 border-top d-flex align-items-center"
                                        >
                                            <div class="num">#368</div>
                                            <div class="ms-3">
                                                <h4>Aprtment 3</h4>
                                                <p class="date w-100 d-block">Jan 13, 2021</p>
                                            </div>
                                            <div class="dots ms-auto align-self-start">
                                                <a href="javascript:void(0)">
                                                    <i class="fas fa-ellipsis-h"></i
                                                    ></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div
                                    class="side-list-item quote-item side-color-2680eb py-3 px-4 border-top d-flex align-items-center"
                                >
                                    <div class="num">#365</div>
                                    <div class="ms-3">
                                        <h4>Quote Title</h4>
                                        <p class="date w-100 d-block">
                                            Jan 13, 2021<i
                                                style={{ color: "#ff9292" }}
                                                class="fas fa-exclamation-circle ms-1"
                                            ></i>
                                        </p>
                                    </div>
                                    <div class="dots ms-auto align-self-start">
                                        <a href="javascript:void(0)">
                                            <i class="fas fa-ellipsis-h"></i
                                            ></a>
                                    </div>
                                </div>

                                <div
                                    class="side-list-item quote-item side-color-2680eb py-3 px-4 border-top d-flex align-items-center"
                                >
                                    <div class="num">#379</div>
                                    <div class="ms-3">
                                        <h4>Quote Title</h4>
                                        <p class="date w-100 d-block">Jan 13, 2021</p>
                                    </div>
                                    <div class="dots ms-auto align-self-start">
                                        <a href="javascript:void(0)">
                                            <i class="fas fa-ellipsis-h"></i
                                            ></a>
                                    </div>
                                </div>

                                <div
                                    class="side-list-item quote-item side-color-2680eb py-3 px-4 border-top d-flex align-items-center"
                                >
                                    <div class="num">#365</div>
                                    <div class="ms-3">
                                        <h4>Quote Title</h4>
                                        <p class="date w-100 d-block">Jan 13, 2021</p>
                                    </div>
                                    <div class="dots ms-auto align-self-start">
                                        <a href="javascript:void(0)">
                                            <i class="fas fa-ellipsis-h"></i
                                            ></a>
                                    </div>
                                </div>

                                <div
                                    class="side-list-item quote-item side-color-ffafaf py-3 px-4 border-top d-flex align-items-center"
                                >
                                    <div class="num">#365</div>
                                    <div class="ms-3">
                                        <h4>Quote Title</h4>
                                        <p class="date w-100 d-block">Jan 13, 2021</p>
                                    </div>
                                    <div class="dots ms-auto align-self-start">
                                        <a href="javascript:void(0)">
                                            <i class="fas fa-ellipsis-h"></i
                                            ></a>
                                    </div>
                                </div>

                                <div
                                    className="side-list-item quote-item side-color-none py-3 px-4 border-top d-flex align-items-center"
                                >
                                    <div className="num">#365</div>
                                    <div className="ms-3">
                                        <h4>Quote Title</h4>
                                        <p className="date w-100 d-block">Jan 13, 2021</p>
                                    </div>
                                    <div className="dots ms-auto align-self-start">
                                        <a href="javascript:void(0)">
                                            <i className="fas fa-ellipsis-h"></i
                                            ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-9 col-xxl-10">
                        <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                            <li className="nav-item  quote-details m-0" role="presentation">
                                <a
                                    className={`nav-link ${tabDetails} border-0`}

                                    id="quote-details-tab"
                                    data-bs-toggle="tab"
                                    href="#quote-details"
                                    role="tab"
                                    aria-controls="quote-details"
                                    aria-selected="true"
                                    onClick={() => setTabType("quoteDetails")}
                                >Quote Details</a
                                >
                            </li>
                            <li className="nav-item customer-info m-0" role="presentation">
                                <a
                                    className={`nav-link ${tabCustInfo} border-0`}


                                    id="customer-info-tab"
                                    data-bs-toggle="tab"
                                    href="#customer-info"
                                    role="tab"
                                    aria-controls="customer-info"
                                    aria-selected="true"
                                    onClick={() => setTabType("cutomerInfo")}
                                >Customer INFO</a
                                >
                            </li>
                            <li className="nav-item shipping-info m-0" role="presentation">
                                <a
                                    className={`nav-link ${tabShipInfo} border-0`}
                                    id="shipping-info-tab"
                                    data-bs-toggle="tab"
                                    href="#shipping-info"
                                    role="tab"
                                    aria-controls="shipping-info"
                                    aria-selected="true"
                                    onClick={() => setTabType("shipInfo")}
                                >Shipping INFO</a
                                >
                            </li>
                            <li className="nav-item files m-0" role="presentation">
                                <a
                                    className={`nav-link ${tabFileUpload} border-0`}
                                    id="files-tab"
                                    data-bs-toggle="tab"
                                    href="#files"
                                    role="tab"
                                    aria-controls="files"
                                    aria-selected="true"
                                    onClick={() => setTabType("fileUpload")}
                                >Files</a
                                >
                            </li>
                            <li className="nav-item notes m-0" role="presentation">
                                <a
                                    className={`nav-link ${tabNotes} border-0`}
                                    id="notes-tab"
                                    data-bs-toggle="tab"
                                    href="#notes"
                                    role="tab"
                                    aria-controls="notes"
                                    aria-selected="true"
                                    onClick={() => setTabType("Notes")}
                                >Notes</a
                                >
                            </li>
                            <span className="align-self-center m-auto search-customer">
                                <span className="d-flex">
                                    <form>
                                        <input
                                            placeholder="Search Customer"
                                            className="border-0 rounded-0"
                                            type="text"
                                        />
                                        <button className="border-0">
                                            <i><FontAwesomeIcon icon={fas, faSearch} /></i>
                                        </button>
                                    </form>
                                </span>
                            </span>
                        </ul>
                        <div className="tab-content" id="myTabContent">

                            {tabContent}



                        </div>
                    </div>

                </div>
            </div>


        </section>


    </>)

}


export default Quotes