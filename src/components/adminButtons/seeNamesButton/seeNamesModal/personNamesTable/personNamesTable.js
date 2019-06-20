import React from 'react';
import moment from 'moment';
import { Table } from 'reactstrap';

const PersonNamesTable = ({ personList }) => (
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {personList.map((person, index) => (
        <tr>
          <th scope="row">{index + 1}</th>
          <th>{person.name}</th>
          <th>{moment(person.date).format('ddd MMM D')}</th>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default PersonNamesTable;
