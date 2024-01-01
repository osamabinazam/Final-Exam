import React from 'react'
// import formik libraRY
import { Formik, Form, ErrorMessage } from 'formik';

function BookTimeSlot() {
    const initialValues = {
        name: '',
        email: ''
    }
    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        }
       
        return errors;
    }

    const onSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }
        ,400);
    }



  return (
    <div>
        <h1>
            Book Time Slot
        </h1>

        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <label htmlFor="name">Name</label> <br />
                    <input type="text" name="name" placeholder="Enter your name" />
                    <ErrorMessage name="name" component="div" />
                    <br />
                    <label htmlFor="email">Email</label> <br />
                    <input type="email" name="email" placeholder="Enter your email" />
                    <ErrorMessage name="email" component="div" />
                    <br />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>

        

    </div>
  )
}

export default BookTimeSlot