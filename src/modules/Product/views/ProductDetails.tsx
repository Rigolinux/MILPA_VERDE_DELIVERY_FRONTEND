import React from "react";
import { Product } from "../../../interfaces/product";
import { useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../../../api/product";
import { Button, TextField } from "@mui/material";

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
    <div>
      <h1>Detalles del producto</h1>
      <div>
        <h3>Nombre del producto: {product?.name}</h3>

        <form onSubmit={handleSubmit}>

          <TextField 
            id="name"
            label="Nombre: "
            type="text"
            defaultValue={product?.name}
            value={product?.name}
            onChange={(e) => setProduct({...product, name: e.target.value})}
          />

          <TextField 
            id="description"
            label="Descripcion: "
            type="text"
            defaultValue={product?.description}
            value={product?.description}
            onChange={(e) => setProduct({...product, description: e.target.value})}
          />

          <TextField
            id="price"
            label="Precio: "
            type="number"
            onChange={(e) => setProduct({...product, price: Number(e.target.value)})}
            value={product?.price}
            // defaultValue={product?.price}
          />

          <TextField 
            id="image"
            label="Imagen: "
            type="text"
            defaultValue={product?.image}
            value={product?.image}
            onChange={(e) => setProduct({...product, image: e.target.value})}
          />

          <TextField
            id="category"
            label="Categoria: "
            type="text"
            defaultValue={product?.category}
            value={product?.category}
            onChange={(e) => setProduct({...product, category: e.target.value})}
          />

          <Button variant="contained" color="primary" type="submit">
            Guardar
          </Button>

        </form>
      </div>
    </div>
  )

}

export default ProductDetails
