import {React, useState} from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup, Modal } from 'react-bootstrap';
import {useItems} from "../functions/API"
import ModalForm from './ModalForm';
import Alerts from "../functions/Alerts"
import { formatDateTime } from '../functions/Utils';



function ItemCard({ item, removeItem }) {
  //useState hooks
  const [show, setShow] = useState(false) 
  const [selectedItem, setSelectedItem] = useState({})

  //event handlers
  const handleDelete = async() => {
    const confirmed = await Alerts.showConfirmationDialog()
    
    if (confirmed){
      removeItem(item.id)
    }
  }

  const handleShow = (item) => {
    setSelectedItem(item)
    setShow(true)
    setIsPasswordCorrect(null)
  }

  const handleClose = () => {
    setShow(false)
    setIsPasswordCorrect(null)
  }

  //variables
  const { dateString, timeString } = formatDateTime(item.id);


  return (
    <>
    <Col className=''>
      <Card className='p-1 h-100'>
        <Card.Body className='d-flex flex-column'>
          <Card.Text>
            <div><strong>Fecha:</strong> {dateString}</div>
            <div><strong>Hora:</strong> {timeString}</div>
            <div><strong>Texto encriptado:</strong> {item.encryptedText}</div>
          </Card.Text>
          <ButtonGroup className="d-flex flex-column flex-sm-row gap-2 mt-auto justify-content-center">
            <Button variant="secondary" onClick={() => handleShow(item)}>Desencriptar</Button>
            <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
     <Modal show={show} onHide={handleClose}>
     <Modal.Header closeButton>
       <Modal.Title>Desencriptar texto</Modal.Title>
     </Modal.Header>
     <Modal.Body>
      <ModalForm selectedItem={selectedItem}></ModalForm>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleClose}>
         Cerrar
       </Button>
     </Modal.Footer>
   </Modal>
   </>
  );
}

function ItemList() {
    const {removeItem, items} = useItems('items', [])
    

    return (
      <div className='bg-secondary p-3'>
        <h1>Historial</h1>
        <Container fluid className='mt-4'>
          <Row xs={1} sm={2} md={2} lg={3} className="g-3 ">
              {items.map((item) => (
              <ItemCard key={item.id} item={item} removeItem={removeItem}/>
              ))}
          </Row>
        </Container>

      </div>

    );
}

export default ItemList;
