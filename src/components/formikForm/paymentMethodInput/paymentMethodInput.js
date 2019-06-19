import React from 'react';
import RadioInput from '../radioInput';

const radioLabels = ['prepaid', 'cash', 'credit card'];

const PaymentMethodInput = props => (
  <RadioInput
    sectionLabel="Payment Method"
    componentName="paymentMethod"
    radioLabels={radioLabels}
    {...props}
  />
);

export default PaymentMethodInput;
