import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {useItems} from "../functions/API"
import { useState } from 'react';
import Alerts from '../functions/Alerts';
import { isTextValid } from '../functions/Utils';

function TextForm() {

  //useState hooks
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');

  //custom hooks
  const {addItem} = useItems('items', [])


//event handlers
  const handleSubmit = (event) => {
      event.preventDefault()

      if (isTextValid(text)) {
        addItem(text, password)
        setText('')
        setPassword('')
        Alerts.showSuccessMessage("Texto encriptado exitosamente. Se anadió al historial.")
      } 
      else{
        Alerts.showErrorMessage("Texto inválido. No se admiten mayúsculas ni acentos.")
        }
      }

  return (
    <Form onSubmit={handleSubmit} className='w-100'>
      <Form.Group className="mb-3 text-start" controlId="textArea">
        <Form.Label >Ingrese el texto aquí:</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={3} 
          placeholder='Texto a encriptar...' 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          required 
        />
      </Form.Group>
      <Form.Group className="mb-3 text-start" controlId="passwordInput">
        <Form.Label >Cree una contraseña nueva:</Form.Label>
        <Form.Control 
          type="password" 
          placeholder='Proteja su texto encriptado...'
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className='w-100'>
        Encriptar
      </Button>
    </Form>
  );
}
export default TextForm;