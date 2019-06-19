import React from 'react';
import { Formik, Form } from 'formik';
import { FormGroup, Col, Button, Modal, ModalBody } from 'reactstrap';
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
    {({ values, errors, touched, isSubmitting }) => (
      <Form>
        <FormGroup>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <input type="hidden" value="for disrupting autocomplete" />
            <Modal isOpen={props.successModal} centered={true}>
              <ModalBody>Success!</ModalBody>
            </Modal>
            <NameInput error={errors.name} touched={touched.name} />
            <br />
            <EmailInput error={errors.email} touched={touched.email} />
            <br />
            <HeardAboutUs
              value={values.heardAboutUs}
              other={values.other.heardAboutUs}
            />
            <br />
            <AmountPaidInput
              value={values.amountPaid}
              other={values.other.amountPaid}
            />
            <br />
            <PaymentMethodInput
              value={values.paymentMethod}
              other={values.other.paymentMethod}
            />
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
