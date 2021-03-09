import React, { useState, useEffect } from 'react';
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
import SideNotePanel from "./sideNotePanel";
function shippingInfo(props) {
    const {totalPrice}=props;

    return (<>
       <div
                class="tab-pane active show fade p-3 pt-5"
                id="shipping-info"
                role="tabpanel"
                aria-labelledby="shipping-info-tab"
              >
                <div class="row">
                <div className="col-9">
                    <div className="col-12 col-xxl-10">
                        <div className="row">
                            <div className="col-6">

                                <div className="shipping-from">
                                    <p style={{ color: "#cfcfcf" }}>Shipping From</p>
                                    <h4>Quibic Company</h4>
                                    <div className="details mt-3">
                                        <div className="d-flex align-items-center my-2">
                                            <h6>Full name</h6>
                                            <p>John Doe</p>
                                        </div>
                                        <div className="d-flex align-items-center my-2">
                                            <h6>State</h6>
                                            <p>California, USA</p>
                                        </div>
                                        <div className="d-flex align-items-center my-2">
                                            <h6>City</h6>
                                            <p>Phoenix City</p>
                                        </div>
                                        <div className="d-flex align-items-center my-2">
                                            <h6>Zipcode</h6>
                                            <p>13217</p>
                                        </div>
                                        <div className="d-flex align-items-center my-2 mt-4">
                                            <h6>Phone</h6>
                                            <p>+1 132 654 8974</p>
                                        </div>
                                        <div className="d-flex align-items-center my-2">
                                            <h6>Email</h6>
                                            <p>yourmail@mail.com</p>
                                        </div>
                                        <div className="d-flex align-items-center my-4">
                                            <h6>Date:</h6>
                                            <p>Jan 15, 2021</p>
                                        </div>
                                    </div>
                                    <div className="button-box mt-2">
                                        <a
                                            href="javascript:void(0)"
                                            class="btn btn-outline-danger bg-white"
                                        >Edit</a
                                        >
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">

                                <div className="shipping-to">
                                    <p style={{ color: "#cfcfcf" }}>Shipping To</p>
                                    <h4>Malki1352 Company</h4>
                                    <div className="details mt-3">
                                        <div className="d-flex align-items-center my-2">
                                            <h6>Full name</h6>
                                            <p>John Doe</p>
                                        </div>
                                        <div className="d-flex align-items-center my-2">
                                            <h6>State</h6>
                                            <p>California, USA</p>
                                        </div>
                                        <div className="d-flex align-items-center my-2">
                                            <h6>City</h6>
                                            <p>Phoenix City</p>
                                        </div>
                                        <div className="d-flex align-items-center my-2">
                                            <h6>Zipcode</h6>
                                            <p>13217</p>
                                        </div>
                                        <div className="d-flex align-items-center my-2 mt-4">
                                            <h6>Phone</h6>
                                            <p>+1 132 654 8974</p>
                                        </div>
                                        <div className="d-flex align-items-center my-2">
                                            <h6>Email</h6>
                                            <p>yourmail@mail.com</p>
                                        </div>
                                        <div className="d-flex align-items-center my-4">
                                            <h6>Date:</h6>
                                            <p>Jan 15, 2021</p>
                                        </div>
                                    </div>
                                    <div className="button-box mt-2">
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-outline-danger bg-white"
                                        >Edit</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SideNotePanel totalPrice={totalPrice}  />
            </div>
        </div>
    </>)

}
export default shippingInfo;
