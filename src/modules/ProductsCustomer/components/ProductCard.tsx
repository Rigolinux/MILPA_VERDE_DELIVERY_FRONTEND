import React from 'react';
import { Recipes } from '../../../interfaces/Recipes';
import { CardMedia, CardContent, Typography, CardActions, Card, Button  } from '@mui/material';


const ProductCard = (recipe:Recipes) => {
  return (
    
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Content"
            height="140"
            image={recipe.Image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {recipe.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {recipe.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Agregar</Button>
            <Button size="small">Comprar</Button>
          </CardActions>
        </Card>
  )
}

export default ProductCard