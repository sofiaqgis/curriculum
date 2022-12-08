import './style.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import pic1 from './imagenes/8cuentos.png';
import pic2 from './imagenes/clonas1.png';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';



function AlgunosTrabajos() {
    return(
        <Card style={{ width: '100%', padding: '2rem', border: 'none', background: '#0a1a2f', borderRadius: '0' }}>
        <Card.Body>
        
          <Card.Title id='trabajos' style={{ color: 'white', marginBottom: '4rem', fontFamily: 'notoRegular', fontSize: '1.5em'}}>Algunos trabajos</Card.Title>
          
          <Row>
          <Col>
          <Card style={{ width: '100%', padding: '3rem', border: 'none', background: '#0a1a2f', borderRadius: '0' }}>
         
          <Card.Img  src={pic1}></Card.Img>
         
          <Col>
          <Card.Title id='trabajos' style={{ color: 'white', marginBottom: '3rem', fontFamily: 'notoRegular', fontSize: '1.3em', marginTop:'1.5rem'}}>Landing Page</Card.Title>
          <Card.Text style={{color: 'white', fontFamily: 'notoLight', fontSize: '1em',  marginTop:'.4rem'}}>
          <ListGroup as="ol" style={{textAlign: 'center'}} numbered>
      <ListGroup.Item style={{color: 'white', fontFamily: 'notoRegular', background: 'transparent', fontSize: '1.1rem'}} as="li">HTML</ListGroup.Item>
      <ListGroup.Item  style={{color: 'white', fontFamily: 'notoRegular', background: 'transparent', fontSize: '1.1rem'}} as="li">CSS</ListGroup.Item>
      <ListGroup.Item  style={{color: 'white', fontFamily: 'notoRegular', background: 'transparent', fontSize: '1.1rem'}} as="li">Javascript</ListGroup.Item>
    </ListGroup>
          </Card.Text>
          <Row  style={{textAlign: 'center'}}>
          <a href="https://ochocuentos.com/"><Button variant="light" style={{padding: '.7rem', marginTop:'3rem', borderRadius: '0.2rem', fontFamily: 'notoRegular', background: '#33ffcc', /*  ccff00 */ border: '2px solid #33ffcc' , color: '#0a1a2f'}}>Ir al sitio</Button></a>
          </Row>
          

          </Col>
         
          </Card>
          </Col>
          <Col>
          <Card style={{ width: '100%', padding: '3rem', border: 'none', background: '#0a1a2f', borderRadius: '0' }}>
         
          <Card.Img  src={pic2}></Card.Img>
         
          <Col>
          <Card.Title id='trabajos' style={{ color: 'white', marginBottom: '3rem', fontFamily: 'notoRegular', fontSize: '1.3em', marginTop:'1.5rem'}}>React App</Card.Title>
          <Card.Text style={{color: 'white', fontFamily: 'notoLight', fontSize: '1em',  marginTop:'.4rem'}}>
          <ListGroup style={{textAlign: 'center'}} as="ol" numbered>
      <ListGroup.Item style={{color: 'white', fontFamily: 'notoRegular', background: 'transparent', fontSize: '1.1rem'}}  as="li">HTML</ListGroup.Item>
      <ListGroup.Item style={{color: 'white', fontFamily: 'notoRegular', background: 'transparent', fontSize: '1.1rem'}}  as="li">CSS</ListGroup.Item>
      <ListGroup.Item style={{color: 'white', fontFamily: 'notoRegular', background: 'transparent', fontSize: '1.1rem'}}  as="li">Javascript</ListGroup.Item>
      <ListGroup.Item style={{color: 'white', fontFamily: 'notoRegular', background: 'transparent', fontSize: '1.1rem'}}  as="li">React JS</ListGroup.Item>
    </ListGroup>
          </Card.Text>
          <Row  style={{textAlign: 'center'}}>
          <a href="http://clonascompras.me/"><Button variant="info" style={{ padding: '.7rem', marginTop: '3rem', borderRadius: '0.2rem', fontFamily: 'notoRegular',background: '#33ffcc', border: '2px solid #33ffcc', color: '#0a1a2f'}}>Ir al sitio</Button></a>
          </Row>
          </Col>

          

          </Card>
          </Col>
          </Row>
        </Card.Body>
      </Card>
        
        
    );

}

export default AlgunosTrabajos;