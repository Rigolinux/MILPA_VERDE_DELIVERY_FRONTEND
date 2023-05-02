import { TextField } from "@mui/material";
import React from "react";
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Product } from "../../../interfaces/product";
import { createProduct } from "../../../api/product";
import { useNavigate } from "react-router-dom";

const ProductAdd = () => {
  const navigate = useNavigate();
  const [product, setProduct] = React.useState<Product>({
    name: '',
    description: '',
    price: 0,
    // stock: 0,
    image: '',
    category: '',
  })

  const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createProduct(product).then((response) => {
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
          <h2>Agregar productos</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handlesubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control
                type="text"
                //size="lg"
                value={product?.name}
                defaultValue={product?.name}
                onChange={(e) => setProduct({...product, name: e.target.value})}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                //size="lg"
                value={product?.description}
                defaultValue={product?.description}
                onChange={(e) => setProduct({...product, description: e.target.value})}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                //size="lg"
                value={product?.price}
                defaultValue={product?.price}
                onChange={(e) => setProduct({...product, price: Number(e.target.value)})}
              />
            </Form.Group>
          
          {/* <TextField
            id="stock"
            label="Stock: "
            type="number"
            value={product?.stock}
            defaultValue={product?.stock}
            onChange={(e) => setProduct({...product, stock: Number(e.target.value)})}
          /> */}

            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Imagen</Form.Label>
              <Form.Control type="file" multiple id="image" value={product?.image} defaultValue={product?.image} onChange={(e) => setProduct({...product, image: e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                type="text"
                //size="lg"
                value={product?.category}
                defaultValue={product?.category}
                onChange={(e) => setProduct({...product, category: e.target.value})}
              />
            </Form.Group>

              <div className="d-flex justify-content-end">
                <Button className="btn btn-success" type="submit">
                  Guardar
                </Button>
              </div>
          </Form>
        </Col>
      </Row>
    </Container>

  )

};

export default ProductAdd
