import React, { Component } from 'react';
import ApplyMain from '../components/page-components/apply/ApplyMain';
import axios from 'axios';

class Apply extends Component {
  state = {
    loading: false,
    recruit: '',
    users: '',
  };

  loadRecruit = async () => {
    axios({
      method: 'post',
      url: 'http://api.jobit.co.kr:9595/user/apply/company',
    })
      .then(({ data }) => {
        this.setState({
          loading: true,
          recruit: data.recruit,
          users: data.users,
        });
      })
      .catch((e) => {
        console.log(e);
        this.setState({
          loading: false,
        });
      });
  };

  componentDidMount() {
    this.loadRecruit();
  }

  render() {
    const { recruit } = this.state.recruit;
    const { users } = this.state.users;
    console.log(recruit);

    return (
      <div style={{ marginLeft: 200 }}>
        <ApplyMain recruit={recruit} users={users} />
      </div>
    );
  }
}

export default Apply;
