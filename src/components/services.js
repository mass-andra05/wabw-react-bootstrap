import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-pen',
    title: 'Pembuatan Website',
    description: 'Kami menyediakan layanan jasa web design yang profesional dan sesuai dengan kebutuhan bisnis atau personal Anda. Kami akan bekerja sama dengan Anda untuk merancang dan mengembangkan situs web yang menarik, responsif, dan fungsional. Dengan desain yang modern dan user-friendly.'
  },
  {
    id: 2,
    icon: 'fas fa-desktop',
    title: 'Maintenance Website',
    description: 'Kami juga menawarkan jasa maintenance web untuk memastikan website Anda selalu berjalan dengan lancar. Tim buat website murah kami akan memantau dan memperbarui konten, mengelola database, dan mengatasi permasalahan teknis untuk menjaga performa dan keamanan website Anda tetap optimal.'
  },
  {
    id: 3,
    icon: 'fas fa-link',
    title: 'Domain dan Hosting',
    description: 'Kami menyediakan layanan domain dan hosting untuk membantu mengelola website anda, dengan harga yang terjangkau akan mempermudah promosi usaha Anda. Kami akan membantu Anda dalam memilih domain dan hosting yang cocok dengan kebutuhan bisnis Anda.'
  },
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Layanan Kami</h2>
          <div className="subtitle">Layanan Sobat Industri Media Creative</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;