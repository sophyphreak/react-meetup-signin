import React from 'react';
import SelectInput from '../selectInput/selectInput';

const selectLabels = ['prepaid', 'cash', 'credit card', 'other'];

const PaymentMethodInput = props => (
  <SelectInput
    sectionLabel="Payment Method"
    componentName="paymentMethod"
    selectLabels={selectLabels}
    {...props}
  />
);

export default PaymentMethodInput;
