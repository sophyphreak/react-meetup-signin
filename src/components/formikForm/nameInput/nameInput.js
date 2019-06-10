import React from 'react';
import { Field } from 'formik';
import { Label, Input, FormFeedback } from 'reactstrap';
import BasicInput from '../basicInput';

const NameInput = props => (
  <BasicInput componentName="name" label="Name" type="text" {...props} />
);

export default NameInput;
