import React from 'react';
import { Button } from 'reactstrap';

const AdminButtons = props => (
  <div>
    <Button color="primary" onClick={() => props.downloadData()}>
      Download data
    </Button>
    <br />
    <br />
    <br />
    <br />
    <Button color="warning" onClick={() => props.clearState()}>
      Clear data
    </Button>
  </div>
);

export default AdminButtons;
