import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';



function CurriculumCV() {

return (

    <Row>
        <Row>
        <Col>
        <Card style={{ width: '100%', padding: '2rem', border: 'none', background: '#0a1a2f', borderRadius: '0' }}>
            <Card.Title id='#curriculum'>Sofia Mato</Card.Title>
            <Card.Title>Contacto:</Card.Title>
            <div key={0}>
            <ListGroup>
                <ListGroup.Item>
                    Dirección: Sarmiento 4442, Ciudad Autónoma de Buenos Aires
                </ListGroup.Item>
                <ListGroup.Item>
                Teléfono: (54) 11 61 555 784
                </ListGroup.Item>
                <ListGroup.Item>
                    Correo: sofia_mato@hotmail.com
                    </ListGroup.Item>
            </ListGroup>
            </div>

        </Card>
        <Card style={{ width: '100%', padding: '2rem', border: 'none', background: '#0a1a2f', borderRadius: '0' }}>
        <Card.Title>Aptitudes:</Card.Title>
        <div key={1}>
        <ListGroup>
                <ListGroup.Item>
                    Capacidad organizativa y cooperativa
                </ListGroup.Item>
                <ListGroup.Item>
                    Creación de diseños originales
                </ListGroup.Item>
                <ListGroup.Item>
                Conocimientos de SEO
                    </ListGroup.Item>
                    <ListGroup.Item>
                Vocación por la tecnología
                </ListGroup.Item>
            
            </ListGroup>
        </div>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '100%', padding: '2rem', border: 'none', background: '#0a1a2f', borderRadius: '0' }}>
        <Card.Title>Formación académica:</Card.Title>
        <div key={2}>
        <ListGroup>
                <ListGroup.Item>
                    Carrera de Desarrollo Front End React Coderhouse
                </ListGroup.Item>
                <ListGroup.Item>
                    Carrera de Desarrollo UX/UI Coderhouse
                </ListGroup.Item>
                <ListGroup.Item>
                Licenciatura en Geografía Universidad Nacional de Luján
                </ListGroup.Item>
                
            
            </ListGroup>

        </div>
        </Card>
        </Col>

        </Row>

        <Card style={{ width: '100%', padding: '2rem', border: 'none', background: '#0a1a2f', borderRadius: '0' }}>
            <Card.Title>Experiencia laboral:</Card.Title>
            <div key={3}>
            <ListGroup>
                <ListGroup.Item>
                    Profesora Gobierno de la Ciudad
                </ListGroup.Item>
   
            </ListGroup>
            </div>
        </Card>


        <Row>
        <Col>
        <Card style={{ width: '100%', padding: '2rem', border: 'none', background: '#0a1a2f', borderRadius: '0' }}>
            <Card.Title>Idiomas:</Card.Title>
            <div key={4}>

            <ListGroup>
                <ListGroup.Item>
                    Español: Nativo
                </ListGroup.Item>
                <ListGroup.Item>
                    Inglés: Bilingüe 
                </ListGroup.Item>
                <ListGroup.Item>
                    Portugués: Comprensión basica
                </ListGroup.Item>
          
            </ListGroup>


            </div>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '100%', padding: '2rem', border: 'none', background: '#0a1a2f', borderRadius: '0' }}>
        <Card.Title>Certificaciones:</Card.Title>
        <div key={5}>
        <ListGroup>
                <ListGroup.Item>
                    QGIS III
                </ListGroup.Item>
                <ListGroup.Item>
                    Diseño web
                </ListGroup.Item>
                <ListGroup.Item>
                    Desarrollo Web
                </ListGroup.Item>
                <ListGroup.Item>
                    Javascript
                </ListGroup.Item>
                <ListGroup.Item>
                    React JS 
                </ListGroup.Item>
         
          
            </ListGroup>
        </div>
        </Card>
        
        </Col>

        </Row>

    


    </Row>


)

}


export default CurriculumCV;