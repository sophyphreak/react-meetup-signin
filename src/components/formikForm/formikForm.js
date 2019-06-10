import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
  FormGroup,
  Col,
  Button,
  Label,
  Input,
  InputGroup,
  FormFeedback
} from 'reactstrap';
import NameInput from './nameInput/nameInput';

const FormikForm = props => (
  <Formik
    initialValues={props.initialValues}
    validationSchema={props.validationSchema}
    onSubmit={props.onSubmit}
  >
    {({ errors, touched, isSubmitting }) => (
      <Form>
        <FormGroup>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <NameInput error={errors.name} touched={touched.name} />
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
);

export default FormikForm;
