import React, { useState, useEffect } from 'react';
import EnterQuote from './EnterQuote'

function Companys(props) {

    


    useEffect(() => {

        if (props.suppliers.length === 0) {

            fetch(`https://${global.config.host}/Suppliers`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }

            }).then(res => res.json())
                .then(res => {
                    console.log(res,'suppliers')
                    props.handleSuppliers(res)




                });

        }

    })

    return (
        <>
            <select className="border-0" onChange={(event) => {

                const found = props.suppliers.find(supplier => {

                    return supplier.id === parseInt(event.target.value)

                })

                

                props.handleSupplierChange(found)
            }}>
                <option hidden>Choose Supplier</option>
                {props.suppliers.map(supplier => <option value={supplier.id}>{supplier.name.toUpperCase()}</option>)}

            </select>
        </>
    )

}

export default Companys;