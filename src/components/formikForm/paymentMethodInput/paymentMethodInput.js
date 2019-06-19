import React from 'react';
import RadioInput from '../radioInput/radioInput';

const radioLabels = ['prepaid', 'cash', 'credit card', 'other'];

const PaymentMethodInput = props => (
  <RadioInput
    sectionLabel="Payment Method"
    componentName="paymentMethod"
    radioLabels={radioLabels}
    {...props}
  />
);

export default PaymentMethodInput;
