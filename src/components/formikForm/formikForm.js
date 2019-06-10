import React from 'react';
import { Formik, Form } from 'formik';
import { FormGroup, Col, Button } from 'reactstrap';
import NameInput from './nameInput/nameInput';
import EmailInput from './emailInput/emailInput';
import HeardAboutUs from './heardAboutUsInput/heardAboutUs';
import AmountPaidInput from './amountPaidInput/amountPaidInput';
import PaymentMethodInput from './paymentMethodInput/paymentMethodInput';

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
            <EmailInput error={errors.email} touched={touched.email} />
            <br />
            <HeardAboutUs
              error={errors.heardAboutUs}
              touched={touched.heardAboutUs}
            />
            <br />
            <AmountPaidInput
              error={errors.amountPaid}
              touched={touched.amountPaid}
            />
            <br />
            <PaymentMethodInput
              error={errors.paymentMethod}
              touched={touched.paymentMethod}
            />
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
