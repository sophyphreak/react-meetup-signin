import React from 'react';
import BasicInput from '../basicInput';

const HeardAboutUs = props => (
  <BasicInput
    componentName="heardAboutUs"
    label="How'd you hear about us"
    type="text"
    {...props}
  />
);

export default HeardAboutUs;
