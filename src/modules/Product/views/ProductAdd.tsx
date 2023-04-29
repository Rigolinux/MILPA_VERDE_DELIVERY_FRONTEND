import { TextField } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
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
    <div className="d-flex justify-content-center">
      <div style={{ padding: '50px', }}>
        <form onSubmit={handlesubmit}>
          
          <TextField
            id="name"
            label="Nombre:"
            type="text"
            value={product?.name}
            defaultValue={product?.name}
            onChange={(e) => setProduct({...product, name: e.target.value})}
          />
          
          <TextField
            id="description"
            label="Descripcion: "
            type="text"
            value={product?.description}
            defaultValue={product?.description}
            onChange={(e) => setProduct({...product, description: e.target.value})}
          />
          
          <TextField
            id="price"
            label="Precio:"
            type="number"
            value={product?.price}
            defaultValue={product?.price}
            onChange={(e) => setProduct({...product, price: Number(e.target.value)})}
          />
          
          {/* <TextField
            id="stock"
            label="Stock: "
            type="number"
            value={product?.stock}
            defaultValue={product?.stock}
            onChange={(e) => setProduct({...product, stock: Number(e.target.value)})}
          /> */}
          
          <TextField
            id="image"
            label="Imagen: "
            type="text"
            value={product?.image}
            defaultValue={product?.image}
            onChange={(e) => setProduct({...product, image: e.target.value})}
          />
          
          <TextField
            id="category"
            label="Categoria: "
            type="text"
            value={product?.category}
            defaultValue={product?.category}
            onChange={(e) => setProduct({...product, category: e.target.value})}
          />

          <Button className="btn btn-success" type="submit">
            Guardar
          </Button>
        </form>
      </div>
    </div>
  )

};

export default ProductAdd
