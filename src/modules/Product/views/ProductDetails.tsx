import React from "react";
import { Product } from "../../../interfaces/product";
import { useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../../../api/product";
//import { Button, TextField } from "@mui/material";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { FilledInput } from '@mui/material';

import {uploadImage} from '../../../common/Config_clodinary'
import ProductDetails2 from '../../Product/views/ProductDetails.css'

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

  const [image, setImage] = React.useState('')

    const handleUpload = async (e: any) => {
        e.preventDefault()
        const file = e.target.files[0]
        const url = await uploadImage(file)
        if(url)
        setImage(url);
        setProduct({...product, image: url});
    }

    // const ValidarPrecio = Math.sign(parseInt(localStorage.getItem('product')));

    // const validatePrice = () => {
    //   const storedPrice = localStorage.getItem('product');
    //   const precio = storedPrice ? JSON.parse(storedPrice).product : '';
    //   const precio2 = Math.sign(precio.price);
    //   precio2>=0 
    // };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    updateProduct(id ?? '', product)
      .then((response) => {
        getProduct();
        console.log(response);

        if(product?.name === '' || product?.description === '' || product?.price === 0 || product?.image === '' || product?.category === '') {
          Swal.fire({
            icon: 'question',
            title: 'Hay algunos campos vacíos',
            text: '¡Por favor ingrese todos los campos!',
          })
          console.log('Error: Campos vacios');
          return;
        }

        if(product?.price <0) {
          Swal.fire({
            icon: 'question',
            title: 'Valores negativos',
            text: '¡El precio no puede ser negativo!',
          })
          console.log('Error: Valores negativos');
          return;
        }
        
        Swal.fire('Éxito', 'Producto actualizado correctamente', 'success');
        navigate('/products');
    }).catch((error) => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al actualizar el producto.',
        confirmButtonText: 'Aceptar'
      });
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
            required
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
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio $</Form.Label>
          <Form.Control
            type="number"
            size="lg"
            onChange={(e) => setProduct({...product, price: Number(e.target.value)})}
            value={product?.price}
            pattern="/^(?!-)\d*\.?\d+$/"
            //min={0}
            required
            // defaultValue={product?.price}
          />
        </Form.Group>

        {/* <Form.Group className="mb-3">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            defaultValue={product?.image}
            value={product?.image}
            required
            onChange={(e) => setProduct({...product, image: e.target.value})}
          />
        </Form.Group> */}

        {/* <Form.Group className="mb-3">
          <Form.Label>Imagen</Form.Label>
            <img src={image} alt="imagen" />
            <FilledInput type="file" onChange={(e) => setProduct({...product, image: e.target.value})} />
        </Form.Group> */}


        {/* <Form.Group controlId="formFileMultiple2" className="mb-3">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="file" multiple id="image" required value={product?.image} defaultValue={product?.image} onChange={(e) => setProduct({...product, image: e.target.value})} />
        </Form.Group> */}

        <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                size="lg"
                onChange={handleUpload}
              />
            </Form.Group>

        {/* <Form.Group controlId="formFileMultiple2" className="fileinput">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="file"   onChange={(e) => handleUpload(e)} />
          <FilledInput className="fileinput" type="file" onChange={(e) => setProduct({...product, image: e.target.value})} />
        </Form.Group> */}


        {/* <Form.Group className="mb-3">
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            defaultValue={product?.category}
            value={product?.category}
            onChange={(e) => setProduct({...product, category: e.target.value})}
            required
          />
        </Form.Group> */}

            <Form.Group className="mb-3">
            <Form.Label>Categoria</Form.Label>
              <Form.Select aria-label="Categoria" size="lg" value={product?.category} defaultValue={product?.category} onChange={(e) => setProduct({...product, category: e.target.value})} required>
                <option>Seleccione una categoria</option>
                <option value="Food">Food</option>
                <option value="Packaging">Packaging</option>
              </Form.Select>
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
