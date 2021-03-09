import React, { useState, useEffect } from 'react';
import "./css/side-list.css";
import "./css/navbar.css";
import "./css/customer.css";
import CustomersInfo from "./customerInfo";
import { FontAwesomeIcon, i } from '@fortawesome/react-fontawesome'
import { faCoffee, fas, faTimes, faHome, faUsers, faCaretDown, faPlus, faSearch, faEdit, faTrash, faEllipsisH } from '@fortawesome/free-solid-svg-icons'


function Customers(props) {

  return (<>

    <section className="customer-section">
      <div className="container">
        <div className="row">
          {/* Side List Item */}
          <div className="col-lg-3 col-xxl-3 h-100">
            <div className="side-list-box customer-box">
              {/* Select and Plus Button */}
              <div className="px-3 pt-3 d-flex align-items-center">
                <h4>All Customers</h4>
                <button className="add-btn border-0 ms-auto">
                  <FontAwesomeIcon icon={fas, faPlus} />
                </button>
              </div>
              {/* Search */}
              <div className="px-3">
                <form
                  action="javascript:void(0)"
                  className="seacrh my-3 d-flex align-items-center px-2"
                >
                  <input
                    className="border-0 py-2"
                    type="search"
                    name="Seacrh"
                    placeholder="Search Customers"
                  />
                  <button className="border-0" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
              {/* customer Items */}
              <div className="side-list-item customer-item">
                {/* customer 1 */}
                <div
                  className="side-list-item customer-item py-3 px-2 border-top d-flex align-items-center"
                >
                  <div className="ms-3">
                    <h4>Name001</h4>
                    <p className="date w-100 d-block">Jan 13, 2021</p>
                  </div>
                  <div className="dots ms-auto align-self-start">
                    <a href="javascript:void(0)">
                      <i className="fas fa-ellipsis-h"></i
                      ></a>
                  </div>
                </div>
                {/* customer 2 */}
                <div
                  className="side-list-item customer-item py-3 px-2 border-top d-flex align-items-center"
                >
                  <div className="ms-3">
                    <h4>Name001</h4>
                    <p className="date w-100 d-block">Jan 13, 2021</p>
                  </div>
                  <div className="dots ms-auto align-self-start">
                    <a href="javascript:void(0)">
                      <i className="fas fa-ellipsis-h"></i
                      ></a>
                  </div>
                </div>
                {/* customer 3 */}
                <div
                  className="side-list-item customer-item py-3 px-2 border-top d-flex align-items-center"
                >
                  <div className="ms-3">
                    <h4>Name001</h4>
                    <p className="date w-100 d-block">Jan 13, 2021</p>
                  </div>
                  <div className="dots ms-auto align-self-start">
                    <a href="javascript:void(0)">
                      <i className="fas fa-ellipsis-h"></i
                      ></a>
                  </div>
                </div>
                {/* customer 4 */}
                <div
                  className="side-list-item customer-item py-3 px-2 border-top d-flex align-items-center"
                >
                  <div className="ms-3">
                    <h4>Name001</h4>
                    <p className="date w-100 d-block">Jan 13, 2021</p>
                  </div>
                  <div className="dots ms-auto align-self-start">
                    <a href="javascript:void(0)">
                      <i className="fas fa-ellipsis-h"></i
                      ></a>
                  </div>
                </div>
                {/* customer 5 */}
                <div
                  className="side-list-item customer-item py-3 px-2 border-top d-flex align-items-center"
                >
                  <div className="ms-3">
                    <h4>Name001</h4>
                    <p className="date w-100 d-block">Jan 13, 2021</p>
                  </div>
                  <div className="dots ms-auto align-self-start">
                    <a href="javascript:void(0)">
                      <i className="fas fa-ellipsis-h"></i
                      ></a>
                  </div>
                </div>
                {/* customer 6 */}
                <div
                  className="side-list-item customer-item py-3 px-2 border-top d-flex align-items-center"
                >
                  <div className="ms-3">
                    <h4>Name001</h4>
                    <p className="date w-100 d-block">Jan 13, 2021</p>
                  </div>
                  <div className="dots ms-auto align-self-start">
                    <a href="javascript:void(0)">
                      <i className="fas fa-ellipsis-h"></i
                      ></a>
                  </div>
                </div>
                {/* customer 7 */}
                <div
                  className="side-list-item customer-item py-3 px-2 border-top d-flex align-items-center"
                >
                  <div className="ms-3">
                    <h4>Name001</h4>
                    <p className="date w-100 d-block">Jan 13, 2021</p>
                  </div>
                  <div className="dots ms-auto align-self-start">
                    <a href="javascript:void(0)">
                      <i className="fas fa-ellipsis-h"></i
                      ></a>
                  </div>
                </div>
                {/* customer 8 */}
                <div
                  className="side-list-item customer-item py-3 px-2 border-top d-flex align-items-center"
                >
                  <div className="ms-3">
                    <h4>Name001</h4>
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
          {/* Customers Information */}
          <CustomersInfo></CustomersInfo>
        </div>
      </div>
    </section>

  </>)
}

export default Customers