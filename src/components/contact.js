import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Hubungi Kami Segera!</h2>
          <div className="subtitle">Kami selalu siap membantu Anda mewujudkan visi digital Anda, tim ahli pengembangan web kami siap mendengarkan dan memberikan solusi yang tepat. Jangan ragu untuk menghubungi kami. Kami siap melayani dengan setulus hati, Amanah prioritas kami.</div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Isikan Nama Lengkap" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Isikan Email Anda" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Isikan Nomor Telepon Anda" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Isikan Pesan Anda" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type="submit">Kirim</Button>
          </div>
        </Form>
      </Container>
      <div className='google-map'>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15806.271433689022!2d111.4827994!3d-7.9401186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e790b2d337f8f6d%3A0x4390abf32578ef2!2sSobat%20Industri%20Media%20Creative!5e0!3m2!1sid!2sid!4v1728459998466!5m2!1sid!2sid"></iframe>
      </div>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              admin@sobatindustri.my.id
            </li>
            <li>
              <i className="fas fa-phone"></i>
             083857205422
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Ponorogo, Jawa Timur, Indonesia
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;