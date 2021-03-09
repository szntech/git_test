import React, { useState, useEffect } from 'react';

function CustomerTier(props) {

    const [tiers, setTiers] = useState([]);

    useEffect(() => {
        if (tiers.length === 0) {

            fetch(`http://localhost:3002/customerTiers`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }

            }).then(res => res.json())
                .then(res => {
                    console.log(res, 'customerTiers')
                    setTiers(res)




                });




        }
    })


    return (<>
        <select onChange={(e) => {
            const found = tiers.find(tier => tier.id === parseInt(e.target.value))
            props.setCustomerTier(found)
        }}>
            <option hidden>Customer Tier</option>
            {tiers.map(tier => <option value={tier.id}>Tier {tier.tier}</option>)}

        </select>
    </>)


}

export default CustomerTier;