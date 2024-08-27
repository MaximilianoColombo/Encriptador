import {React, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import Alerts from '../functions/Alerts'

function ModalForm ({selectedItem}) {
    //useState hooks
    const [password, setPassword] = useState("")
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(null)

    //Event handlers

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (password === selectedItem.password){
          setIsPasswordCorrect(true)
        }
        else{
          setIsPasswordCorrect(false)
        }
        setPassword("")
      }
    
      const handleCopy = () => {
        navigator.clipboard.writeText(selectedItem.originalText).then(() => {
          Alerts.showSuccessMessage("Copiado al portapapeles exitosamente.");
        }).catch(err => {
          Alerts.showErrorMessage("Error al copiar al portapapeles.");
        });
      };

    return (
        <Form onSubmit={handleSubmit} className='w-100'>
        <Form.Group className="mb-3 text-start" controlId="encryptedText">
          <Form.Label >Texto encriptado:</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            value={selectedItem.encryptedText} 
            readOnly
            required 
          />
        </Form.Group>
        {isPasswordCorrect !== true && (
            <Form.Group className="mb-3 text-start" controlId="passwordCheck">
            <Form.Label >Ingrese la contraseña:</Form.Label>
            <Form.Control 
              type="password" 
              placeholder='Ingrese su contraseña...'
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </Form.Group>
        )}
        
        {isPasswordCorrect === false && (
              <p className="mt-3 text-danger">
                Contraseña incorrecta. Vuelve a intentarlo.
              </p>
            )}
        {isPasswordCorrect === true && (
              <>
                <Form.Group className="mb-3 text-start" controlId="decryptedText">
                  <Form.Label>Texto desencriptado:</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={3} 
                    value={selectedItem.originalText} 
                    readOnly
                  />
                </Form.Group>
                <Button variant="secondary"  className='w-100 mb-3' onClick={handleCopy}>
                  Copiar al portapapeles
                </Button>
              </>
            )}
        
        <Button variant="primary" type="submit" className='w-100'>
          Desencriptar
        </Button>
      </Form>
    )
}

export default ModalForm