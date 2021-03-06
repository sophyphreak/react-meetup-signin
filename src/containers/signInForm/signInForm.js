import React, { Component } from 'react';

import FormikForm from '../../components/formikForm/formikForm';
import signInSchema from './signInSchema';
import downloadXlsx from './downloadXlsx';
import BigSpace from '../../components/bigSpace/bigSpace';
import AdminButtons from '../../components/adminButtons/adminButtons';
import formInitialValues from './formInitialValues';
import getLocalStorage from './getLocalStorage';
import preparePerson from './preparePerson';

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
    person = preparePerson(person);
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
          personList={this.state.personList}
          downloadData={this.downloadData}
          clearState={this.clearState}
        />
      </>
    );
  }
}

export default SignInForm;
