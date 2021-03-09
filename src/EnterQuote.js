import React, { useState, useEffect } from 'react';
import Img from './x2.jpg'
import { FontAwesomeIcon, i } from '@fortawesome/react-fontawesome'
import { faCoffee, fas, faTimes, faHome, faUsers, faCaretDown, faPlus, faSearch, faEdit, faTrash, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
function EnterQuote(props) {

    const [supplierId, setSupplierId] = useState(null);


    function handleSupplierChange(value, id) {

        setSupplierId(value)

        props.handleSupplierSelected(value, id)

    }
    console.log(props.detail.sku, 'props.detail.sk')
 
    return (
        <>
            <tr>
                <td className="p-2 ps-0 "><input type="text" placeholder="Example" className="w-100 border-0 px-2" value={props.detail.item} onChange={(value) => props.handleItemChange(value.target.value, props.detail.id)}></input></td>
                <td className="p-2">
                    <div
                        className="select d-flex justify-content-between px-2 align-items-center position-relative"
                    >
                        <select className={`border-0 w-100 ${getClass(props.detail.supplierId)}`}  value={props.detail.supplierId} onChange={(value) => handleSupplierChange(value.target.value, props.detail.id)}>
                            <option hidden >Choose Supplier</option>
                            {props.suppliers.map(supplier => <option value={supplier.id} className="colorBlack">{supplier.name}</option>)}

                        </select>
                        <i
                            className="fas fa-caret-down ms-2 text-dark position-absolute"
                        ></i>
                    </div>
                </td>
                <td className="p-2">
                    <div
                        className="select d-flex justify-content-between px-2 align-items-center position-relative"
                    >
                        <select className={`border-0 w-100 ${getClass(props.detail.sku)}`} value={props.detail.sku} onChange={(e) => props.handleSkuChange(e.target.value, props.detail.id)}>
                            <option hidden>Choose Sku</option>
                            {props.detail.item && props.catalog.filter(element => (element.item).trim().toUpperCase() === (props.detail.item.trim().toUpperCase()) && (element.relatedSupplier === props.detail.supplierId)).
                                map(element => <option className="colorBlack" key={element.sku} value={element.sku}>{element.sku}</option>)}

                        </select>
                        <i
                            className="fas fa-caret-down ms-2 text-dark position-absolute"
                        ></i>
                    </div>
                </td>
                <td className="p-2">
                    <input
                        type="text"
                       
                        className={`w-100 border-0 px-2 ${getClass(props.detail.sku)}`}
                        value={props.detail.description}
                    />
                </td>
                <td className="p-2 qty-td"><input className="qty px-2 border-0" type='number' min='1' value={props.detail.qty} onChange={(e) => props.handleQtyChange(e.target.value, props.detail.id)}></input></td>
                <td className="p-2 price-td"><input className="price text-center px-2 border-0" value={`$${(props.detail.price * props.detail.qty * (props.detail.multiplier * props.customerTier.multiplier)).toFixed(2)}`}></input></td>
                <td className="p-2 pe-0"><div className="delete px-2 text-center"><FontAwesomeIcon
                    style={{ color: "#ff6d6d" }}
                    icon={fas, faTrash}
                    onClick={() => props.deleteRow(props.detail.id)}
                /></div></td>
            </tr>

        </>

    );
}



export default EnterQuote;


function getClass(value){
if(value===null){
    return "colorGray"
}
return null
}