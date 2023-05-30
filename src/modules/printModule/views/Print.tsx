import React from 'react';
import { BOrders } from '../../../interfaces/BOrders';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Invoice } from '../../../interfaces/invoice';


const Print = ({ Details }: { Details?: Invoice }) => {
 
  const navigate = useNavigate();

  

  return (
    <> 
     <h1 style={{ display: 'flex', justifyContent: 'center'}}>Ordenes de compra</h1>
       {
        <>
        <h1>Milpa Verde </h1>
        <h2>Orden de venta</h2>
        <h3>Fecha: {Details?.sale.dateOfbuy}</h3>
        <h3>Cliente: {Details?.details[0].ID_recipe}</h3>
        <h3>Cliente: {Details?.details[1].ID_recipe}</h3>


        <table className="table table-striped">
          
         <tbody>
         
         </tbody>
        </table>  
       </>
       }
    </>
  );
}

export default Print;
