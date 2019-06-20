import React, { Component } from 'react';
import { Button } from 'reactstrap';

import SeeNamesModal from './seeNamesModal/seeNamesModal';

class SeeDataButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seeDataModal: false
    };

    this.toggleSeeDataModal = this.toggleSeeDataModal.bind(this);
  }
  toggleSeeDataModal() {
    this.setState(prevState => ({
      seeDataModal: !prevState.seeDataModal
    }));
  }
  render() {
    return (
      <>
        <Button color="secondary" onClick={() => this.toggleSeeDataModal()}>
          See names
        </Button>
        <SeeNamesModal
          personList={this.props.personList}
          seeDataModal={this.state.seeDataModal}
          toggleSeeDataModal={this.toggleSeeDataModal}
        />
      </>
    );
  }
}

export default SeeDataButton;
