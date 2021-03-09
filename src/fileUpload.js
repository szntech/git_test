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
function FileUpload(props) {

    const {totalPrice}=props;
    return (<>
        <div
            class="tab-pane active show fade p-3 pt-5"
            id="files"
            role="tabpanel"
            aria-labelledby="files-tab"
        >
            <div class="row">
                <div class="col-9">
                    <div class="col-6">

                        <div>
                            <h4>Attach Files</h4>
                            <div
                                class="my-3 file-uploader w-100 d-flex align-items-center justify-content-center"
                            >
                                <p>
                                    Drag Files or
                            <label for="upload-photo-2">Browse</label>
                                    <input
                                        type="file"
                                        name="photo"
                                        id="upload-photo-2"
                                    />
                                </p>
                            </div>
                            <div class="mt-4">
                                <div
                                    class="d-flex justify-content-between align-items-center my-2"
                                >
                                    <p>image.jpeg</p>
                                    <a href="javascript:void(0)">Download</a>
                                </div>
                                <div
                                    class="d-flex justify-content-between align-items-center my-2"
                                >
                                    <p>image01.jpeg</p>
                                    <a href="javascript:void(0)">Download</a>
                                </div>
                                <div
                                    class="d-flex justify-content-between align-items-center my-2"
                                >
                                    <p>image03.jpeg</p>
                                    <a href="javascript:void(0)">Download</a>
                                </div>
                                <div
                                    class="d-flex justify-content-between align-items-center my-2"
                                >
                                    <p>image.jpeg</p>
                                    <a href="javascript:void(0)">Download</a>
                                </div>
                                <div
                                    class="d-flex justify-content-between align-items-center my-2"
                                >
                                    <p>image01.jpeg</p>
                                    <a href="javascript:void(0)">Download</a>
                                </div>
                                <div
                                    class="d-flex justify-content-between align-items-center my-2"
                                >
                                    <p>image03.jpeg</p>
                                    <a href="javascript:void(0)">Download</a>
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
export default FileUpload;