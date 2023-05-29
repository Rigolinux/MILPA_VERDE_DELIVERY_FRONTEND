import React from 'react';
import { Recipes, RecipeDetail } from '../../../interfaces/Recipes';
import { useParams } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { Test } from '../views/Test';

// Importando a pay
import { sendtoBillPaypal } from '../../../api/pay';

// importando css
import '../css/CartCSS.css';

const CartHome = () => {
  const [articlesDetail, setArticlesDetail] = React.useState<RecipeDetail[]>([]);

  // trayendo los datos del localstorage al cargar el componente
  React.useEffect(() => {
    const cart = localStorage.getItem('CartAticles');
    const ArticlesCart: RecipeDetail[] = cart ? JSON.parse(cart) : [];
    setArticlesDetail(ArticlesCart);
  }, []);

  // Función para eliminar un artículo del carrito
  const removeItemFromCart = (productId: string) => {
    const updatedCart = articlesDetail.filter(
      (product) => product.ID_Product !== productId
    );
    setArticlesDetail(updatedCart);
    localStorage.setItem('CartAticles', JSON.stringify(updatedCart));
  };

  // Función para calcular el total de la orden
  const calculateTotal = () => {
    let total = 0;
    let totalo = 0;
    articlesDetail.forEach((product) => {
      total += product.total;
      totalo += product.quantity;

      // Guardando el total en el localstorage
      localStorage.setItem('CartResmTotal', JSON.stringify(total));
      localStorage.setItem('CartResmTotalo', JSON.stringify(totalo));

    });
    return total.toFixed(2);
  };

  // Funcion para pagar
  // const pay = () => {
  //   sendtoBillPaypal();
  // };

  // Funcion para pagar
  const pay = async () => {
    // try {
    //   const paymentLink = await sendtoBillPaypal();
    //   redirectToPayment(paymentLink);
    //   // Alerta de prueba
    //   // alert('Pago realizado con exito');
    // } catch (error) {
    //   // console.log(error);
    //   console.log('Error al contactar con Paypal');
    //   return error;
    // }

    try {
      const total = parseFloat((localStorage.getItem('CartResmTotal') || '0'));
      const paymentLink = await sendtoBillPaypal(total);
      redirectToPayment(paymentLink);
    } catch (error) {
      console.log(error);
    }

  };

  // Función para redirigir al enlace de pago
  const redirectToPayment = (paymentLink : any) => {
    window.location.href = paymentLink;
  };



  // // Funcion para pagar
  // const pay = async () => {
  //   try {
  //     const paymentLink = await sendtoBillPaypal();
  //     redirectToPayment(paymentLink);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // Función para redirigir al enlace de pago
  // const redirectToPayment = (paymentLink) => {
  //   window.location.href = paymentLink;
  // };

  return (
    <div className='cart-container'>
      <div className='cart-product-list'>
        {articlesDetail.map((product, index) => (
          <div key={product.ID_Product} className='cart-product-item'>
            <div className='cart-product-item__details'>
              <h3>{product.ID_Product}</h3>
              <p>Cantidad: {product.quantity}</p>
              <p>Precio: ${product.price.toFixed(2)}</p>
              <p>Total: ${product.total.toFixed(2)}</p>
              <button
                className='remove-button'
                onClick={() => removeItemFromCart(product.ID_Product)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='cart-summary'>
        <h2>Resumen de la Orden</h2>
        <p>Total: ${calculateTotal()}</p>
        {/* <button className='pay-button'>Pagar</button> */}
        <button className='pay-button' onClick={() => pay()}> Pagar </button>
      </div>
    </div>
  );
};

export default CartHome;
