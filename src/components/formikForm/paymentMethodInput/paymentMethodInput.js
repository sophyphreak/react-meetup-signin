import React from 'react';
import BasicInput from '../basicInput';

const PaymentMethodInput = props => (
  <BasicInput
    componentName="paymentMethod"
    label="Payment Method"
    type="text"
    {...props}
  />
);

export default PaymentMethodInput;
