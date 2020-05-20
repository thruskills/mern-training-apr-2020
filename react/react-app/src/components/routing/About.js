import React from 'react';
import {Formik} from  'formik';
import * as Yup from 'yup';

function FormikApp () {
    return (
    <div>
        <h1>Formik Example</h1>
        
        <Formik 
            initialValues={{ email: '', name: ''}}
            onSubmit={(values, { setSubmitting })=>{
                console.log('form submit')
                // fetch call
                setTimeout(()=>{
                    alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                }, 500);
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().min(2).required('Required'),
                email: Yup.string().email().required('Required')
            })}
        >
            {
                props => {
                    const {
                      values,
                      touched,
                      errors,
                      dirty,
                      isSubmitting,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      handleReset,
                    } = props;
                
                    return(
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name" style={{ display: 'block' }}>
                                Name
                            </label>

                            <input
                                id="name"
                                placeholder="Enter your name"
                                type="text"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.name && touched.name ? 'text-input error' : 'text-input'
                                }
                            />
                            {errors.name &&
                            touched.name && <div className="input-feedback">{errors.name}</div>}

                            <br />


                            <label htmlFor="email" style={{ display: 'block' }}>
                                Email
                            </label>

                            <input
                                id="email"
                                placeholder="Enter your email"
                                type="text"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.email && touched.email ? 'text-input error' : 'text-input'
                                }
                            />
                            {errors.email &&
                            touched.email && <div className="input-feedback">{errors.email}</div>}

                            <button
                                type="button"
                                className="outline"
                                onClick={handleReset}
                                disabled={!dirty || isSubmitting}
                                >
                            Reset
                            </button>

                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>

                            {/* <DisplayFormikState {...props} /> */}
                        </form>
                    )
            }
        }
        </Formik>

        {/* form method action submitHandler */}
    </div>
    )
}

export default FormikApp;