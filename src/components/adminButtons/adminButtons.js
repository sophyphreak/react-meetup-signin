import React from 'react';

import DownloadDataButton from './downloadDataButton/downloadDataButton';
import ClearStateButton from './clearDataButton/clearDataButton';

const AdminButtons = props => (
  <div>
    <DownloadDataButton downloadData={props.downloadData} />
    <br />
    <br />
    <br />
    <br />
    <ClearStateButton clearState={props.clearState} />
  </div>
);

export default AdminButtons;
