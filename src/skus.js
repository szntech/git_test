import React, { useState, useEffect } from 'react';


function Skus(props) {

    const [skus, setSkus] = useState([]);

    useEffect(()=>{

        if(props.supplierSelected!==null){

        fetch(`http://localhost:3002/skus`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ supplierId: props.supplierSelected.id })
          }).then(res => res.json())
            .then(res => {
    
                setSkus(res)
    
    console.log(res)
    
    
            });

        }

    },[props.supplierSelected])

    return(<>
    <select className="border-0" onChange={(e)=>props.handleGlobalSkuChange(e.target.value)}>
        <option hidden>Choose Sku</option>
    {skus.map(sku=><option value={sku.sku} key={sku.sku}>{sku.sku} </option>)}
    </select>
     </>)

}


export default Skus;