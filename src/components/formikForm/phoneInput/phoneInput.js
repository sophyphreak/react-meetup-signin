import React from 'react';
import BasicInput from '../basicInput/basicInput';

const PhoneInput = props => (
  <BasicInput
    componentName="phone"
    label="Phone number"
    type="text"
    {...props}
  />
);

export default PhoneInput;
