import React from 'react';
import { Recipes, RecipeDetail } from '../../../interfaces/Recipes';
import { getRecipeById, createRecipeDetail } from '../../../api/Recipes';
import { useParams } from 'react-router-dom';
import { Sales } from '../../../interfaces/Sales';
import { SaleData } from '../../../interfaces/pay';

// Importando a pay
import { captureOrder, createaSale } from '../../../api/pay';

// Importando sweetalert2
import Swal from 'sweetalert2';

const Test = () => {
  // SweetAlert2 de bienvenida y mensaje a la consola al cargar la pagina en el useEffect si existe el token de compra
  // Al finalizar el swwetalert2 despues de 5 segundos se redirecciona a la pagina de inicio
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('token');
    console.log(myParam);
    if (myParam) {
      Swal.fire({
        title: 'Compra Realizada',
        text: 'Gracias por su compra',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      }).then(() => {
        console.log(myParam);
        captureOrder(myParam);
        const storedUser = localStorage.getItem('user');
        const parsedUser = storedUser ? JSON.parse(storedUser) : null;
        if (parsedUser) {
          const saleDetails = ArticlesCart.map((product) => {
            return {
              ID_recipe: product.ID_Product,
              dateOfbuy: date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(),
              quantity: product.quantity,
              price: product.price,
              total: product.total,
            };
          });
          const TransferNumber2 = payerID ? payerID.toString() : '';
          const dateOfbuy2 = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
          const saleData = {
            ID_USER: parsedUser.user._id,
            dateOfbuy: date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(),
            quantity: saleDetails.reduce((total, detail) => total + detail.quantity, 0),
            total: saleDetails.reduce((total, detail) => total + detail.total, 0),
            status: 'APPROVED',
            dateOfDelivered: dateOfbuy2,
            TransferNumber: TransferNumber2,
            TransferStatus: 'APPROVED',
            details: saleDetails,
          };
          createaSale(saleData).then(() => {
            localStorage.removeItem('CartAticles');
            localStorage.removeItem('CartTotal');
            localStorage.removeItem('token');
            localStorage.removeItem('PayerID');
            localStorage.removeItem('CartResmTotal');
            localStorage.removeItem('CartResmTotalo');
            window.location.href = '/articles';
          });
        }
      });
    }
  }, []);

  // Sacando el valor de la url
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  const payerID = urlParams.get('PayerID');

  // Sacando la fecha actual en formato dd/mm/yyyy
  const date = new Date();

  // Trayendo datos del localstorage
  const cart = localStorage.getItem('CartAticles');
  const ArticlesCart: RecipeDetail[] = cart ? JSON.parse(cart) : [];

  ArticlesCart.forEach((product) => {
    console.log(product);
  });

  return (
    <div>
      {/* <h1>Sale header</h1>
      <h2>DATEOFBUY = {date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}</h2>
      <h1>Recipe Details</h1>
      <h2>ID_SALE = {token}</h2>
      <h2>ID_RECIPE = {payerID}</h2>
      <h2>DATEOFBUY = {date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}</h2> */}
    </div>
  );
};

export default Test;
