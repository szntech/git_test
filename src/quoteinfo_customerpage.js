import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Link, Route, Switch, useHistory } from 'react-router-dom';
import "./css/side-list.css";
import "./css/navbar.css";
import "./css/customer.css";


function QuoteInfoPage(props){

const {quotesInfo}=props;





    function handleClick(quoteNum) {

        /* console.log('history clicked')
         history.push({
             pathname:  `/quotes/${quoteNum}`,
             
          });*/
    };

return(<>
    
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
                                <th className="py-3" scope="col">Quotes #</th>
                                <th className="py-3" scope="col">Type</th>
                                <th className="py-3" scope="col">Shipping Address</th>
                                <th className="py-3" scope="col">Email</th>
                                <th className="py-3" scope="col">Status</th>
                                <th className="py-3" scope="col">Amount</th>
                                <th className="py-3" scope="col">Date Created</th>
                                <th colspan="2" className="pe-3 py-3" scope="col">
                                    Shipping Date
                      </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Table Row */}

                            {quotesInfo.map((quote) => {
                                return (
                                    <tr onClick={() => handleClick(quote.id)}>
                                        <Link to={`/quotes/${quote.id}`}>
                                            <td className="quote-title d-flex align-items-center">
                                                <div className="round-checkbox me-4">
                                                    <input type="checkbox" id="quote-title-checkbox-1" />
                                                    <label for="quote-title-checkbox-1"></label>
                                                </div>
                                                <span>Quote Title</span>
                                            </td>
                                        </Link>
                                        <td className="quote-number">
                                            <p className="master-mode">{`${quote.id}`}</p>
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
                                            <p>{new Date(quote.dateCreated).toLocaleDateString()}</p>
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
                                )
                            })}


                        </tbody>
                    </table>
                </div>
    
    
    </>)
}

export default QuoteInfoPage;