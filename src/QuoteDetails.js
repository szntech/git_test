import React, { useState, useEffect } from 'react';
import EnterQuote from './EnterQuote'
import Suppliers from './Suppliers'
import CustomerTier from './customerTier'
import Skus from './skus'
import SaveQuote from './saveQuote'

function QuoteDetails(props) {

    console.log(props, 'QuoteDetails')
    const [quoteDetails, setQuoteDetails] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [catalog, setCatalog] = useState([]);
    let [supplierSelected, setSupplierSelected] = useState(null);
    const [supplierIds, setSupplierIds] = useState([]);
    let [customerTier, setCustomerTier] = useState({ multiplier: 1 });
    const [skuSelected, setSkuSelected] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    let [counter, setCounter] = useState(1)


    useEffect(() => {







        if (supplierIds.length > 0) {



            fetch(`http://localhost:3002/catalog`, {
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




    }, [supplierIds])

    useEffect(() => {

        if (props.quoteNum > 0) {


            fetch(`http://localhost:3002/quoteDetail?id=${props.quoteNum}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }

            }).then(res => res.json())
                .then(res => {


                    setQuoteDetails(res)

                    const ids = res.map((detail) => {
                        const { supplierId } = detail;
                        return supplierId
                    })
                    console.log(ids, 'ids')

                    setSupplierIds(ids)


                });

        }


    }, [props.quoteNum])

    useEffect(() => {
        let count = 0
        quoteDetails.forEach((detail) => {
            count += detail.price * detail.qty * (detail.multiplier * customerTier.multiplier)
        })

        setTotalPrice(count)

    }, [quoteDetails])


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



    function handleItemChange(newValue, id) {

        const newArray = quoteDetails.map((detail) => {


            if (detail.id === id) {
                detail.item = newValue
                const found = catalog.find(element => element.item.toUpperCase() === newValue.toUpperCase())


                detail.supplierId = supplierSelected && found ? supplierSelected.id : null;
                detail.multiplier = supplierSelected && found ? supplierSelected.multiplier : null;
                console.log(skuSelected, 'skuSelected.sku')
                detail.sku = found ? found.sku : null;
                detail.price = found ? found.price : 0;
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

    function handleGlobalSkuChange(value) {

        console.log(catalog, 'catalog', " ", value, " ", supplierSelected)

        const found = catalog.find(element => element.sku === value && element.relatedSupplier === (parseInt(supplierSelected.id)))

        console.log(found, 'found')

        setSkuSelected(found)

        const newArray = quoteDetails.map((detail) => {




            detail.sku = found.sku;
            detail.price = found.price;

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

    console.log(quoteDetails, 'quoteDetails')
    console.log(customerTier, 'customerTier')
    return (
        <>
            <SaveQuote quoteDetails={quoteDetails} customerId={props.customerId} tier={props.tier} />
            <div><span>Total Price=</span><span>${totalPrice}</span></div>
            <CustomerTier setCustomerTier={setCustomerTier} />
            <Suppliers handleSupplierChange={handleSupplierChange} handleSuppliers={handleSuppliers} suppliers={suppliers} />
            <Skus supplierSelected={supplierSelected} handleGlobalSkuChange={handleGlobalSkuChange} />

            <table className='QuoteTable'>
                {quoteDetails.length > 0 && <tr>
                    <th>Item</th>
                    <th>Supplier</th>
                    <th>sku</th>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Price</th>
                </tr>}
                {quoteDetails.map(detail => <EnterQuote detail={detail} customerTier={customerTier} key={detail.id} handleItemChange={handleItemChange} suppliers={suppliers} handleSupplierSelected={handleSupplierSelected} supplierSelected={supplierSelected} handleSkuChange={handleSkuChange} catalog={catalog} handleQtyChange={handleQtyChange} deleteRow={deleteRow} />)}
            </table>
            <button onClick={() => {
                setQuoteDetails([...quoteDetails, { item: null, supplierId: null, sku: null, price: 0, qty: 1, multiplier: 0, id: counter }])
                setCounter(++counter)
            }
            }>Add Row</button>

        </>

    );
}

export default QuoteDetails;