import React, { Component } from 'react';
import UserMenu from './UserMenu';
import CompanyMenu from './CompanyMenu';

class Menu extends Component {
  state = {
    pageNumber: 0,
  };

  handleChange = () => {
    this.setState({ pageNumber: 1 });
    console.log('123');
  };

  handleClick = () => {
    this.setState({ pageNumber: 0 });
    console.log('123');
  };

  render() {
    const pageNumber = this.state.pageNumber;
    let page = null;
    if (pageNumber === 0) {
      page = <UserMenu handleChange={this.handleChange} />;
    } else if (pageNumber === 1) {
      page = <CompanyMenu handleClick={this.handleClick} />;
    }
    return <>{page}</>;
  }
}

export default Menu;
