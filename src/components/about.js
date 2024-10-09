import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img1.jpg';

function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Tentang Kami</h2>
          <div className="subtitle">Sobat Industri Media Creative</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>Selamat datang di Sobat Industri Media Creative, mitra kreatif Anda dalam merajut visi dan misi melalui dunia digital. Sebagai pelopor di industri media kreatif, kami menghadirkan solusi inovatif dalam pengembangan website untuk memperkuat identitas dan keberadaan online perusahaan Anda. </p>
            <div className='progress-block'>
              <h4>HTML / CSS / Javascript</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className='progress-block'>
              <h4>Responsive</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className='progress-block'>
              <h4>Photoshop</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div>
            <a href='{#}' className="btn btn-primary">Selengkapnya <i className="fas fa-chevron-right"></i></a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;