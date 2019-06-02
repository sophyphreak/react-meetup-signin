import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { CSVLink } from 'react-csv';

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

const initialValues = {
  name: '',
  email: '',
  heardAboutUs: '',
  amountPaid: '',
  paymentMethod: ''
};

const getLocalStorage = () => {
  let local = [];
  if (!JSON.parse(localStorage.getItem('local'))) {
    return local;
  }
  return JSON.parse(localStorage.getItem('local'));
};

class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personList: getLocalStorage()
    };
  }
  componentDidUpdate() {}
  addSignIn(person) {
    person.date = moment().format('dddd, MMMM Do YYYY');
    const { personList } = this.state;
    personList.push(person);
    this.setState(() => ({ personList }));
    localStorage.setItem('local', JSON.stringify(personList));
  }
  clearState() {
    const personList = [];
    this.setState(() => ({ personList }));
    localStorage.clear();
  }
  render() {
    return (
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={SignInSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            this.addSignIn(values);
            resetForm(initialValues);
            setSubmitting(false);
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CSVLink
          data={this.state.personList}
          headers={[
            { label: 'Name', key: 'name' },
            { label: 'Email', key: 'email' },
            { label: 'Hear about us', key: 'heardAboutUs' },
            { label: 'Amount Paid', key: 'amountPaid' },
            { label: 'Payment Method', key: 'paymentMethod' },
            { label: 'Date', key: 'date' }
          ]}
          filename={`Kadampa signin ${moment().format('dddd, MMMM Do')}`}
        >
          Download data
        </CSVLink>
        <br />
        <br />
        <button onClick={() => this.clearState()}>clear data</button>
      </div>
    );
  }
}

export default Basic;
