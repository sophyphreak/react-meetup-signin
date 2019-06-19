import React from 'react';
import { Label, Input } from 'reactstrap';
import { Field } from 'formik';

const Radio = ({ checked, componentName, label, value }) => (
  <div>
    <Label>
      <Input
        checked={checked}
        tag={Field}
        type="radio"
        name={componentName}
        value={value}
      />
      {label}
    </Label>
  </div>
);

export default Radio;
