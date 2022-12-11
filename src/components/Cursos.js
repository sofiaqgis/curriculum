import './style.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataFromBD from './ItemsCursos';
import Curso from './Curso';


function Cursos() {


    return(
        <Card key={2} style={{ width: '100%', padding: '2rem', border: 'none', background: '#0a1a2f', borderRadius: '0' }}>
        <Card.Body>
        <Card.Title style={{ color: 'white',  fontFamily: 'notoRegular', fontSize: '1.5em'}} id='cursos'>Cursos</Card.Title>
        <Row xs={2} sm={2} md={3} lg={4} style={{marginTop: '2rem', textAlign: 'center'}} className="g-4">
    {
    
    DataFromBD.map(item => ( 
      <>
      <Col className="columna-4">
       <Curso key={item.id} item={item}/> 
      </Col>
      </>
    
    )) 
    
    } 
    </Row>
        </Card.Body>
      </Card>
        
        
    );

}

export default Cursos;