import Carousel from 'react-bootstrap/Carousel';
import Imagem1 from '../assets/imgs/imagemcarocelo.jpg'
import Imagem2 from '../assets/imgs/record-serie-jr-feminicidio-violencia-domestica-11092018125930247.jpeg'
import Imagem3 from '../assets/imgs/Ecqzl6pXYAAlbHM.jpg'

function Carocelo() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagem1}
          alt="First slide"
        />
        <Carousel.Caption>
        <h3>Diga não ao feminicídio</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagem3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Diga não ao feminicídio</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Imagem2}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Diga não ao feminicídio</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carocelo;