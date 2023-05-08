import React from 'react';
import { Button, Col, Container, Modal, Form, Row } from 'react-bootstrap';
import { Provider } from '../../../interfaces/provider';
import { createProvider } from '../../../api/provider';
import { useNavigate } from 'react-router-dom';

const ProviderAdd = () => {
  const navigate = useNavigate();
  const [provider, setProvider] = React.useState<Provider>({
    ProviderName: '',
    address: '',
    mobileNumber: 0,
    mail: '',
    website: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createProvider(provider)
      .then((response) => {
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
          <h1 className="text-center">Agregar proveedor</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre del proveedor</Form.Label>
              <Form.Control
                type="text"
                size="lg"
                value={provider.ProviderName}
                onChange={(e) => setProvider({ ...provider, ProviderName: e.target.value })}
                required
              />
              {!provider.ProviderName && <small className="text-danger">Este campo es obligatorio</small>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Dirección del proveedor</Form.Label>
              <Form.Control
                type="text"
                size="lg"
                value={provider.address}
                onChange={(e) => setProvider({ ...provider, address: e.target.value })}
                required
              />
              {!provider.address && <small className="text-danger">Este campo es obligatorio</small>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Teléfono del proveedor</Form.Label>
              <Form.Control
                type="tel"
                size="lg"
                value={provider.mobileNumber}
                onChange={(e) => setProvider({ ...provider, mobileNumber: parseInt(e.target.value) })}
                pattern="[0-9]*"
                required
              />
              {!provider.mobileNumber && <small className="text-danger">Este campo es obligatorio</small>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Correo del proveedor</Form.Label>
              <Form.Control
                type="email"
                size="lg"
                value={provider.mail}
                onChange={(e) => setProvider({ ...provider, mail: e.target.value })}
                required
              />
              {!provider.mail && <small className="text-danger">Este campo es obligatorio</small>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Sitio web del proveedor</Form.Label>
              <Form.Control
                type="url"
                size="lg"
                value={provider.website}
                onChange={(e) => setProvider({ ...provider, website: e.target.value })}
                required
              />
              {!provider.website && <small className="text-danger">Este campo es
              obligatorio</small>}
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button variant="success" size="lg" type="submit">
                Guardar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default ProviderAdd
