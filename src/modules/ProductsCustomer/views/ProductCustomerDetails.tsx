import React from 'react';
import { Recipes, RecipeDetail } from '../../../interfaces/Recipes';
import { useParams } from 'react-router-dom';
import { getRecipeById, createRecipeDetail } from '../../../api/Recipes';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { CardMedia, CardContent, Typography, CardActions, Card  } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import '../css/ProductCustomerDetails.css';

import { CartHome } from '../../Cart/views/CartView';

// Importando sweetalert2
import Swal from 'sweetalert2';

const ProductCustomerHomeDetails = (recipe:Recipes) => {
  const location = useLocation();
  const params = location.state;
  const navigate = useNavigate();
  
  const [articles, setArticles] = React.useState<Recipes>({
    name: '',
    description: '',
    Stock: 0,
    status: '',
    cost: 0,
    price: 0,
    Image: '',
  });
  
  const [pedidotest, setPedidotest] = React.useState(0);
  const [isLoading , setIsLoading] = React.useState(true);
  const [articlesDetail, setArticlesDetail] = React.useState<RecipeDetail>({
    // _id: '',
    ID_Product: '',
    quantity: 0,
    price: 0,
    total: 0,
  });

  const { id } = useParams();

  const getArticle = () => {
    getRecipeById(id ?? '').then((response) => {
      setArticles(response);
      console.log(response);
      const cart = localStorage.getItem('CartAticles');
      const ArticlesCart:RecipeDetail[] = cart ? JSON.parse(cart) : [];

      if(ArticlesCart.length > 0){
          ArticlesCart.forEach((item) => {
            if(item.ID_Product == response._id){
              console.log('Cantidad:', item.quantity);
              setPedidotest(item.quantity);
            }
          });

       setIsLoading(false);
      }
      else{
        setIsLoading(false);
      }
      // console.log(response);
    }).catch((error) => {
      console.log(error);
      setIsLoading(false);
    });
  };

  const [userA, setUserA] = React.useState({
    _id: '',
  });

  React.useEffect(() => {
    // localStorage.getItem('user');
    const storedUser = localStorage.getItem('user');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    if (parsedUser) {
      setUserA(parsedUser.user);
    }
    getArticle();
  }, []);

  // UseEffect que se mantiene activo
  // React.useEffect(() => {
  //   getArticle();
  // });

  // Agregar el estado para pedidotest

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('ID:', localStorage.getItem('user'));
    // console.log('ID:', userA._id);

    // ACA DEBERIA IR EL ID DEL USUARIO QUE ESTA LOGUEADO ACTUALMENTE
    // const idUser = '999';
    const idUser = userA._id;
    console.log('ID del usuario:', idUser);

    const articlesDetail : RecipeDetail = {
      
      //ID_Product: idUser,
      ID_Product: articles._id,
      quantity:   pedidotest,
      price:      articles.price,
      total:      pedidotest * articles.price,
    }
    
    setArticlesDetail(articlesDetail);
   // console.log('Dato seteado:', articlesDetail);

    // Validando que el stock sea mayor o igual a la cantidad solicitada
    if (pedidotest > 0) {
      if (articles.Stock >= pedidotest) {
        // alert('Pedido realizado con exito');
        const cart = localStorage.getItem('CartAticles');
        const ArticlesCart:RecipeDetail[] = cart ? JSON.parse(cart) : [];

        if(ArticlesCart.length > 0){
          let find = false;
            ArticlesCart.forEach((item) => {
              if(item.ID_Product === articlesDetail.ID_Product){
                find = true;
                item.quantity = articlesDetail.quantity;
                item.total = item.quantity * item.price;
                // console.log('ZZZ');
                // navigate('/cart');
              }
            });
            if(!find){
              ArticlesCart.push(articlesDetail);
            }
        }
        else{
          ArticlesCart.push(articlesDetail);
        }

        localStorage.setItem('CartAticles', JSON.stringify(ArticlesCart));



        /* createRecipeDetail(articles._id, articlesDetail).then((response) => {
          console.log(response);
          // window.location.reload();
        }).catch((error) => {
          console.log(error);
        }); */

        Swal.fire({
          icon: 'success',
          title: 'Pedido realizado',
          text: 'Su pedido se ha realizado con éxito',
          showConfirmButton: false,
          timer: 2500,
        });
        // return;
      } else {
        // alert('No hay stock suficiente');
        Swal.fire({
          icon: 'error',
          title: 'Pedido no realizado',
          text: 'No hay stock suficiente'
        });
      }
    } else {
      // alert('Debe ingresar una cantidad mayor a 0');
      Swal.fire({
        icon: 'warning',
        title: 'Pedido no realizado',
        text: 'Por favor, ingrese cuanto desea pedir'
      });
      return;
    }
  };

  React.useEffect(() => {
    // console.log(recipe);
   
  }, []);


  return (

    <Container className="paper-container">
          <h2 className="column-title">{articles.name}</h2>
      <Row>
        <Col md={6} className="flex-column align-items-start"> {/* Ajustar el ancho de la columna 1 a la mitad */}
          {/* Contenido de la columna 1 */}
          <Row>
            <Col>
              {/* Contenido de la columna 1, fila 1 */}
              {/* <img src={articles.Image} alt="Imagen del producto" className="product-image" /> */}
              {/* <img src={recipe.Image} alt="Imagen del producto" className="product-image" /> */}

              <CardMedia
              component="img"
              alt="Content"
              height="100%"
              width="100%"
              image={`../../../../${articles.Image}`}
              />

            </Col>
          </Row>
        </Col>
        <Col md={6} className="flex-column align-items-start"> {/* Ajustar el ancho de la columna 2 a la mitad */}
          {/* Contenido de la columna 2 */}
          <Row>
            <Col>
              {/* Contenido de la columna 2, fila 1 */}
              <h3 className="product-price">{articles.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* Contenido de la columna 2, fila 2 */}
              <h2 className="product-description">{articles.description}</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* Contenido de la columna 2, fila 3 */}
              <h4 className="product-stock">Disponibilidad: {articles.Stock}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* Contenido de la columna 2, fila 4 */}
             
              <Form.Group>
                { !isLoading ? 
                <Form.Control
                  type="number"
                  size='sm'
                  min={0}
                  max={articles.Stock}
                  defaultValue={pedidotest}
                  onPaste={(e) => e.preventDefault()}
                  onKeyDown={(e) => {
                    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Delete', 'Backspace', 'ArrowLeft', 'ArrowRight'];
                    if (!allowedKeys.includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  // onChange={(e) => setArticles({...articles, Stock: Number(e.target.value)})}
                  onChange={(e) => setPedidotest(Number(e.target.value))} // Actualizar el estado pedidotest 
                /> : 'Cargando...'}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* Contenido de la columna 2, fila 5 */}
              <Form onSubmit={handleSubmit}>
                <Button variant="success" color="primary" type="submit" className='save-button'>
                  Añadir al carrito
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    
  );
}

export default ProductCustomerHomeDetails;
