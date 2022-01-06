import React from 'react'
import { Form, Button } from 'react-bootstrap'
import CustomButton from '../components/CustomButton'

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
                <CustomButton 
                    buttonStyle={{marginTop: '20px', width: '100%'}} 
                    onClick={button.onClick}
                    text={button.text}
                    loading={button.loading}
                    disabled={button.loading}
                />
                <div className='subRouterWrapper' onClick={subRouters.onClick}>
                    <span className='subRouterText'>{subRouters.text}</span>
                </div>
            </Form>
            
        </>
    )
}

export default AuthCard