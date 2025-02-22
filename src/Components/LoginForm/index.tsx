import React, { ReactNode, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import google from '../../Assets/images/google.png';
import './index.css';
// import supabase from '../../utils/api';

interface MyFormProps {
    children?: ReactNode; 
    nameButton?: string;
}
interface MyFormValues {
    email: string;
    password: string;
}

export const  MyForm: React.FC<MyFormProps> =  ({ children, nameButton }: MyFormProps) => {
    
    const initialValues: MyFormValues = {
        email: '',
        password: ''
    };

    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = async (values: MyFormValues) => {
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('please write a valid email').required(),
                    password: Yup.string().min(8, 'Password must be at least 8 characters long').required()
                })}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form className='inputForm'>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" className='put' placeholder="Enter your email" />
                            {touched?.email && <ErrorMessage name="email" component="p" className="erreurMsg" />}
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" className='put' placeholder="Enter your password" />
                            {touched?.password && <ErrorMessage name="password" component="p" className='erreurMsg' />}
                        </div>
                        
                        <div>{children}</div>
                        <div className='button'>
                            <button className='start' type="submit" >{nameButton}</button>
                            <button className='emailButton'><img src={google} className='google' />Sign in with Google</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
