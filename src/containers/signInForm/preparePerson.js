import moment from 'moment';

const preparePerson = person => {
  person.date = moment().format('dddd, MMMM Do YYYY');
  if (person.heardAboutUs === 'Other' && person.other.heardAboutUs) {
    person.heardAboutUs = person.other.heardAboutUs;
  }
  if (person.amountPaid === 'other' && person.other.amountPaid) {
    person.amountPaid = person.other.amountPaid;
  }
  if (person.paymentMethod === 'other' && person.other.paymentMethod) {
    person.paymentMethod = person.other.paymentMethod;
  }
  delete person.other;
  return person;
};

export default preparePerson;
