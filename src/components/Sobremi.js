import './style.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import fotocarnet from './imagenes/fotocarnet.png';


function SobreMi() {
    return(
        <Card style={{ width: '100%', padding: '2rem', border: 'none', borderRadius: '0' }}>
        <Card.Body>
          <Card.Title style={{fontFamily: 'notoRegular', fontSize: '1.5em'}} id='sobremi'>Sobre mí</Card.Title>
          <Row xs={1} sm={1} md={1} lg={2}>
            <Col>
          <Card style={{ width: '100%', padding: '3rem', border: 'none', borderRadius: '0' }}>
            <Card.Text style={{fontFamily: 'notoRegular', fontSize: '1.1em', textAlign: 'justify', lineHeight: '2rem'}}>
            Mi nombre es Sofia Mato, soy Geógrafa egresada de la Universidad Nacional de Luján y hace tiempo que seguí estudiando diseño web, desarrollo web y programación. Mis intereses son la didáctica de la Geografía, que actualmente desempeño en la docencia, y el desarrollo de productos digitales, aunque me encantaría que estén relacionados a la educación para poder fusionar mis dos pasiones. 
Realice mi primer trabajo de diseño web para una película documental, junto a una diseñadora gráfica lo que me ayudo a mejorar mi experiencia y conocimientos de diseño. Creo que el trabajo colaborativo es lo mejor para que el producto sea mejor, aunque también me gusta desafiarme e intentar trabajar un poco más sola. 

            </Card.Text>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '100%', padding: '3rem', border: 'none', borderRadius: '0', alignItems: 'center', justifyContent: 'center' }}>
            <Card.Img style={{width: '70%'}} src={fotocarnet}></Card.Img>
            </Card>
            </Col>
            </Row>
        </Card.Body>
      </Card>
        
        
    );

}

export default SobreMi;