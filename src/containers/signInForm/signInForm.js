import React, { Component } from 'react';
import moment from 'moment';

import FormikForm from '../../components/formikForm/formikForm';
import signInSchema from './signInSchema';
import downloadXlsx from './downloadXlsx';
import BigSpace from '../../components/bigSpace/bigSpace';
import AdminButtons from '../../components/adminButtons/adminButtons';
import formInitialValues from './formInitialValues';

const getLocalStorage = () => {
  let local = [];
  if (!JSON.parse(localStorage.getItem('local'))) {
    return local;
  }
  return JSON.parse(localStorage.getItem('local'));
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personList: [],
      successModal: false
    };
    this.addSignIn = this.addSignIn.bind(this);
    this.clearState = this.clearState.bind(this);
    this.downloadData = this.downloadData.bind(this);
  }
  componentDidMount() {
    const personList = getLocalStorage();
    this.setState(() => ({ personList }));
  }
  addSignIn(person) {
    this.setState({ successModal: true });
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
    const { personList } = this.state;
    personList.push(person);
    this.setState(() => ({ personList }));
    localStorage.setItem('local', JSON.stringify(personList));
    setTimeout(() => {
      this.setState({ successModal: false });
    }, 1500);
    window.scrollTo(0, 0);
  }
  clearState() {
    const personList = [];
    this.setState(() => ({ personList }));
    localStorage.clear();
  }
  downloadData() {
    const personList = this.state.personList;
    downloadXlsx(personList);
  }
  render() {
    return (
      <>
        <FormikForm
          initialValues={formInitialValues}
          validationSchema={signInSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            this.addSignIn(values);
            resetForm(formInitialValues);
            setSubmitting(false);
          }}
          successModal={this.state.successModal}
        />
        <BigSpace />
        <AdminButtons
          downloadData={this.downloadData}
          clearState={this.clearState}
        />
      </>
    );
  }
}

export default SignInForm;
