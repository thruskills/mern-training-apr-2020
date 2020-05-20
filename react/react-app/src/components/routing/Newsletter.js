import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';


function Newsletter () {

    return (
        <Formik
            initialValues = {{name:'',email:''}}
            onSubmit = {(values, { setSubmitting }) =>{
                console.log('form submitted');
                console.log('form submit')
                // fetch call
                setTimeout(()=>{
                    alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                }, 500);
            }}
            validationSchema = {Yup.object().shape({
                name: Yup.string().min(4).required('Name is required'),
                email: Yup.string().email().required('Email id is required')
            })}
        >
        {
            (props) => {
                const {handleChange, handleSubmit, handleBlur, handleReset, values, touched, errors, dirty, isSubmitting} = props;

                return (
                <form onSubmit={handleSubmit}>
                    <h1>Subscribe to my Newsletter</h1>
                    <label htmlFor="name" 
                        className={
                            errors.name && touched.name ? 'input-feedback' : ''
                        }>Name</label>
                    <input 
                        id="name" 
                        type="text" 
                        value={values.name} 
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        className={
                            errors.name && touched.name ? 'text-input error' : 'text-input'
                        }
                    />
                    {
                        errors.name && touched.name && <div className="input-feedback">{errors.name}</div>
                    }

                    <br />

                    <label htmlFor="name">Email</label>
                    <input 
                        id="email" 
                        type="text" 
                        value={values.email} 
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        className ={
                            errors.email && touched.email ? 'text-input error' : 'text-input'
                        }
                    />
                    {
                        errors.email && touched.email && <div className="input-feedback">{errors.email}</div>
                    }


                    <button
                        type="button"
                        className="outline"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                        >
                        Reset
                    </button>
                    <button type="button">Subscribe</button>
                </form>
                )
            }
        }
        </Formik>
    )
    
}

export default Newsletter;