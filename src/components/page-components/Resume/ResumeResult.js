import React, { Component } from 'react';
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class ResumeResult extends Component {
  render() {
    return (
      <div>
        <Result
          icon={<SmileOutlined />}
          title="이력서 등록이 완료되었습니다!"
          subTitle="이력서 3초 지원하고 일자리를 구해보세요!"
          extra={
            <Link to="/">
              <Button type="primary">지원하러가기</Button>
            </Link>
          }
          className="ResumeResult"
        />
      </div>
    );
  }
}

export default ResumeResult;
