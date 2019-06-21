import moment from 'moment';

const preparePerson = person => {
  person.date = moment();
  return person;
};

export default preparePerson;
