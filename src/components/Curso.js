
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

function Curso ({item}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return (
    <>
        
          <Card style={{ width: '100%', background: 'transparent', padding: '1rem' }}>
          <Card.Body>
         <Button onClick={handleShow} style={{background: 'transparent', border: 'none', textDecoration: 'none' }}><Card.Img variant="top" style={{ width: '2rem'}} src={item.img} /></Button>


          </Card.Body>
        </Card>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  
</Modal.Header>
<Modal.Body ><Card.Img src={item.certificado}/></Modal.Body>

</Modal>
        
        </>
    )

}

export default Curso;
