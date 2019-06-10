import React from 'react';
import { Field } from 'formik';
import { Label, Input, FormFeedback } from 'reactstrap';

const BasicInput = ({ componentName, label, type, error, touched }) => (
  <div>
    <Label for={componentName}>{label}</Label>
    <Input
      type={type}
      name={componentName}
      tag={Field}
      invalid={error && touched}
    />
    <FormFeedback>{error}</FormFeedback>
  </div>
);

export default BasicInput;