import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: require('../assets/images/img2.jpg'),
    title: 'Desain Berkualitas Tinggi',
    subtitle: 'Desain Yang Memukau.'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: require('../assets/images/img3.jpg'),
    title: 'Pengembangan Website Terdepan',
    subtitle: 'Menciptakan Website Yang Modern.'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: require('../assets/images/img4.jpg'),
    title: 'Dukungan Pelanggan yang Luar Biasa',
    subtitle: 'Kepuasan Pelanggan Prioritas Kami.'
  },
]

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Apa yang Kami Tawarkan?</h2>
          <div className="subtitle">Layanan Sobat Industri</div>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={4} key={works.id}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}>
                      <Image src={works.image} />
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })
          }
        </Row>
        <Pagination>{items}</Pagination>
      </Container>  
    </section>
  );
}

export default AppWorks;