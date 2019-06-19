import React from 'react';
import { Label, FormGroup } from 'reactstrap';
import Radio from './radio';

const RadioInput = ({ value, componentName, sectionLabel, radioLabels }) => (
  <>
    <Label>{sectionLabel}</Label>
    <br />
    <FormGroup name={componentName} check>
      {radioLabels.map(label => (
        <Radio
          checked={value === label}
          componentName={componentName}
          label={label}
          value={label}
        />
      ))}
    </FormGroup>
  </>
);

export default RadioInput;
