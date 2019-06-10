import React from 'react';
import BasicInput from '../basicInput';

const AmountPaidInput = props => (
  <BasicInput
    componentName="amountPaid"
    label="Amount Paid"
    type="number"
    {...props}
  />
);

export default AmountPaidInput;
