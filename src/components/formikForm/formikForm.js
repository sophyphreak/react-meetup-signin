import React from 'react';
import { Formik, Form } from 'formik';
import { FormGroup, Col, Button, Modal, ModalBody } from 'reactstrap';
import NameInput from './nameInput/nameInput';
import CompanyInput from './companyInput/companyInput';
import PhoneNumber from './phoneInput/phoneInput';
import EmailInput from './emailInput/emailInput';

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
            <CompanyInput error={errors.company} touched={touched.company} />
            <br />
            <PhoneNumber error={errors.phone} touched={touched.phone} />
            <br />
            <EmailInput error={errors.email} touched={touched.email} />
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
