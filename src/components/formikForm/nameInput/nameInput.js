import React from 'react';
import BasicInput from '../basicInput';

const NameInput = props => (
  <BasicInput componentName="name" label="Name" type="text" {...props} />
);

export default NameInput;
