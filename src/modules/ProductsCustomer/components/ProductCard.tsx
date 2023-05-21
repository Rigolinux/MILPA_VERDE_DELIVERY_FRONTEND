import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Recipes } from '../../../interfaces/Recipes';
import { CardMedia, CardContent, Typography, CardActions, Card, Button  } from '@mui/material';

const ProductCard = (recipe:Recipes) => {

  const navigate = useNavigate();

  // creando la funcion para obtener los articulos por id
  const articleDetail = (params:any) => {
    navigate(`/articles/${params._id}`, {state: params});
    // console.log(params);
  };


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
            <Button size="small" onClick={() => articleDetail(recipe)}>Comprar</Button>
          </CardActions>
        </Card>
  )
}

export default ProductCard