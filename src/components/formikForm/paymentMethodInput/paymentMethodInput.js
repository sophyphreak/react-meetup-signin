import React from 'react';
import { Label, Input, FormGroup } from 'reactstrap';
import { Field } from 'formik';

const PaymentMethodInput = ({ value }) => (
  <div>
    <Label>Payment Method</Label>
    <br />
    <FormGroup name="amountPaid" check>
      <Label check>
        <Input
          checked={value === 'prepaid'}
          tag={Field}
          type="radio"
          name="paymentMethod"
          value="prepaid"
        />
        prepaid
      </Label>
      <br />
      <Label check>
        <Input
          checked={value === 'cash'}
          tag={Field}
          type="radio"
          name="paymentMethod"
          value="cash"
        />
        cash
      </Label>
      <br />
      <Label check>
        <Input
          checked={value === 'credit card'}
          tag={Field}
          type="radio"
          name="paymentMethod"
          value="credit card"
        />
        credit card
      </Label>
    </FormGroup>
  </div>
);

export default PaymentMethodInput;
