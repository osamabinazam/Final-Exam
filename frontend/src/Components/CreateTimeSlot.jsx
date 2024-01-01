import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik';
import axios from 'axios';

function CreateTimeSlot() {

  const initialValues = {
    startTime: '',
    endTime: ''
  }

  const validate = values => {
    const errors = {};
    if (!values.startTime) {
      errors.startTime = 'Required';
    }
    if (!values.endTime) {
      errors.endTime = 'Required';
    }
    return errors;
  }

  const onSubmit = (values, { setSubmitting }) => {
    // Make a post call
    axios.post('http://localhost:8080/slots', values).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <h1>Create Time Slot</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="startTime">Start Time</label> <br />
            <input type="text" name="startTime" placeholder="Enter start time" />
            <ErrorMessage name="startTime" component="div" />
            <br />
            <label htmlFor="endTime">End Time</label> <br />
            <input type="text" name="endTime" placeholder="Enter end time" />
            <ErrorMessage name="endTime" component="div" />
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

export default CreateTimeSlot