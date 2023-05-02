import React from 'react';
import { Provider } from '../../../interfaces/provider';
import { useParams } from 'react-router-dom';
import { getProviderById, updateProvider } from '../../../api/provider';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const ProviderDetails = () => {
  const navigate = useNavigate();
  
  const [provider, setProvider] = React.useState<Provider>({
    ProviderName: '',
    address: '',
    mobileNumber: 0,
    mail: '',
    website: '',
    _id: '',
  });

  const { id } = useParams();

  const getProv = () => {
    getProviderById(id ?? '')
      .then((response) => {
        setProvider(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    getProv();
  }, []);

  const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    updateProvider(id ?? '', provider)
      .then((response) => {
        getProv();
        console.log(response);
        navigate('/providers');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="py-5">
  <Row className="mb-4">
    <Col>
      <h1  className="text-center">Detalles del proveedor</h1>
    </Col>
  </Row>
  <Row>
    <Col>
      <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre del proveedor</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            value={provider.ProviderName}
            onChange={(e) => setProvider({ ...provider, ProviderName: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Dirección del proveedor</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            value={provider.address}
            onChange={(e) => setProvider({ ...provider, address: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Teléfono del proveedor</Form.Label>
          <Form.Control
            type="number"
            size="lg"
            value={provider.mobileNumber}
            onChange={(e) => setProvider({ ...provider, mobileNumber: parseInt(e.target.value) })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Correo del proveedor</Form.Label>
          <Form.Control
            type="email"
            size="lg"
            value={provider.mail}
            onChange={(e) => setProvider({ ...provider, mail: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sitio web del proveedor</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            value={provider.website}
            onChange={(e) => setProvider({ ...provider, website: e.target.value })}
          />
        </Form.Group>

        <div className="d-flex justify-content-end">
          <Button variant="success" size="lg" type="submit">
            Guardar cambios
          </Button>
        </div>
      </Form>
    </Col>
  </Row>
</Container>
  )
}

export default ProviderDetails