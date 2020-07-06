import React, { Component } from 'react';
import { Table, Button } from 'antd';
import 'antd/dist/antd.css';
import css from './MyPage.module.less';

const columns = [
  {
    title: '기업',
    dataIndex: 'name',
  },
  {
    title: '요건',
    dataIndex: 'age',
  },
  {
    title: '공고',
    dataIndex: 'address',
  },
  {
    title: '지원',
    dataIndex: 'button',
  },
  {
    title: '마감일',
    dataIndex: 'date',
  },
];

const data = [];
data.push({
  name: `jobit㈜`,
  age: `신입경력, 학력무관, 서울,경기, 계약직`,
  address: `2020년 kosta web 과정 인재모집 중`,
  button: (
    <Button
      className={css.buttonstyle}
      style={{ marginBottom: 60, right: 20, paddingRight: 2, paddingLeft: 2, paddingTop: 0, paddingBottom: 0 }}
    >
      즉시지원
    </Button>
  ),
  date: `~07/20`,
});

data.push({
  name: `가피아 `,
  age: `학력무관, 경력(2년이상), 컴퓨터전공 우대`,
  address: `Java 개발자를 모집합니다.
    `,
  button: (
    <Button
      className={css.buttonstyle}
      style={{ marginBottom: 60, right: 20, paddingRight: 2, paddingLeft: 2, paddingTop: 0, paddingBottom: 0 }}
    >
      즉시지원
    </Button>
  ),
  date: `내일`,
});

data.push({
  name: `㈜경동나비엔`,
  age: `신입경력, 고졸이상, 서울,경기, 계약직`,
  address: `2020년 신입/경력사원 공개채용(관리직/기술직)`,
  button: (
    <Button
      className={css.buttonstyle}
      style={{ marginBottom: 60, right: 20, paddingRight: 2, paddingLeft: 2, paddingTop: 0, paddingBottom: 0 }}
    >
      즉시지원
    </Button>
  ),
  date: `~07/21`,
});

data.push({
  name: `㈜푸른하제`,
  age: `경력(3년이상), 학력무관, C#우대`,
  address: `C# 응용소프트웨어 개발자 채용`,
  button: (
    <Button
      className={css.buttonstyle}
      style={{ marginBottom: 60, right: 20, paddingRight: 2, paddingLeft: 2, paddingTop: 0, paddingBottom: 0 }}
    >
      즉시지원
    </Button>
  ),
  date: `~07/25`,
});

data.push({
  name: `㈜구구스`,
  age: `신입경력(1년이상), 학력무관, 관련 학과 우대`,
  address: `웹기획, 모바일 APP/ASP/PHP 개발자, 매장판매직 모집`,
  button: (
    <Button
      className={css.buttonstyle}
      style={{ marginBottom: 60, right: 20, paddingRight: 2, paddingLeft: 2, paddingTop: 0, paddingBottom: 0 }}
    >
      즉시지원
    </Button>
  ),
  date: `~07/18`,
});

data.push({
  name: `㈜다보링크`,
  age: `경력(2년이상), 학력무관, 컴퓨터공학 우대`,
  address: `소프트웨어 개발자 경력직 모집`,
  button: (
    <Button
      className={css.buttonstyle}
      style={{ marginBottom: 60, right: 20, paddingRight: 2, paddingLeft: 2, paddingTop: 0, paddingBottom: 0 }}
    >
      즉시지원
    </Button>
  ),
  date: `~07/23`,
});

data.push({
  name: `㈜다보링크`,
  age: `경력(2년이상), 학력무관, 컴퓨터공학 우대`,
  address: `소프트웨어 개발자 경력직 모집`,
  button: (
    <Button
      className={css.buttonstyle}
      style={{ marginBottom: 60, right: 20, paddingRight: 2, paddingLeft: 2, paddingTop: 0, paddingBottom: 0 }}
    >
      즉시지원
    </Button>
  ),
  date: `~07/23`,
});

class MyPageResumeList extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 50);
  };

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <>
        <div>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
            className={css.sbutton}
            style={{ marginTop: 0 }}
          >
            삭제
          </Button>
        </div>
        <Table
          className="tableChange"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
        />
      </>
    );
  }
}

export default MyPageResumeList;
