import React from 'react';
import { Label, Input, FormGroup } from 'reactstrap';
import { Field } from 'formik';

const AmountPaidInput = ({ value }) => (
  <div>
    <Label>Amount Paid</Label>
    <br />
    <FormGroup name="amountPaid" check>
      <Label check>
        <Input
          checked={value === 'prepaid'}
          tag={Field}
          type="radio"
          name="amountPaid"
          value="prepaid"
        />
        prepaid
      </Label>
      <br />
      <Label check>
        <Input
          checked={value === '$10'}
          tag={Field}
          type="radio"
          name="amountPaid"
          value="$10"
        />
        $10
      </Label>
      <br />
      <Label check>
        <Input
          checked={value === '$35'}
          tag={Field}
          type="radio"
          name="amountPaid"
          value="$35"
        />
        $35
      </Label>
    </FormGroup>
  </div>
);

export default AmountPaidInput;
