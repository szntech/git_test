import React, { useState, useEffect } from 'react';
import "./css/side-list.css";
import "./css/navbar.css";
import "./css/customer.css";
import CustomersInfo from "./customerInfo";
import { FontAwesomeIcon, i } from '@fortawesome/react-fontawesome'
import { faCoffee, fas, faTimes, faHome, faUsers, faCaretDown, faPlus, faSearch, faEdit, faTrash, faEllipsisH } from '@fortawesome/free-solid-svg-icons'


function Customers(props) {

  const [customers, setCustomers] = useState([]);
  const [searchResults,setSearchResults]=useState([]);
  const [selectedCustomer,setSelectedCustomer]= useState(null);
console.log(selectedCustomer,'selectedCustomer')

const displayCustomers=searchResults.length>0?searchResults:customers;

  useEffect(() => {


    fetch(`${global.config.host}/customers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }

    }).then(res => res.json())
      .then(res => {

        console.log(res, 'customers')
        setCustomers(res)

      })

  }, [])


  function handleSearchChange(results) {

    console.log(results)

    const filtered=customers.filter(customer=>customer.CompanyName.includes(results))
    console.log(filtered,'filtered')
    setSearchResults(filtered)
  }

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
                    onChange={(value)=>handleSearchChange(value.target.value)}
                  />
                  <button className="border-0" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
              {/* customer Items */}
              <div className="side-list-item customer-item">

                {displayCustomers.map((customer) => {

                  return (<div onClick={()=>setSelectedCustomer(customer.RelatedCustomer)}
                    className="side-list-item customer-item py-3 px-2 border-top d-flex align-items-center"
                  >
                    <div className="ms-3">
                      <h4>{customer.CompanyName}</h4>
                      <p className="date w-100 d-block">Jan 13, 2021</p>
                    </div>
                    <div className="dots ms-auto align-self-start">
                      <a href="javascript:void(0)">
                        <i className="fas fa-ellipsis-h"></i
                        ></a>
                    </div>
                  </div>)
                })}

              </div>
            </div>
          </div>
          {/* Customers Information */}
          <CustomersInfo selectedCustomer={selectedCustomer}></CustomersInfo>
        </div>
      </div>
    </section>

  </>)
}

export default Customers