import React from 'react';
import { BOrders } from '../../../interfaces/BOrders';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Invoice } from '../../../interfaces/invoice';

const getProductName = (productID: string) => {
  const productMapping: { [key: string]: string } = {
    "644fd781bdc74d474bda439f": "Burrito de Pollo",
    "644fdac4bdc74d474bda43a6": "Quesadilla de Pollo",
    "64761fd3647c7773f5c5a50d": "Quesadilla de ave",
    "64762bc5764b473073c7e2cd": "Panes matañinos",
  };

  return productMapping[productID] || productID;
};

const Print = ({ Details }: { Details?: Invoice }) => {
 
  const navigate = useNavigate();

  return (
    <>
  <div className="container text-center">
    {/* <h1>Ordenes de compra</h1> */}
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Milpa Verde - Recibo.</h1>
        {/* Poniendo la imgen */}
        <br />
        {/* <h2 className="card-subtitle mb-3">Orden de venta</h2> */}
        <h3>Fecha: {Details?.sale.dateOfbuy}</h3>
        <h3>Cantidad: {Details?.sale.quantity}</h3>
        <h3>Total: {Details?.sale.total.toLocaleString('es-ES', { style: 'currency', currency: 'USD' })}</h3>
        <h3>Transfer Code: {Details?.sale.TransferNumber}</h3>
        <br />
        <div className="card">
          <h3>Detalles</h3>
        </div>
        {Details?.details.map((detail, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <h4>Producto: {getProductName(detail.ID_recipe)}</h4>
              <h4>Cantidad: {detail.quantity}</h4>
              <h4>Precio: {detail.price.toLocaleString('es-ES', { style: 'currency', currency: 'USD' })}</h4>
              <h4>Total: {detail.total.toLocaleString('es-ES', { style: 'currency', currency: 'USD' })}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
    <table className="table table-striped">
      <tbody>
        {/* ... Código para mostrar los detalles en una tabla ... */}
      </tbody>
    </table>
  </div>
</>
  );
}

export default Print;
