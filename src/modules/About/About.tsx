import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Acercaimg from './Acercaimg.jpg';

const About = () => {
  return (
    <Container>
      <Row className="mt-5 mb-4 d-flex align-items-center">
        <Col md={6} className="text-center">
          <h1 className="display-3 font-weight-bold">Acerca de nosotros</h1>
          <p className="lead">Somos un negocio de milpa verde que se dedica a la venta de burritos y quesadillas. Nuestros productos son elaborados con ingredientes frescos y de alta calidad.</p>
          <p className="lead mb-5">En nuestra cocina, combinamos las tradiciones culinarias mexicanas con técnicas modernas de cocina para crear platillos deliciosos y únicos.</p>
        </Col>
        <Col md={6}>
          <Image src={Acercaimg} alt="Imagen de nuestro negocio" fluid className="rounded-circle shadow-lg" />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h2 className="text-center mb-4">Nuestros valores</h2>
          <ul className="list-unstyled">
            <li className="mb-3"><i className="fas fa-utensils fa-fw fa-2x mr-3"></i><span className="lead">Calidad: Utilizamos los mejores ingredientes para nuestros platillos.</span></li>
            <li className="mb-3"><i className="fas fa-pepper-hot fa-fw fa-2x mr-3"></i><span className="lead">Sabor: Nuestros platillos son deliciosos y únicos.</span></li>
            <li className="mb-3"><i className="fas fa-leaf fa-fw fa-2x mr-3"></i><span className="lead">Sustentabilidad: Nos preocupamos por el medio ambiente y utilizamos técnicas amigables con la naturaleza.</span></li>
            <li><i className="fas fa-hand-holding-heart fa-fw fa-2x mr-3"></i><span className="lead">Servicio: Atendemos a nuestros clientes con amabilidad y rapidez.</span></li>
          </ul>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h2 className="text-center mb-4">Nuestro equipo</h2>
          <p className="lead text-center">Nuestro equipo está formado por cocineros expertos en la preparación de platillos mexicanos y un equipo de atención al cliente amigable y eficiente.</p>
          <p className="lead text-center">Estamos comprometidos con ofrecer la mejor experiencia de comida mexicana a nuestros clientes.</p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">Nuestros colores</h2>
          <p className="lead text-center">Los colores rojo, amarillo y verde son los colores de nuestra marca y representan la frescura y la autenticidad de nuestros platillos.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
