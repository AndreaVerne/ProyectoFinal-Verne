import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <form id="contact-form" className='p-4'>
            
      <FloatingLabel className="mb-3" controlId="floatingPassword" label="Nombre y apellido">
        <Form.Control type="text" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel  controlId="floatingTextarea2" label="Comentario">
        <Form.Control
          as="textarea"
          className="mb-3"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <button className="btn">Enviar</button>
    
    </form>
  )
}

export default Contact
