import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
  {
    id: 1,
    name: 'Meide Adika',
    description: '"Tim di Sobat Industri Media Creative sangat profesional dan ahli dalam mengembangkan situs web. Mereka mendengarkan dengan teliti kebutuhan kami dan memberikan solusi yang sesuai. Kami merekomendasikan Sobat Industri Media Creative kepada siapa pun yang mencari partner yang dapat diandalkan untuk proyek web development."',
    designation: 'Manager of Dika Cellular'
  },
  {
    id: 2,
    name: 'Anisa R.A',
    description: '"Sobat Industri Media Creative adalah pilihan terbaik untuk layanan web development. Mereka tidak hanya mengutamakan kualitas desain tetapi juga fokus pada pengalaman pengguna. Tim mereka ramah, tanggap, dan selalu siap membantu. Kami merekomendasikan mereka dengan tulus kepada semua yang membutuhkan layanan web development."',
    designation: 'Accountant'
  },
  {
    id: 3,
    name: 'Samsudien',
    description: '"Sobat Industri Media Creative adalah mitra yang sangat berharga dalam pengembangan situs web kami. Mereka tidak hanya mengutamakan kualitas desain tetapi juga fokus pada pengalaman pengguna. Prosesnya transparan, dan mereka selalu memberikan pembaruan yang memuaskan. Kami sangat senang dengan hasil akhirnya!"',
    designation: 'CEO of Dodik LPG'
  }
]

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Testimoni Pelanggan</h2>
          <div className="subtitle">Kepuasan Pelanggan Merupakan Prioritas Kami, Berikut Adalah Beberapa Testimoni Client Kami.</div>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='name'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;