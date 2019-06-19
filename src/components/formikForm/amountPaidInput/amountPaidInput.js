import React from 'react';
import RadioInput from '../radioInput/radioInput';

const radioLabels = ['prepaid', '$10', '$35', 'other'];

const AmountPaidInput = props => (
  <RadioInput
    sectionLabel="Amount Paid"
    componentName="amountPaid"
    radioLabels={radioLabels}
    {...props}
  />
);

export default AmountPaidInput;
