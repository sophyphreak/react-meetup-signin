import React from 'react';

import DownloadDataButton from './downloadDataButton/downloadDataButton';
import ClearDataButton from './clearDataButton/clearDataButton';

const AdminButtons = props => (
  <div>
    <DownloadDataButton downloadData={props.downloadData} />
    <br />
    <br />
    <br />
    <br />
    <ClearDataButton clearState={props.clearState} />
  </div>
);

export default AdminButtons;
