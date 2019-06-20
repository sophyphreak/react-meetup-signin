import React from 'react';

import SeeNamesButton from './seeNamesButton/seeNamesButton';
import DownloadDataButton from './downloadDataButton/downloadDataButton';
import ClearDataButton from './clearDataButton/clearDataButton';

const AdminButtons = ({ personList, downloadData, clearState }) => (
  <>
    <SeeNamesButton personList={personList} />
    <br />
    <br />
    <br />
    <br />
    <DownloadDataButton downloadData={downloadData} />
    <br />
    <br />
    <br />
    <br />
    <ClearDataButton clearState={clearState} />
  </>
);

export default AdminButtons;
