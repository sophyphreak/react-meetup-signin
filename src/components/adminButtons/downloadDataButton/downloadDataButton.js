import React from 'react';
import { Button } from 'reactstrap';

const DownloadDataButton = props => (
  <Button color="primary" onClick={() => props.downloadData()}>
    Download data
  </Button>
);

export default DownloadDataButton;
