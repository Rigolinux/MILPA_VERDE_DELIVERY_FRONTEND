import React from 'react';
import { Recipes } from '../../../interfaces/Recipes';
import { getAllRecipes } from '../../../api/Recipes';

import { useNavigate } from 'react-router-dom';

// Importando cosas necesarias para el css
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardMedia, CardContent, Typography, CardActions, Card, Button  } from '@mui/material';

// const ArticlesView = () => {

//   const navigate = useNavigate();

//   // creando la funcion para obtener los articulos por id
//   const articleDetail = (params:any) => {
//     // navigate(`/articlesview/${params.id}`);
//     console.log(params);
//   };

//   // useState y useEffect para obtener los articulos
//   const [articles, setArticles] = React.useState<Recipes[]>([]);
//   // console.log('Articulos leidos ini: ', articles);

//   React.useEffect(() => {
//     getAllRecipes().then((res) => {
//       setArticles(res);
//       // console.log(res);
//     });
//   }, []);

//   // Vista de los articulos
//   return (
//     <Container className='mt-2'>
//       <div className='product-container'>

//         <Card sx={{maxWidth: '345px'}}>

//           <CardMedia 
//             component='img'
//             alt='Content'
//             height='140'
//             // Aqui va la imagen de todos los articulos que se van a mostrar
//             image={articles[0]?.Image}

//           />

//           <CardContent>

//             <Typography gutterBottom variant='h5' component='div'>
//               { articles[0]?.name }
//             </Typography>

//             <Typography variant='body2' color='text.secondary'>
//               { articles[0]?.description }
//             </Typography>

//           </CardContent>

//           <CardActions>
//             <Button size='small' onClick={() => articleDetail(articles[0])}>Ver</Button>
//           </CardActions>

//         </Card>

//       </div>
//     </Container>
//   )
// };

const ArticlesViewCharge = (articlesch: Recipes) => {

  // creando la funcion para obtener los articulos por id
  const articleDetail2 = (params:any) => {
    // navigate(`/articlesview/${params.id}`);
    console.log(params);
  };


  return (
    <Container className='mt-2'>
      <div className='product-container'>

        <Card sx={{maxWidth: '345px'}}>

          <CardMedia 
            component='img'
            alt='Content'
            height='140'
            // Aqui va la imagen de todos los articulos que se van a mostrar
            image={articlesch.Image}

          />

          <CardContent>

            <Typography gutterBottom variant='h5' component='div'>
              { articlesch.name }
            </Typography>

            <Typography variant='body2' color='text.secondary'>
              { articlesch.description }
            </Typography>

          </CardContent>

          <CardActions>
            <Button size='small' onClick={() => articleDetail2(articlesch)}>Ver</Button>
          </CardActions>

        </Card>

      </div>
    </Container>
  )
};

export default ArticlesViewCharge;
// export default { ArticlesView, ArticlesViewCharge };