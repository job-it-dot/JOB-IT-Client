import React, { Component } from 'react';
import Jobs from '../components/page-components/index/Jobs';
import axios from 'axios';

class JobMain extends Component {
  state = {
    loading: false,
    JobList: [],
  };

  loadItem = async () => {
    axios({
      method: 'get',
      url: 'http://api.jobit.co.kr:9595/guest/selectAll',
    })
      .then(({ data }) => {
        this.setState({
          loading: true,
          JobList: data.applys,
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
    this.loadItem();
  }

  render() {
    const { JobList } = this.state;
    console.log(JobList);
    return (
      <div>
        <Jobs JobList={JobList} />
      </div>
    );
  }
}

export default JobMain;
