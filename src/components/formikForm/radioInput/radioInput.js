import React from 'react';
import { Label, FormGroup } from 'reactstrap';
import Radio from './radio';

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

export default RadioInput;
