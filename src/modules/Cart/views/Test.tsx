import React from 'react'
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
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      }).then(() => {
        // Ejecutamos a captureOrder y le pasamos el token como parametro
        console.log(myParam);
        captureOrder(myParam);
        // Redireccionamos a la pagina de inicio
        // window.location.href = '/';
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

  // Trayendo datos del localstorage de usuario
  const [userA, setUserA] = React.useState({
    _id: '',
  });

  React.useEffect(() => {
    // localStorage.getItem('user');
    const storedUser = localStorage.getItem('user');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    // console.log(parsedUser);
    if (parsedUser) {
      setUserA(parsedUser.user);
    }
  }, []);

  const idUser = userA._id;

  // ACA DEBO DE CREAR EL OBJETO PARA LA SOLICITUD

  const saleDetails = ArticlesCart.map((product) => {
    return {
      ID_recipe: product.ID_Product,
      // Tomamos la fecha actual en formato dd/mm/yyyy
      dateOfbuy: date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(),
      quantity: product.quantity,
      price: product.price,
      total: product.total,
    };
  });

  // Convertimos el payerID a string y lo asignamos a la variable TransferNumber
  const TransferNumber2 = payerID ? payerID.toString() : '';

  // Convertimos el dateOfbuy a string y lo asignamos a la variable dateOfbuy2
  const dateOfbuy2 = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

  // Objeto para la solicitud de venta
  const saleData = {
    ID_USER: idUser,
    dateOfbuy: date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(),
    quantity: saleDetails.reduce((total, detail) => total + detail.quantity, 0),
    total: saleDetails.reduce((total, detail) => total + detail.total, 0),
    status: 'APPROVED',
    dateOfDelivered: dateOfbuy2,
    TransferNumber: TransferNumber2,
    TransferStatus: 'APPROVED',
    details: saleDetails,
  };

  createaSale(saleData);

  return (
    <div>

      <h1>Sale header</h1>
      <h2>Id_user ={idUser}</h2>
      <h2>DATEOFBUY = {date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}</h2>


      <h1>Recipe Details</h1>
      {/* <h2>ID_Product    = {ArticlesCart}</h2> */}
      <h2>quantity      = {payerID}</h2>
      <h2>price         = {payerID}</h2>
      <h2>total         = {payerID}</h2>

      <h2>ID_SALE   = {token}</h2>
      <h2>ID_RECIPE = {payerID}</h2>
      <h2>DATEOFBUY = {date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}</h2>


      {/* Asignando a h2 el valor de la constante */}

    </div>
  )
}

export default Test