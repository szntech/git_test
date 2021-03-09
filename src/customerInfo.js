import React, { useState, useEffect } from 'react';
import "./css/side-list.css";
import "./css/navbar.css";
import "./css/customer.css";

function CustomerInfo(props) {

    return (<>

        <div className="col-lg-9 co-xl-9 h-100">
            <button className="border-0 bg-white customer-info-title">
                Customer Information
            </button>
            {/* Customers Info */}
            <div className="customers-info bg-white">
                {/* Customer Details */}
                <div className="customer-details">
                    <div className="d-flex align-items-center">
                        <h4>Quibic Company</h4>
                        <button className="btn btn-outline-danger ms-2 py-1 px-3">
                            Edit
                  </button>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <div className="details">
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
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="details">
                                <div className="d-flex align-items-center my-2">
                                    <h6>Phone</h6>
                                    <p>+1 132 654 8974</p>
                                </div>
                                <div className="d-flex align-items-center my-2">
                                    <h6>Email</h6>
                                    <p>yourmail@mail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Customer Quotes */}
                <div className="customer-quotes mt-5">
                    <div className="d-flex align-items-center">
                        <h4>Quote List</h4>
                        <a
                            href="create-quote.html"
                            className="btn btn-outline-primary ms-2 py-1 px-3"
                        >
                            Create new Quotes
                  </a>
                    </div>
                    {/* Table */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="ps-3 py-3" scope="col">Quotes Tiltle</th>
                                <th className="py-3" scope="col">Type</th>
                                <th className="py-3" scope="col">Shipping Address</th>
                                <th className="py-3" scope="col">Email</th>
                                <th className="py-3" scope="col">Status</th>
                                <th className="py-3" scope="col">Amount</th>
                                <th colspan="2" className="pe-3 py-3" scope="col">
                                    09 Dec 2019
                      </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Table Row */}
                            <tr>
                                <td className="quote-title d-flex align-items-center">
                                    <div className="round-checkbox me-4">
                                        <input type="checkbox" id="quote-title-checkbox-1" />
                                        <label for="quote-title-checkbox-1"></label>
                                    </div>
                                    <span>Quote Title</span>
                                </td>
                                <td className="type">
                                    <p className="master-mode">Master Mode</p>
                                </td>
                                <td className="shipping-address">
                                    <p>Phoenix City</p>
                                </td>
                                <td className="email">
                                    <p>your@mail.com</p>
                                </td>
                                <td className="status">
                                    <p>In Progress</p>
                                </td>
                                <td className="amount">
                                    <p>$34,654</p>
                                </td>
                                <td className="date">
                                    <p>09 Dec 2019</p>
                                </td>
                                <td>
                                    <div className="delete py-1 px-2 text-center">
                                        <a href="javascript:void(0)"
                                        ><i className="fas fa-trash"></i
                                        ></a>
                                    </div>
                                </td>
                            </tr>
                            {/* Table Row */}
                            <tr className="align-items-center">
                                <td className="quote-title d-flex align-items-center">
                                    <div className="round-checkbox me-4">
                                        <input type="checkbox" id="quote-title-checkbox-2" />
                                        <label for="quote-title-checkbox-2"></label>
                                    </div>
                                    <span>Quote Title</span>
                                </td>
                                <td className="type">
                                    <p className="individual-mode">Individual mode</p>
                                </td>
                                <td className="shipping-address">
                                    <p>Phoenix City</p>
                                </td>
                                <td className="email">
                                    <p>your@mail.com</p>
                                </td>
                                <td className="status">
                                    <p>In Progress</p>
                                </td>
                                <td className="amount">
                                    <p>$34,654</p>
                                </td>
                                <td className="date">
                                    <p>09 Dec 2019</p>
                                </td>
                                <td>
                                    <div className="delete py-1 px-2 text-center">
                                        <a href="javascript:void(0)"
                                        ><i className="fas fa-trash"></i
                                        ></a>
                                    </div>
                                </td>
                            </tr>
                            {/* Table Row */}
                            <tr className="align-items-center">
                                <td className="quote-title d-flex align-items-center">
                                    <div className="round-checkbox me-4">
                                        <input type="checkbox" id="quote-title-checkbox-3" />
                                        <label for="quote-title-checkbox-3"></label>
                                    </div>
                                    <span>Quote Title</span>
                                </td>
                                <td className="type">
                                    <p className="individual-mode">Individual mode</p>
                                </td>
                                <td className="shipping-address">
                                    <p>Phoenix City</p>
                                </td>
                                <td className="email">
                                    <p>your@mail.com</p>
                                </td>
                                <td className="status">
                                    <p>In Progress</p>
                                </td>
                                <td className="amount">
                                    <p>$34,654</p>
                                </td>
                                <td className="date">
                                    <p>09 Dec 2019</p>
                                </td>
                                <td>
                                    <div className="delete py-1 px-2 text-center">
                                        <a href="javascript:void(0)"
                                        ><i className="fas fa-trash"></i
                                        ></a>
                                    </div>
                                </td>
                            </tr>
                            {/* Table Row */}
                            <tr className="align-items-center">
                                <td className="quote-title d-flex align-items-center">
                                    <div className="round-checkbox me-4">
                                        <input type="checkbox" id="quote-title-checkbox-4" />
                                        <label for="quote-title-checkbox-4"></label>
                                    </div>
                                    <span>Quote Title</span>
                                </td>
                                <td className="type">
                                    <p className="master-mode">Master mode</p>
                                </td>
                                <td className="shipping-address">
                                    <p>Phoenix City</p>
                                </td>
                                <td className="email">
                                    <p>your@mail.com</p>
                                </td>
                                <td className="status">
                                    <p>In Progress</p>
                                </td>
                                <td className="amount">
                                    <p>$34,654</p>
                                </td>
                                <td className="date">
                                    <p>09 Dec 2019</p>
                                </td>
                                <td>
                                    <div className="delete py-1 px-2 text-center">
                                        <a href="javascript:void(0)"
                                        ><i className="fas fa-trash"></i
                                        ></a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </>)
}
export default CustomerInfo