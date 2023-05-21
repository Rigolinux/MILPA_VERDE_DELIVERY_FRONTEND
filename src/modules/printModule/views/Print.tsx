import React from 'react';
import { BOrders } from '../../../interfaces/BOrders';

const Print = ({ Details }: { Details: BOrders }) => {
  return (
    <> 
     <h1 style={{ display: 'flex', justifyContent: 'center'}}>Ordenes de compra</h1>
       {
         <tbody>
         {Details.details.map((detail) => (
           <tr key={detail._id}>
             <td style={{ border: '1px solid black'}}>{detail._id}</td>
             <td style={{ border: '1px solid black'}}>{detail.ID_Product}</td>
             <td style={{ border: '1px solid black'}}>{detail.quantity}</td>
             <td style={{ border: '1px solid black'}}>{detail.price}</td>
           </tr>
         ))}
       </tbody>
       }
    </>
  );
}

export default Print;
