import React from 'react';
import { Button } from 'reactstrap';

const ClearStateButton = props => (
  <Button color="warning" onClick={() => props.clearState()}>
    Clear data
  </Button>
);

export default ClearStateButton;
