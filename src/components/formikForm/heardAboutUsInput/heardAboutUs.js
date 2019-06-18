import React from 'react';
import { Field } from 'formik';
import { Input, Label } from 'reactstrap';
// import BasicInput from '../basicInput';

const HeardAboutUs = () => (
  <div>
    <Label for="heardAboutUs">How'd you hear about us</Label>
    <br />
    <Input tag={Field} component="select" name="heardAboutUs">
      <option value="">Please select</option>
      <option value="Flyer">Flyer</option>
      <option value="Facebook/Instagram">Facebook/Instagram</option>
      <option value="Meetup">Meetup</option>
      <option value="Our website">Our website</option>
      <option value="Google search">Google search</option>
      <option value="Friend/Family">Friend/Family</option>
      <option value="Walk by">Walk by</option>
      <option value="Attended KMC Houston before">
        Attended KMC Houston before
      </option>
    </Input>
  </div>
);

export default HeardAboutUs;
