import React from 'react'
import { Recipes } from '../../../interfaces/Recipes'
import { getAllRecipes } from '../../../api/Recipes'
import ProductCard from '../components/ProductCard'
import { Container } from '@mui/material'

// Importando css
import '../ProductsCustomerCSS.css'

const ProductCustomerHome = () => {
  const [products, setProducts] = React.useState<Recipes[]>([
  ])

    React.useEffect(() => {
        getAllRecipes().then((res) => {
            setProducts(res)
            console.log(res)
        })

    }, [])

  return (
    <Container className='mt-2'>
      <div className='product-container'>
        {
          products.map((product) => (
            <div key={product._id} className='product-item'>
              <ProductCard {...product} />
            </div>
          ))
        }
      </div>
    </Container>
  )
}

export default ProductCustomerHome