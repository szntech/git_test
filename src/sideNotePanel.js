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
import SaveQuote from "./saveQuote";

import { FontAwesomeIcon, i } from '@fortawesome/react-fontawesome'
import { faCoffee, fas, faTimes, faHome, faUsers, faCaretDown, faPlus, faSearch, faEdit, faTrash, faEllipsisH } from '@fortawesome/free-solid-svg-icons'


function SideNotePanel(props) {


    return (<>
        <div className="col-3">
            <div className="side-notes">
                <div>

                    <h4>Notes</h4>
                    <textarea
                        placeholder="Thanks for your business"
                        className="thanks-for-your-business w-100 my-3 p-2 border-0"
                    ></textarea>
                </div>
                <div>
                    <h4>Attach Files</h4>
                    <div
                        className="my-3 file-uploader w-100 d-flex align-items-center justify-content-center"
                    >
                        <p>
                            Drag Files or
                                                    <label for="upload-photo-1">Browse</label>
                            <input
                                type="file"
                                name="photo"
                                id="upload-photo-1"
                            />
                        </p>
                    </div>
                    <div className="upload-file my-2">
                        <div className="meida d-flex align-items-center">
                            <span className="me-3">Image.jpeg</span>
                            <div className="media-body align-self-center">
                                <div className="upload-processing w-100 bg-light">
                                    <div
                                        style={{ width: "50%" }}
                                        className="bg-primary uploaded-size"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="notes-price">
                    <div className="border-top py-4 my-4">
                        <div
                            className="subtotal d-flex justify-content-between align-items-center my-2"
                        >
                            <h4>Subtotal</h4>
                            <h4>${props.totalPrice.toFixed(2)}</h4>
                        </div>
                        <div
                            className="add-discount d-flex justify-content-between align-items-center my-2"
                        >
                            <h4>Add Discount</h4>
                        </div>
                        <div
                            className="add-discount d-flex justify-content-between align-items-center my-2"
                        >
                            <h4>Add Tax</h4>
                        </div>
                        <div className="total-price border-top mt-4">
                            <div
                                className="total d-flex justify-content-between align-items-center my-2"
                            >
                                <h4>Total</h4>
                                <h4>${props.totalPrice.toFixed(2)}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="currency">
                    <h4>Currency</h4>
                    <div className="currency-select mt-3">
                        <div
                            className="select d-flex justify-content-between px-2 align-items-center position-relative"
                        >
                            <select className="border-0 w-100">
                                <option value="USD">USD</option>
                                <option value="Euro">Euro</option>
                                <option value="TAKA ">TAKA</option>
                            </select>
                            <i
                                class="fas fa-caret-down ms-2 text-dark position-absolute"
                            ></i>
                        </div>
                    </div>
                </div>

                <div
                    className="print-and-share d-flex justify-content-between mt-5"
                >
                    <div className="print">
                        <a onclick="window.print()" href="javascript:void(0)"
                        ><img
                                style={{ marginTop: "-2px" }}
                                src={printImg}
                                alt="plus"
                                className="img-fluid me-1 d-none d-xxl-inline-block"
                            />Print</a
                        >
                    </div>
                    <div className="share">
                        <a href="javascript:void(0)"
                        ><img
                                style={{ marginTop: "-2px" }}
                                src={shareImg}
                                alt="plus"
                                className="img-fluid me-1 d-none d-xxl-inline-block"
                            />Share</a
                        >
                        
                    </div>
                </div>

                <SaveQuote saveQuote={props.saveQuote}></SaveQuote>

            </div>

        </div>
    </>)

}

export default SideNotePanel;