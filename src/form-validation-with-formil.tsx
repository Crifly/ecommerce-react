import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { TextError } from './errorMasagesComponentForFormValidation'
import { Button } from '@mui/material'


const initialValues: any = {
    firstName: '',
    lastName: '',
    email: ''
}

const onSubmit = (values: any) => {

}

const validationSchema = Yup.object({
    firstName: Yup.string().required('first name is required!'),
    lastName: Yup.string().required('last name is required!'),
    email:Yup.string().required('email is required!'),
})

export const FormValidationWithFormik = () => {
    return (
        <>
            <div style={{ margin: '5%', }} >
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >

                    {formik => {
                        console.log('FormikProps',formik);
                        return(
                        <Form>
                            <div style={{ width: '25%', backgroundColor: '#E7EAF3', height: '20rem', padding: '20px', borderRadius: '10px' }} >

                                <div style={{marginBottom:'10px'}} >
                                    <label style={{ marginBottom: '20px', fontSize: '14px', color: '#511281' }} htmlFor="firstName">First Name</label>
                                    <Field type="text" id="firstName" name="firstName" style={{ autoComplete: 'off', width: '100%', marginTop: '5px', marginBottom: '3px', border: '1px solid lightgray', height: '30px', borderRadius: '5px' }} />
                                    <ErrorMessage name="firstName" component={TextError} />
                                </div>

                                <div style={{marginBottom:'10px'}} >
                                    <label style={{ marginBottom: '20px', fontSize: '14px', color: '#511281' }} htmlFor="lastName">Last Name</label>
                                    <Field type="text" id="lastName" name="lastName" style={{ autoComplete: 'off', width: '100%', marginTop: '5px', marginBottom: '3px', border: '1px solid lightgray', height: '30px', borderRadius: '5px' }} />
                                    <ErrorMessage name="lastName">
                                        {errorMsg => <div style={{ color: 'red',fontSize:'12px' }} > {errorMsg} </div>}
                                    </ErrorMessage>
                                </div>

                                <div style={{marginBottom:'10px'}} >
                                    {
                                        (FormikProps:any) => {
                                            console.log("FormikProps",FormikProps)
                                            
                                        }
                                    }
                                    <label htmlFor="email" style={{ marginBottom: '20px', fontSize: '14px', color: '#511281' }} >email</label>
                                    <Field type="text" id="email" name="email" style={{ autoComplete: 'off', width: '100%', marginTop: '5px', marginBottom: '3px', border: '1px solid lightgray', height: '30px', borderRadius: '5px' }} /> 
                                    <ErrorMessage name="email" > 
                                        {errorMsg => <div style={{color:'red',fontSize:'12px'}} >{errorMsg}</div> }
                                    </ErrorMessage>
                                </div>

                                <div>
                                    <Button variant="contained" type="submit" disabled={!(formik.dirty && formik.isValid)} >
                                        submit
                                    </Button>
                                    
                                </div>

                            </div>
                        </Form>
                        )
                    }}



                </Formik>
            </div>
        </>
    )
}




