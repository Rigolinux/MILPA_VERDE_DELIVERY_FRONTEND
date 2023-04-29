import React from "react";

import { Product } from "../../../interfaces/product";

const ProductCard = (
  product: Product,
) => {
  return (
    <>
      <div key={product._id}>
        <h5>
          {product.name}
        </h5>
        <p>
          {product.description}
        </p>
      </div>
    </>
  )
};

export default ProductCard;
