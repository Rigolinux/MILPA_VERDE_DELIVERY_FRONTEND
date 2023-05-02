import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Provider } from '../../../interfaces/provider'
import { createProvider } from '../../../api/provider'
import { useNavigate } from 'react-router-dom'

const ProviderAdd = () => {
  const navigate = useNavigate();
  const [provider, setProvider] = React.useState<Provider>({
    ProviderName: '',
    address: '',
    mobileNumber: 0,
    mail: '',
    website: '',
  })

  const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createProvider(provider).then((response) => {
      console.log(response);
      navigate('/providers');
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1  className="text-center">Agregar proveedor</h1>
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
