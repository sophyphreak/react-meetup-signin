import React from 'react';
import { Field } from 'formik';
import { Label, Input, FormFeedback } from 'reactstrap';

const NameInput = ({ error, touched }) => (
  <div>
    <Label for="name">Name</Label>
    <Input type="text" name="name" tag={Field} invalid={error && touched} />
    <FormFeedback>{error}</FormFeedback>
  </div>
);

export default NameInput;
