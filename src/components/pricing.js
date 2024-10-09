import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
  {
    id: 1,
    plan: 'Basic',
    price: 'Rp.99.000',
    features: ['30Gb SSD NVME', 'Gratis Desain', '5 Pages', 'Responsif', 'Backup 14 Hari'],
    link: 'https://www.google.com'
  },
  {
    id: 2,
    plan: 'Premium',
    price: 'Rp. 299.000',
    features:['130Gb SSD NVME', 'Gratis Desain', 'Gratis Domain', '15 Pages', 'Responsif', 'Backup 7 Hari'],
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    plan: 'Ultimate',
    price: 'Rp. 599.000',
    features: ['Unlimited Space SSD NVME', 'Gratis Desain', 'Gratis Domain', 'Unlimited Pages', 'Responsif', 'Backup Setiap Hari'],
    link: 'https://www.twitter.com'
  }
]

function AppPricing() {
  return (
    <section id="pricing" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
          <h2>PROMO &amp; HARGA</h2>
          <div className="subtitle">Promo Bulan Ini &amp; Harga Khusus</div>
        </div>
        <Row>
          {
            pricingData.map(pricing => {
              return (
                <Col sm={4} key={pricing.id}>
                  <div className='heading'>
                    <h3>{pricing.plan}</h3>
                    <span className='price'>{pricing.price}</span>
                  </div>
                  <div className='content'>
                    <ListGroup>
                      {
                        pricing.features.map((feature, index) => {
                          return (
                            <ListGroup.Item key={index}>{feature}</ListGroup.Item>    
                          );
                        })
                      }
                    </ListGroup>
                  </div>
                  <div className='btn-holder'>
                    <a href={pricing.link} className='btn btn-primary'>Order Sekarang!</a>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppPricing;