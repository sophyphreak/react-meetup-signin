import React from 'react';
import SelectInput from '../selectInput/selectInput';

const selectLabels = [
  'Flyer',
  'Facebook/Instagram',
  'Meetup',
  'Our website',
  'Google search',
  'Friend/Family',
  'Walk by',
  'Attended KMC Houston before'
];

const HeardAboutUs = () => (
  <SelectInput
    sectionLabel="How'd you hear about us"
    componentName="heardAboutUs"
    selectLabels={selectLabels}
  />
);

export default HeardAboutUs;
