import React, { useState, useEffect } from 'react';
import contactsImg from "./img/home/contacts.svg";
import customers from "./img/home/customers.svg";
import Logo from "./img/quotes/logo.png";
import Admin from "./img/home/admin.png";
import AllQuotesImg from "./img/home/all-quotes.svg"
import QuotesImg from "./img/home/quotes.svg";
import supplierImg from "./img/home/suppliers.svg"
import allCustomerImg from "./img/home/all-customers.svg";
import imgCircle from "./img/home/plus-circle.svg";
import CreatQuote from "./createQuote";
import { Link } from 'react-router-dom';


function Home(props) {
  const [quotesButton, setQuotesButton] = useState(true);
  const [customerButton, setCustomerButton] = useState(true);

  const displayCardQuote = quotesButton ? <div className="icon-text">
    <img
      src={QuotesImg}
      alt="quotes"
      className="img-fluid"
    />
    <h5 className="mt-3" onClick={() => setQuotesButton(false)}>Quotes</h5>
  </div> : <div className="card-buttons w-100 h-100">

      <Link
        className="w-100 d-flex align-items-center justify-content-center"
        to="createQuote"
      ><img
          src={imgCircle}
          alt="quotes"
          className="img-fluid me-2"
        />
        <span>Create Quote</span>
      </Link>
      <Link
        className="w-100 d-flex align-items-center justify-content-center mt-4"
        to="quotes"
      ><img
          src={AllQuotesImg}
          alt="quotes"
          className="img-fluid me-2"
        />
        <span>All Quote</span>
      </Link>

    </div>;

  const displayCardCustomers = customerButton ? <div className="icon-text">
    <img
      src={customers}
      alt="customers"
      className="img-fluid"
    />
    <h5 classNameName="mt-3" onClick={() => setCustomerButton(false)}>Customers</h5>
  </div> :
    <div className="card-buttons w-100 h-100">
      <Link className="w-100 d-flex align-items-center justify-content-center" to="/addCustomer" >
        <img
          src={imgCircle}
          alt="quotes"
          className="img-fluid me-2"
        />
        <span>Add Customer</span>
      </Link>

      <Link
        className="w-100 d-flex align-items-center justify-content-center mt-4"
        to="/customers"
      ><img
          src={allCustomerImg}
          alt="quotes"
          className="img-fluid me-2"
        />
        <span>All Customers</span>
      </Link>
    </div>
  return (<>
    <header className="header-section">
      <nav
        className="navbar navbar-expand-lg py-4 align-items-center position-absolute w-100"
      >
        <div className="container">
          <Link className="navbar-brand" to="home"
          ><img src={Logo} alt="logo" className="img-fluid"
            /></Link>
          <div className="collapse navbar-collapse align-items-center">

            <Link

              className="admin d-flex align-items-center ms-auto"
            >
              <img
                /*src={Admin}*/
                alt="admin"
                className="admin-img me-2"
              />
              <div className="name">
                <h5>Yitzy Link</h5>
                <p>Admin</p>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>

    <section className="home-section d-flex align-items-center">
      <div className="container">

        <div className="home-content">
          <div className="row justify-content-end">

            <div className="col-lg-5 col-xxl-6 align-self-end">
              <div
                className="row gy-0 gx-5 home-cards text-center align-items-center"
              >

                <div style={{ marginTop: "-80px" }} className="col-6 customers-card-col">
                  <div className="home-card customers-card text-center">
                    {displayCardCustomers}
                  </div>
                </div>
                <div className="col-6 mt-5 contacts-card-col">
                  <div className="home-card contacts-card text-center mt-5">
                    <div className="icon-text">
                      <img
                        src={contactsImg}
                        alt="contacts"
                        className="img-fluid"
                      />
                      <h5 className="mt-3">Contacts</h5>
                    </div>
                  </div>
                </div>
                <div
                  style={{ marginTop: "-100px" }}
                  className="col-6 ps-0 quotes-card-col"
                >
                  <div className="home-card quotes-card text-center">

                    {displayCardQuote}
                  </div>
                </div>
                <div className="col-6 mt-5 suppliers-card-col">
                  <div className="home-card suppliers-card text-center mt-5">
                    <div className="icon-text">
                      <img
                        src={supplierImg}
                        alt="suppliers"
                        className="img-fluid"
                      />
                      <h5 className="mt-3">Suppliers</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>

  )
}



export default Home