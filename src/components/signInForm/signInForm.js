import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import moment from 'moment';
import XLSX from 'xlsx';
import {
  FormGroup,
  Col,
  Button,
  Label,
  Input,
  InputGroup,
  FormFeedback
} from 'reactstrap';

import SignInSchema from './signInSchema';

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

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personList: []
    };
  }
  componentDidMount() {
    const personList = getLocalStorage();
    this.setState(() => ({ personList }));
  }
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
  downloadXlsxFile() {
    // Convert file to useable format array of arrays
    const personList = this.state.personList;
    const data = [
      ['Name', 'Email', 'Hear About Us', 'Amount Paid', 'Payment Method']
    ];
    personList.forEach(person => {
      data.push([
        person.name,
        person.email,
        person.heardAboutUs,
        person.amountPaid,
        person.paymentMethod
      ]);
    });

    // use XLSX to convert and download file
    const getFilename = () =>
      `Kadampa signin ${moment().format('dddd, MMMM Do')}.xlsx`;
    const filename = getFilename();
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const new_workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(new_workbook, worksheet, 'SheetJS');
    XLSX.writeFile(new_workbook, filename);
  }
  render() {
    return (
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={SignInSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            this.addSignIn(values);
            resetForm(initialValues);
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <FormGroup>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    tag={Field}
                    invalid={errors.name && touched.name}
                  />
                  <FormFeedback>{errors.name}</FormFeedback>
                  <br />
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    tag={Field}
                    invalid={errors.email && touched.email}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
                  <br />
                  <Label for="heardAboutUs">How'd you hear about us</Label>
                  <Input
                    type="text"
                    name="heardAboutUs"
                    tag={Field}
                    invalid={errors.heardAboutUs && touched.heardAboutUs}
                  />
                  <FormFeedback>{errors.heardAboutUs}</FormFeedback>
                  <br />
                  <Label for="amountPaid">Amount Paid</Label>
                  <InputGroup>
                    <p style={{ margin: '.45em .4em 0 0' }}>$</p>
                    <Input
                      type="number"
                      name="amountPaid"
                      tag={Field}
                      invalid={errors.amountPaid && touched.amountPaid}
                    />
                    <FormFeedback>{errors.amountPaid}</FormFeedback>
                  </InputGroup>
                  <br />
                  <Label for="paymentMethod">Payment Method</Label>
                  <Input
                    type="text"
                    name="paymentMethod"
                    tag={Field}
                    invalid={errors.paymentMethod && touched.paymentMethod}
                  />
                  <FormFeedback>{errors.paymentMethod}</FormFeedback>
                  <br />
                  <br />
                  <Button
                    type="submit"
                    style={{ backgroundColor: 'rebeccapurple' }}
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Col>
              </FormGroup>
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
        <Button color="primary" onClick={() => this.downloadXlsxFile()}>
          Download data
        </Button>
        <br />
        <br />
        <br />
        <br />
        <Button color="warning" onClick={() => this.clearState()}>
          Clear data
        </Button>
      </div>
    );
  }
}

export default SignInForm;
