import React from 'react';
import BasicInput from '../basicInput/basicInput';

const CompanyInput = props => (
  <BasicInput componentName="company" label="Company" type="text" {...props} />
);

export default CompanyInput;
