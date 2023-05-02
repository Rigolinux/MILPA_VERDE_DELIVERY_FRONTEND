import React from 'react'
import { Recipes } from '../../../interfaces/Recipes'
import { getRecipes } from '../../../api/Recipes'
import ProductCard from '../components/ProductCard'
import { Container } from '@mui/material'

const ProductCustomerHome = () => {
  const [products, setProducts] = React.useState<Recipes[]>([
  ])

    React.useEffect(() => {
        getRecipes().then((res) => {
            setProducts(res)
            console.log(res)
        })

    }, [])


  return (
    <Container className='mt-2'>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {products.map((product) => (
        <div style={{width: '33.33%'}}>
          <ProductCard {...product} />
        </div>
          ))}
        </div>
    </Container>

  )
}

export default ProductCustomerHome