import React from 'react';
import BasicInput from '../basicInput/basicInput';

const EmailInput = props => (
  <BasicInput componentName="email" label="Email" type="email" {...props} />
);

export default EmailInput;
