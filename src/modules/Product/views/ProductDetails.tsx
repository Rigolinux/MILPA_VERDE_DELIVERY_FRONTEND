import React from "react";
import { Product } from "../../../interfaces/product";
import { useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../../../api/product";
//import { Button, TextField } from "@mui/material";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import { useNavigate } from "react-router-dom";

const ProductDetails = () => {

  const navigate = useNavigate();

  const [product, setProduct] = React.useState<Product>({
    name: '',
    description: '',
    price: 0,
    // stock: 0,
    image: '',
    category: '',
    _id: '',
  });

  const { id } = useParams();

  const getProduct = () => {
    getProductById(id ?? '').then((response) => {
      setProduct(response);
    }).catch((error) => {
      console.log(error);
    });
  };

  React.useEffect(() => {
    getProduct();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    updateProduct(id ?? '', product).then((response) => {
      getProduct();
      console.log(response);
      navigate('/products');
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <Container className="py-5">
  <Row className="mb-4">
    <Col>
      <h2 className="text-center">Detalles del producto</h2>
    </Col>
  </Row>
  <Row>
    <Col>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            defaultValue={product?.name}
            value={product?.name}
            onChange={(e) => setProduct({...product, name: e.target.value})}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            defaultValue={product?.description}
            value={product?.description}
            onChange={(e) => setProduct({...product, description: e.target.value})}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            size="lg"
            onChange={(e) => setProduct({...product, price: Number(e.target.value)})}
            value={product?.price}
            // defaultValue={product?.price}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            defaultValue={product?.image}
            value={product?.image}
            onChange={(e) => setProduct({...product, image: e.target.value})}
          />
        </Form.Group>

        {/* <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="file" multiple id="image" value={product?.image} defaultValue={product?.image} onChange={(e) => setProduct({...product, image: e.target.value})} />
        </Form.Group> */}

        <Form.Group className="mb-3">
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            defaultValue={product?.category}
            value={product?.category}
            onChange={(e) => setProduct({...product, category: e.target.value})}
          />
        </Form.Group>
        
          <div className="d-flex justify-content-end">
            <Button variant="success" color="primary" size="lg" type="submit">
              Guardar
            </Button>
          </div>
        </Form>
    </Col>
  </Row>
</Container>
  )
}

export default ProductDetails
