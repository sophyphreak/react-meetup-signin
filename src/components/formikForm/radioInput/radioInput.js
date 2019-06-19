import React from 'react';
import { Label, Input, FormGroup } from 'reactstrap';
import { Field } from 'formik';

const RadioInput = ({ value, componentName, sectionLabel, radioLabels }) => (
  <div>
    <Label>{sectionLabel}</Label>
    <br />
    <FormGroup name={componentName} check>
      {radioLabels.map((label, index) => (
        <Radio
          checked={value === label}
          componentName={componentName}
          label={label}
          value={label}
        />
      ))}
    </FormGroup>
  </div>
);

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

export default RadioInput;
