import React from 'react';
import SelectInput from '../selectInput/selectInput';

const selectLabels = ['prepaid', '$10', '$35', 'other'];

const AmountPaidInput = props => (
  <SelectInput
    sectionLabel="Amount Paid"
    componentName="amountPaid"
    selectLabels={selectLabels}
    {...props}
  />
);

export default AmountPaidInput;
