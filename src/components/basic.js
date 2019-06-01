import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  heardAboutUs: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  amountPaid: Yup.number()
    .min(0, 'Not enough!')
    .required('Required'),
  paymentMethod: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

const Basic = () => (
  <div>
    <Formik
      initialValues={{
        name: '',
        email: '',
        heardAboutUs: '',
        amountPaid: '',
        paymentMethod: ''
      }}
      validationSchema={SignInSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>Name</label>
          <br />
          <Field type="text" name="name" />
          <ErrorMessage name="email" component="div" />
          <br />
          <br />
          <label>Email</label>
          <br />
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <br />
          <br />
          <label>How'd you hear about us</label>
          <br />
          <Field type="text" name="heardAboutUs" />
          <ErrorMessage name="heardAboutUs" component="div" />
          <br />
          <br />
          <label>Amount Paid</label>
          <br />
          <label>$</label>
          <Field type="number" name="amountPaid" />
          <ErrorMessage name="amountPaid" component="div" />
          <br />
          <br />
          <label>Payment Method</label>
          <br />
          <Field type="text" name="paymentMethod" />
          <ErrorMessage name="paymentMethod" component="div" />
          <br />
          <br />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
