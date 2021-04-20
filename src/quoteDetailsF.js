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
import EnterQuote from './EnterQuote'
import Suppliers from './Suppliers'
import CustomerTier from './customerTier'
import Skus from './skus'
import SaveQuote from './saveQuote'



import { FontAwesomeIcon, i } from '@fortawesome/react-fontawesome'
import { faCoffee, fas, faTimes, faHome, faUsers, faCaretDown, faPlus, faSearch, faEdit, faTrash, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import SideNotePanel from "./sideNotePanel";
function QuoteDetailsF(props) {

    let{quoteDetails,setQuoteDetails,totalPrice,customerTier,catalog,setCatalog,counter,setCounter,setSupplierSelected,supplierSelected}=props

   
    const [suppliers, setSuppliers] = useState([]);
    
   
    const [supplierIds, setSupplierIds] = useState([]);
    
    const [skuSelected, setSkuSelected] = useState(null);
   
    
    let [colorGray, setColorGray] = useState("colorGray")


    /*useEffect(() => {







        if (supplierIds.length > 0) {



            fetch(`${global.config.host}/catalog`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(supplierIds)
            }).then(res => res.json())
                .then(res => {
                    console.log(res, 'catalog')
                    setCatalog(res)




                });


        }




    }, [supplierIds])*/



    


    function handleSuppliers(array) {
        setSuppliers(array)
    }

    function handleSupplierChange(supplier) {

        setSupplierSelected(supplier)

        const found = catalog.find(row => row.relatedSupplier === parseInt(supplier.id))
        console.log(found, 'supliers')
        if (!found) {

            setSupplierIds([...supplierIds, supplier.id])
        }

        const newArray = quoteDetails.map((detail) => {




            detail.supplierId = supplier.id;
            detail.multiplier = supplier.multiplier;
            detail.sku = null;
            return detail;
        })
        setQuoteDetails(newArray)

    }


    function handleGlobalSkuChange(value) {

        console.log(catalog, 'catalog', " ", value, " ", supplierSelected)

        const found = catalog.find(element => element.sku === value && element.relatedSupplier === (parseInt(supplierSelected.id)))

        console.log(found, 'found')

        setSkuSelected(found)

        const newArray = quoteDetails.map((detail) => {




            detail.sku = found.sku;
            detail.price = found.price;
detail.description=found.description;
            return detail
        })
        setQuoteDetails(newArray)


    }

    function handleItemChange(newValue, id) {

        const newArray = quoteDetails.map((detail) => {


            if (detail.id === id) {
                detail.item = newValue
                const found = catalog.find(element => {

                    console.log(element.item.toUpperCase().trim() === newValue.toUpperCase().trim())
                    if(!(skuSelected===null)){
                        return element.item.toUpperCase().trim() == newValue.toUpperCase().trim()&&parseInt(element.relatedSupplier)===parseInt(supplierSelected.id)&&element.sku===skuSelected.sku;
                    }else{
                    return element.item.toUpperCase().trim() == newValue.toUpperCase().trim()&&parseInt(element.relatedSupplier)===parseInt(supplierSelected.id);
                    }
                })
                console.log(found, 'item')
                if (found) {
                    setColorGray(null)
                } else {
                    setColorGray("colorGray")
                }


                detail.supplierId = supplierSelected && found ? supplierSelected.id : null;
                detail.multiplier = supplierSelected && found ? supplierSelected.multiplier : null;
                console.log(skuSelected, 'skuSelected.sku')
                detail.sku = found ? found.sku : null;
                detail.price = found ? found.price : 0;
                detail.description = found ? found.description : null;
            }
            return detail
        })
        setQuoteDetails(newArray)
    }


    function handleSupplierSelected(newValue, id) {

        const supplier = suppliers.find(supplier => supplier.id === parseInt(newValue))

        const found = catalog.find(row => row.relatedSupplier === parseInt(newValue))

        if (!found) {

            setSupplierIds([...supplierIds, newValue])
        }

        const newArray = quoteDetails.map((detail) => {


            if (detail.id === id) {

                detail.supplierId = supplier.id;
                detail.multiplier = supplier.multiplier;
                detail.sku = null;
                detail.price = null;
                detail.multiplier = 0;
            }
            return detail
        })
        setQuoteDetails(newArray)

    }


    function handleSkuChange(value, id) {
        const newArray = quoteDetails.map((detail) => {

            if (detail.id === id) {

                const found = catalog.find(element => element.sku === value && element.relatedSupplier === parseInt(detail.supplierId))

                console.log(found, 'foundSku')
                detail.sku = found.sku;
                console.log(catalog);
                detail.price = found.price;
                detail.multiplier = suppliers.find(supplier => supplier.id === detail.supplierId).multiplier
            }
            return detail
        })
        setQuoteDetails(newArray)
    }


    function handleQtyChange(value, id) {

        const newArray = quoteDetails.map((detail) => {


            if (detail.id === id) {
                detail.qty = value
            }
            return detail
        })
        setQuoteDetails(newArray)


    }

    function deleteRow(id) {
        const newArray = quoteDetails.filter(detail => detail.id != id)

        setQuoteDetails(newArray)

    }

    return (<>
        <div
            className="tab-pane fade show active p-3 pt-5"
            id="quote-details"
            role="tabpanel"
            aria-labelledby="quote-details-tab"
        >
            <div className="row">
                <div className="col-9">
                    <div
                        className="d-m-w-1600-block d-flex align-items-center border-bottom pb-4"
                    >
                        <div>
                            <h4>Apartment 2 <FontAwesomeIcon icon={fas, faEdit} /></h4>

                        </div>
                        <div className="quick-details-buttons ms-auto mt-m-w-1600-5">
                            <a
                                className="button add-apartment-btn"
                                href="javascript:void(0)"
                            ><img
                                    style={{ marginTop: "-2px" }}
                                    src={plusIcon}
                                    alt="plus"
                                    className="img-fluid me-1"
                                />Add Apartment
                                                </a>
                            <a className="button reset-btn" href="javascript:void(0)"
                            ><img
                                    style={{ marginTop: "-2px" }}
                                    src={resetIcon}
                                    alt="plus"
                                    className="img-fluid me-1"
                                />Reset</a
                            >
                            <span className="button upload-quote-btn">
                                <img
                                    src={uploadIcon}
                                    alt="plus"
                                    className="img-fluid me-1"
                                />
                                <input id="upload-quote" name="photo" type="file" />
                                <label for="upload-quote">Upload Quote</label>
                            </span>
                            <span className="dropdown">
                                <a
                                    className="button dropdown-toggle"
                                    href="#"
                                    role="button"
                                    id="dropdownMenuLink1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Customer Tier
                                                    </a>

                                <span
                                    className="dropdown-menu border-0"
                                    aria-labelledby="dropdownMenuLink1"
                                >
                                    <span>
                                        <label
                                            className="d-flex align-items-center dropdown-item"
                                            for="first-check-1"
                                        >
                                            <input type="checkbox" id="first-check-1" />
                                            <span className="ms-1">Lebel 1</span>
                                        </label>
                                    </span>
                                    <span>
                                        <label
                                            className="d-flex align-items-center dropdown-item"
                                            for="second-check-1"
                                        >
                                            <input type="checkbox" id="second-check-1" />
                                            <span className="ms-1">Lebel 2</span>
                                        </label>
                                    </span>
                                    <span>
                                        <label
                                            className="d-flex align-items-center dropdown-item"
                                            for="third-check-1"
                                        >
                                            <input type="checkbox" id="third-check-1" />
                                            <span className="ms-1">Lebel 3</span>
                                        </label>
                                    </span>
                                    <span>
                                        <form className="dropdoen-item px-2 my-4">
                                            <div class="w-100 position-relative">
                                                <input
                                                    type="text"
                                                    className="btn btn-outline-light bg-white mw-100 text-start"
                                                    placeholder="Curstom Amount"
                                                />
                                                <button
                                                    className="position-absolute m-0 p-0 border-0"
                                                >
                                                    <i class="fas fa-chevron-circle-right"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </span>
                                </span>
                            </span>
                            <span className="button select-btn position-relative">
                                <div className="d-inline px-2">
                                    <Suppliers handleSupplierChange={handleSupplierChange} handleSuppliers={handleSuppliers} suppliers={suppliers} ></Suppliers>
                                </div>
                                <i
                                    class="fas fa-caret-down ms-2 text-dark position-absolute"
                                ></i>
                            </span>
                            <span className="button select-btn position-relative">
                                <div className="d-inline px-2.5">
                                    <Skus supplierSelected={supplierSelected} handleGlobalSkuChange={handleGlobalSkuChange} />
                                </div>
                                <i
                                    class="fas fa-caret-down ms-2 text-dark position-absolute"
                                ></i>
                            </span>
                        </div>
                    </div>

                    <table className="table mt-3">
                        <thead>
                            <tr>
                                <th className="ps-3 py-3" scope="col">Item</th>
                                <th className="py-3" scope="col">Supplier</th>
                                <th className="py-3" scope="col">sku</th>
                                <th className="py-3" scope="col">Description</th>
                                <th className="py-3" scope="col">QTY</th>
                                <th colspan="2" className="pe-3 py-3" scope="col">
                                    Price
                                                    </th>
                            </tr>
                        </thead>
                        <tbody>

                            {quoteDetails.map(detail => <EnterQuote colorGray={colorGray} detail={detail} customerTier={customerTier} key={detail.id} handleItemChange={handleItemChange} suppliers={suppliers} handleSupplierSelected={handleSupplierSelected} supplierSelected={supplierSelected} handleSkuChange={handleSkuChange} catalog={catalog} handleQtyChange={handleQtyChange} deleteRow={deleteRow} />)}
                        </tbody>
                    </table>
                    <div className="add-new-row-btn text-center my-2">
                        <span className="w-100 h-100 d-block"
                            onClick={() => {
                                setQuoteDetails([...quoteDetails, { item: null, supplierId: null, description: "description", sku: null, price: 0, qty: 1, multiplier: 0, id: counter }])
                                setCounter(++counter)
                            }}
                        >Add a new row</span>
                    </div>
                </div>
                <SideNotePanel totalPrice={totalPrice} saveQuote={props.saveQuote} />
            </div>
        </div>


    </>)
}
export default QuoteDetailsF;