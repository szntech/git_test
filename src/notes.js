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

function Notes(props) {

    const {totalPrice}=props;

    return (<>
        <div
            className="tab-pane active show fade p-3 pt-5"
            id="notes"
            role="tabpanel"
            aria-labelledby="notes-tab"
        >
            <div className="row">
                <div className="col-9">
                    <div className="col-6">

                        <div>
                            <div className="notes">
                                <h4>Notes</h4>
                                <div className="note bg-white p-3 mt-4">
                                    <div
                                        className="d-flex align-items-center justify-content-between"
                                    >
                                        <h4>Note 1</h4>
                                        <div className="date">Dec 12, 2020</div>
                                    </div>
                                    <p className="note-text my-2">
                                        Sed ut perspiciatis unde omnis iste natus error
                                        sit voluptatem accusantium doloremque laudantium,
                                        totam rem aperiam
                            </p>
                                </div>
                                <div className="note bg-white p-3 mt-4">
                                    <div
                                        className="d-flex align-items-center justify-content-between"
                                    >
                                        <h4>Note 2</h4>
                                        <div className="date">Dec 12, 2020</div>
                                    </div>
                                    <p className="note-text my-2">
                                        Sed ut perspiciatis unde omnis iste natus error
                                        sit voluptatem accusantium doloremque laudantium,
                                        totam rem aperiam
                            </p>
                                </div>
                                <div className="note bg-white p-3 mt-4">
                                    <div
                                        className="d-flex align-items-center justify-content-between"
                                    >
                                        <h4>Note 3</h4>
                                        <div className="date">Dec 12, 2020</div>
                                    </div>
                                    <p className="note-text my-2">
                                        Sed ut perspiciatis unde omnis iste natus error
                                        sit voluptatem accusantium doloremque laudantium,
                                        totam rem aperiam
                            </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <SideNotePanel totalPrice={totalPrice} />
            </div>
        </div>
    </>)
}

export default Notes;