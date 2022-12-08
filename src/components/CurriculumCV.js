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
            <Card.Text>
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
            </Card.Text>

        </Card>
        <Card style={{ width: '100%', padding: '2rem', border: 'none', background: '#0a1a2f', borderRadius: '0' }}>
        <Card.Title>Aptitudes:</Card.Title>
        <Card.Text>
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
        </Card.Text>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '100%', padding: '2rem', border: 'none', background: '#0a1a2f', borderRadius: '0' }}>
        <Card.Title>Formación académica:</Card.Title>
        <Card.Text>
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

        </Card.Text>
        </Card>
        </Col>

        </Row>

        <Card style={{ width: '100%', padding: '2rem', border: 'none', background: '#0a1a2f', borderRadius: '0' }}>
            <Card.Title>Experiencia laboral:</Card.Title>
            <Card.Text>
            <ListGroup>
                <ListGroup.Item>
                    Profesora Gobierno de la Ciudad
                </ListGroup.Item>
   
            </ListGroup>
            </Card.Text>
        </Card>


        <Row>
        <Col>
        <Card style={{ width: '100%', padding: '2rem', border: 'none', background: '#0a1a2f', borderRadius: '0' }}>
            <Card.Title>Idiomas:</Card.Title>
            <Card.Text>

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


            </Card.Text>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '100%', padding: '2rem', border: 'none', background: '#0a1a2f', borderRadius: '0' }}>
        <Card.Title>Certificaciones:</Card.Title>
        <Card.Text>
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
        </Card.Text>
        </Card>
        
        </Col>

        </Row>

    


    </Row>


)

}


export default CurriculumCV;