import './style.css';
import Card from 'react-bootstrap/Card';
import phone from './imagenes/phone.png';
import instagram from './imagenes/instagram.png';
import linkedin from './imagenes/linkedin.png';
import mail from './imagenes/email.png';
import otros from './imagenes/otros.png';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';




function Contacto() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return(
      <>
        <Card style={{ width: '100%', padding: '2rem', border: 'none', borderRadius: '0' }}>
        <Card.Body>
          <Card.Title id='contacto' style={{fontFamily: 'notoRegular', fontSize: '1.5em', marginBottom: '4rem'}}>Contacto</Card.Title>
          <Row style={{textAlign: 'center'}}>
          <Card.Text style={{fontFamily: 'notoRegular',  fontSize: '1.1em', lineHeight: '2rem'}}>
          Si te gusto mi trabajo, tienes alguna duda o simplemente quieres comunicarte no dudes en escribirme. 
          </Card.Text>
          </Row>
          <Row style={{textAlign: 'center', margin: '1rem'}}>
          
          <Card.Text>
          <a href="https://www.instagram.com/lasolcitacosmica/"><Card.Img  style={{width: "2.2rem", alignItems: 'center'}} src={instagram}/></a>
        
          <a href="https://www.linkedin.com/in/sofia-mato/"><Card.Img style={{width: "2.2rem", alignItems: 'center'}} src={linkedin}/></a>

          <Card.Img onClick={handleShow} style={{width: "2.2rem", alignItems: 'center', cursor: 'pointer'}} src={otros}/>
          </Card.Text>
  
         
          </Row>
        </Card.Body>
      </Card>
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily: 'notoRegular', fontSize: '1.2em'}}>Otros medios</Modal.Title>
        </Modal.Header>
        <Modal.Body>

      
          <Row style={{textAlign: 'center', margin: '1rem'}}>
          
          <Card.Text style={{fontFamily: 'notoRegular',  fontSize: '1.1em', lineHeight: '2rem'}}>
          
          <Card.Img  style={{width: "1.7rem", fontFamily: 'notoRegular'}} src={mail}/> sofia_mato@hotmail.com
         
          </Card.Text>

          </Row>

          <Row style={{textAlign: 'center', margin: '1rem'}}>

         <Card.Text style={{fontFamily: 'notoRegular',  fontSize: '1.1em', lineHeight: '2rem'}}>
          <Card.Img style={{width: "1.9rem", fontFamily: 'notoRegular'}} src={phone}/> + (54) 11 61 555 784

        
          </Card.Text>
          </Row>
         
      

        </Modal.Body>
        
      </Modal>

      </>
        
        
    );

}

export default Contacto;