import React from 'react';
import RadioInput from '../radioInput';

const radioLabels = ['prepaid', '$10', '$35'];

const AmountPaidInput = props => (
  <RadioInput
    sectionLabel="Amount Paid"
    componentName="amountPaid"
    radioLabels={radioLabels}
    {...props}
  />
);

export default AmountPaidInput;
