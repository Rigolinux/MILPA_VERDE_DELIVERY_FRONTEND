import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router';
import { RecipeDetail, Recipes } from '../../../interfaces/Recipes';
import { uploadImage } from '../../../common/Config_clodinary';
import Swal from 'sweetalert2';
import { CreateRecipe, getRecipeById, updateRecipe } from '../../../api/Recipes';



const ArticlesEdit = () => {


    enum status {
        InUse = "InUse",
        Inactive = "Inactive",
        use= "En uso",
        inactive= "Inactivo"
    }
  const navigate = useNavigate();
  const [image, setImage] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  const handleUpload = async (e: any) => {
      e.preventDefault()
      const file = e.target.files[0]
      //loading while uploading with sweet alert
      Swal.fire({

        title: 'Subiendo imagen',
        text: 'Por favor espere...',
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading()
        },
      });



        let url = null;
        url = await uploadImage(file)
      //stop loading
      Swal.close();
      if(url)
      setImage(url);
      setProduct({...product, Image: url});
  }


  const [product, setProduct] = React.useState<Recipes>(
    {
        name : '',
        description : '',
        Stock: 0,
        status: status.InUse,
        cost: 0,
        price: 0,
        Image: '', 
    }
  );
  const { id } = useParams();

  React.useEffect(() => {

    if (id) {
      getRecipeById(id)

        .then((response) => {
          setProduct(response);
          setLoading(false);
          console.log(response);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }
  }, []);
  const [ details, setDetails ] = React.useState<RecipeDetail[]>([
    {
        "ID_Product": "9999",
        "quantity": 2,
        "price": 8.50,
        "total": 17.00
    },
    {
        "ID_Product": "9999",
        "quantity": 1,
        "price": 11.50,
        "total": 11.50
    }
  ])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      
    event.preventDefault();
      //remove _id from product
      let id = product._id || '';
      delete product._id;
      delete product.__v || '';

      console.log('product', product);
      console.log('id', id);

    updateRecipe(product, id)
      .then((response) => {
        

        if(product?.name === '' || product?.description === '' || product?.price === 0 || product?.Image === '' ) {
          Swal.fire({
            icon: 'question',
            title: 'Hay algunos campos vacíos',
            text: '¡Por favor ingrese todos los campos!',
          })
          console.log('Error: Campos vacios');
          return;
        }
        
        Swal.fire('Éxito', 'Producto agregado correctamente', 'success');
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
    <>{
      !loading ? 
    <Container className="py-5">
    <Row className="mb-4">
      <Col>
        <h2 className="text-center">Editar Producto</h2>
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
              min={0}
             
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
              min={0}
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
              //min={0}
              onChange={(e) => setProduct({...product, price: Number(e.target.value)})}
              value={product?.price}
              //pattern="/^(?!-)\d*\.?\d+$/"
              required
              // defaultValue={product?.price}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Costo $</Form.Label>
            <Form.Control
              type="float"
              size="lg"
              min={0}
              onChange={(e) => setProduct({...product,cost: Number(e.target.value)})}
              value={product?.cost}
              required
              // defaultValue={product?.price}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Disponible</Form.Label>
            <Form.Control
              type="number"
              size="lg"
              min={0}
              onChange={(e) => setProduct({...product,Stock: Number(e.target.value)})}
              value={product?.Stock}
              required
              // defaultValue={product?.price}
            />
          </Form.Group>
  
        
  
          <Form.Group controlId="formFileMultiple2" className="fileinput">
            {/* <Form.Label>Imagen</Form.Label> */}
            <Form.Control type="file"   onChange={(e) => handleUpload(e)} />
            {/* <FilledInput className="fileinput" type="file" onChange={(e) => setProduct({...product, image: e.target.value})} /> */}
          </Form.Group>
  
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
  
              {/* <Form.Group className="mb-3">
              <Form.Label>Estado</Form.Label>
                <Form.Select aria-label="Estado" size="lg" value={product?.status} defaultValue={product?.status} onChange={(e) => setProduct({...product, status: e.target.value })} required>
                    <option value="InUse">En uso</option>
                    <option value="Inactive">Inactivo</option>
                 </Form.Select>
              </Form.Group> */}
          
            <div className="d-flex justify-content-end mt-2">
              <Button variant="success" color="primary" size="lg" type="submit">
                Guardar
              </Button>
            </div>
          </Form>
      </Col>
    </Row>
  </Container>:
  <h2>Cargando</h2>  
}</>
  )
}

export default ArticlesEdit