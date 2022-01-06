import React from 'react'
import { Form, Button } from 'react-bootstrap'


const AuthCard = ({title, formData, onChange, button, subRouters}) => {
    return (
        <>
            <span className='title'>{title}</span>
            <Form className='formWrapper'>
                {formData.map((form, index) => 
                    <Form.Group key={index} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{form.label}</Form.Label>
                        <Form.Control name={form.name} onChange={onChange} type={form.type} placeholder={form.placeholder} />
                    </Form.Group>
                )}
                <Button style={{marginTop: '20px'}} className='submitButton' onClick={button.onClick}>
                    {button.text}
                </Button>
                <div className='subRouterWrapper' onClick={subRouters.onClick}>
                    <span className='subRouterText'>{subRouters.text}</span>
                </div>
            </Form>
            
        </>
    )
}

export default AuthCard