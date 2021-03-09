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
import { Link } from 'react-router-dom';

import { FontAwesomeIcon, i } from '@fortawesome/react-fontawesome'
import { faCoffee, fas, faTimes, faHome, faUsers, faCaretDown, faPlus, faSearch, faEdit, faTrash, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
function Header(props) {

    return (<>
    
    <header className="header-section">
            <nav
                className="navbar navbar-expand-lg bg-white py-4 px-xxl-5 align-items-center border-bottom"
            >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="home"
                    ><img src={logo} alt="logo" className="img-fluid"
                        /></Link>
                    <Link
                        to="javascript:void(0)"
                        className="back d-flex align-items-center ms-5 ps-5"
                    >
                        <img className="me-2" src={backIcon} alt="back" />
                        <p className="para-text">Back</p>
                    </Link>
                    <div className="collapse navbar-collapse align-items-center">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active d-flex align-items-center"
                                    aria-current="page"
                                    to="home"
                                ><i><FontAwesomeIcon icon={fas, faHome} /></i><span>Home</span></Link
                                >
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link d-flex align-items-center"
                                    to="javascript:void(0)"
                                ><FontAwesomeIcon style={{ color: "#c4ac7a", fontSize: "16px", borderBottom: "2.5px solid #3e3643" }} icon={fas, faUsers} /><span>Customers</span></Link
                                >
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link d-flex align-items-center"
                                    to="javascript:void(0)"
                                >
                                    <img
                                        src={supplierIcon}
                                        alt="suppliers"
                                        className="img-fluid me-1"
                                    />
                                    <span>Suppliers</span></Link
                                >
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link d-flex align-items-center"
                                    to="javascript:void(0)"
                                ><img
                                        src={contactsIcon}
                                        alt="admin"
                                        className="img-fluid me-1"
                                    /><span>Contacts</span></Link
                                >
                            </li>
                        </ul>
                        <Link
                            to="javascript:void(0)"
                            className="admin d-flex align-items-center"
                        >
                            <img
                                src="img/quotes/admin.png"
                                alt="admin"
                                className="admin-img me-2"
                            />
                            <div className="name">
                                <h5>John Doe</h5>
                                <p>Admin</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </nav>
        </header>

    </>)

}

export default Header;