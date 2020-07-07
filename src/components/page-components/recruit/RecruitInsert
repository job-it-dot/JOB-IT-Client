import React, { Component } from 'react';
import { Form, Input, InputNumber, Button, DatePicker, Cascader, Space, Modal } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import classes from './RecruitInsert.module.less';
//import axios from 'axios';
import DaumPostcodes from '../myPage/DaumPostcode';
/*
import ReactSummernote from 'summernote';
import 'summernote/dist/summernote.css';
import 'summernote/lang/summernote-ko-KR';

import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';
import { data } from 'jquery';
*/
const { RangePicker } = DatePicker;

const workoption = [
  {
    value: '정규직',
    label: '정규직',
  },
  {
    value: '계약직',
    label: '계약직',
  },
  {
    value: '인턴직',
    label: '인턴직',
  },
  {
    value: '파트타임',
    label: '파트타임',
  },
  {
    value: '아르바이트',
    label: '아르바이트',
  },
];

const timeoption = [
  {
    value: '추후협의',
    label: '추후협의',
  },
  {
    value: '주 1-2일',
    label: '주 1-2일',
  },
  {
    value: '주 3-4일',
    label: '주 3-4일',
  },
  {
    value: '주 5일',
    label: '주 5일',
  },
];

const supportoption = [
  {
    value: 'job-it양식',
    label: 'job-it양식',
  },
  {
    value: '자사양식',
    label: '자사양식',
  },
];

const careeroption = [
  {
    value: '경력무관',
    label: '경력무관',
  },
  {
    value: '신입',
    label: '신입',
  },
  {
    value: '경력',
    label: '경력',
    children: [
      {
        value: '1년이상',
        label: '1년이상',
      },
      {
        value: '3년이상',
        label: '3년이상',
      },
      {
        value: '5년이상',
        label: '5년이상',
      },
      {
        value: '10년이상',
        label: '10년이상',
      },
    ],
  },
];

const eduoption = [
  {
    value: '학력무관',
    label: '학력무관',
  },
  {
    value: '고졸이상',
    label: '고졸이상',
  },
  {
    value: '초대졸이상',
    label: '초대졸이상',
  },
  {
    value: '대졸이상',
    label: '대졸이상',
  },
  {
    value: '학사이상',
    label: '학사이상',
  },
];

const skilloptions = [
  {
    value: 'BackEnd',
    label: 'BackEnd',
    children: [
      {
        value: 'java',
        label: 'java',
      },
      {
        value: 'C언어',
        label: 'C언어',
      },
      {
        value: 'ruby',
        label: 'ruby',
      },
    ],
  },

  {
    value: 'FrontEnd',
    label: 'FrontEnd',
    children: [
      {
        value: 'jsp',
        label: 'jsp',
      },
      {
        value: 'react',
        label: 'react',
      },
      {
        value: 'vue',
        label: 'vue',
      },
    ],
  },

  {
    value: 'DataBase',
    label: 'DataBase',
    children: [
      {
        value: 'MySQL',
        label: 'MySQL',
      },
      {
        value: 'Oracle',
        label: 'Oracle',
      },
      {
        value: 'MariaDB',
        label: 'MatiaDB',
      },
    ],
  },
];

const layout = {
  style: { marginTop: 30 },
  labelCol: { span: 4 },
  wrapperCol: { span: 23 },
};

//const [form] = Form.useForm();

const onFinish = (values) => {
  console.log('formvalue', values);
};

/*const onImageUploadre = (images, insertImage) => {
  for (let i = 0; i < images.length; i++) {
    const reader = new FileReader();

    reader.onloadend = () => {
      insertImage(reader.result);
    };

    reader.readAsDataURL(images[i]);
  }
};

const uploadSummernoteImageFile = (file, editor) => {
  data = new FormData();
  data.append('file', file);
  axios({
    url: 'http://',
    method: 'post',
    data: JSON.stringify({
      abcd: '데이터값...',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => console.log('성공' + res), data(editor.ReactSummernote('insertImage', data)))
    .catch((res) => console.log('실패' + res));
};
*/
class RecruitInsert extends Component {
  state = {

    Zipcode: '',
    roadAddress: '',
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleAddress = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    let Zipcode = data.zonecode;
    let roadAddress = data.roadAddress + data.buildingName;

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    this.setState({ addr: fullAddress });
    this.setState({ Zipcode: Zipcode });
    this.setState({ roadAddress: roadAddress });
    console.log(this.state.Zipcode);
    console.log(this.state.roadAddress);
  };

  render() {
    return (
      <>
        <Form
          {...layout}
          //form={form}
          name="recruitinsert"
          size={'large'}
          onFinish={onFinish}
          layout={'vertical'}
          scrollToFirstError
        >
          <div className={classes.recruit_insert_top}>
            <div>
              <h1 style={{ fontSize: 27, textAlign: 'center', marginTop: 30 }}>공고 등록 페이지</h1>
            </div>
          </div>

          <div className={classes.recruit_insert_top} style={{ marginTop: 20 }}>
            <div>
              <h1 style={{ fontSize: 23, textAlign: 'left', marginTop: 20, marginBottom: 20 }}>기본정보</h1>
            </div>
            <Form.Item
              name="title"
              label="공고제목&nbsp;&nbsp;"
              rules={[{ required: true, message: '공고제목을 입력해주세요' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="term"
              label="공고기간&nbsp;&nbsp;"
              rules={[{ required: true, message: '공고기간을 입력해주세요' }]}
            >
              <RangePicker />
            </Form.Item>

            <div>
              <h4 style={{ marginBottom: 20, fontSize: 14, marginTop: 30, fontWeight: 'bold' }}>모집분야</h4>
              <Form.List name="skills">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map((field) => (
                        <Space key={field.key} style={{ display: 'flex', marginBottom: 2 }} align="start">
                          <Form.Item name={field.key} rules={[{ type: 'array' }]} style={{ width: 500 }}>
                            <Cascader options={skilloptions} placeholder="모집 분야를 선택해주세요" />
                          </Form.Item>
                          <MinusCircleOutlined
                            style={{ marginTop: 9, width: 15, fontSize: 22 }}
                            onClick={() => {
                              remove(field.name);
                            }}
                          />
                        </Space>
                      ))}
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => {
                            add();
                          }}
                          block
                        >
                          <PlusOutlined /> 추가
                        </Button>
                      </Form.Item>
                    </div>
                  );
                }}
              </Form.List>
            </div>

            <Form.Item
              name="support"
              label="지원양식&nbsp;&nbsp;"
              rules={[{ required: true, message: '지원양식을 입력해주세요' }]}
            >
              <Cascader options={supportoption} placeholder="지원양식을 선택해주세요" />
            </Form.Item>

            <Form.Item label="인원&nbsp;&nbsp;">
              <Form.Item name="personnel">
                <InputNumber />
              </Form.Item>
            </Form.Item>
          </div>

          <div className={classes.recruit_insert_top} style={{ marginTop: 20 }}>
            <div>
              <h1 style={{ fontSize: 23, textAlign: 'left', marginTop: 20, marginBottom: 20 }}>지원자격</h1>
            </div>

            <div>
              <h4 style={{ marginBottom: 20, fontSize: 14, marginTop: 30, fontWeight: 'bold' }}>경력사항</h4>
              <Form.List name="careers">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map((field) => (
                        <Space
                          key={field.key}
                          style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 2 }}
                          align="start"
                        >
                          <Form.Item
                            style={{ width: 500 }}
                            name={field.key}
                            rules={[
                              { type: 'array', required: false, message: 'Please select your habitual residence!' },
                            ]}
                          >
                            <Cascader options={careeroption} placeholder="경력을 선택해주세요" />
                          </Form.Item>
                          <MinusCircleOutlined
                            style={{ marginTop: 9, width: 15, fontSize: 22 }}
                            onClick={() => {
                              remove(field.name);
                            }}
                          />
                        </Space>
                      ))}
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => {
                            add();
                          }}
                          block
                        >
                          <PlusOutlined /> 추가
                        </Button>
                      </Form.Item>
                    </div>
                  );
                }}
              </Form.List>
            </div>

            <Form.Item
              name="edu"
              label="학력제한&nbsp;&nbsp;"
              rules={[{ required: false, message: '학력제한을 입력해주세요' }]}
            >
              <Cascader options={eduoption} placeholder="학력을 선택해주세요" />
            </Form.Item>
            <Form.Item name="preferential" label="우대사항&nbsp;&nbsp;">
              <Input />
            </Form.Item>
          </div>

          <div className={classes.recruit_insert_top} style={{ marginTop: 20 }}>
            <div>
              <h1 style={{ fontSize: 23, textAlign: 'left', marginTop: 20, marginBottom: 20 }}>근무조건</h1>
            </div>
            <Form.Item
              name="recruit"
              label="고용형태&nbsp;&nbsp;"
              rules={[{ required: true, message: '고용형태를 입력해주세요' }]}
            >
              <Cascader options={workoption} placeholder="고용형태를 선택해주세요" />
            </Form.Item>
            <Form.Item label="급여&nbsp;&nbsp;">
              <Form.Item name="salary">
                <InputNumber />
              </Form.Item>
              <h5>만원단위로 입력해주세요</h5>
            </Form.Item>
            <Form.Item name="time" label="시간&nbsp;&nbsp;" rules={[{ required: false }]}>
              <Cascader options={timeoption} placeholder="시간을 선택해주세요" />
            </Form.Item>

            <Form.Item label="우편번호/도로명주소" span={4}>
              <Input placeholder="ex)16582" value={this.state.Zipcode} onClick={this.showModal} />

              <Input
                placeholder="ex)경기 수원시 권선구 권광로 55권선자이 이편한세상"
                value={this.state.roadAddress}
                onClick={this.showModal}
                style={{ top: 5 }}
              />

              <Modal title="주소 검색" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                <DaumPostcodes onComplete={this.handleAddress} />
              </Modal>
            </Form.Item>

            <Form.Item label="상세주소" span={10}>
              <Form.Item name={['user', 'addr']}>
                <Input placeholder="ex)519동 207호" />
              </Form.Item>
            </Form.Item>
          </div>

          <div className={classes.recruit_insert_top} style={{ marginTop: 20 }}>
            <div>
              <h1 style={{ fontSize: 23, textAlign: 'left', marginTop: 20, marginBottom: 20 }}>공고상세내용</h1>
            </div>

            <Form.Item name="introduction">
              <Input.TextArea />
            </Form.Item>
          </div>

          <div style={{ marginTop: 20 }}>
            <Form.Item style={{ textAlign: 'center' }}>
              <Button
                style={{
                  fontSize: 25,
                  borderRadius: 6,
                  width: 930,
                  height: 90,
                  backgroundColor: '#4554F1',
                }}
                type="primary"
                htmlType="submit"
              >
                공고등록
              </Button>
            </Form.Item>
          </div>
        </Form>
      </>
    );
  }
}
//};

export default RecruitInsert;

/* summernote 입력 에디터 창
    $(document).ready(function() {      
      $('#summernote').summernote({
			height: 300,                 // 에디터 높이
			minHeight: null,             // 최소 높이
			maxHeight: null,             // 최대 높이
			focus: true,                  // 에디터 로딩후 포커스를 맞출지 여부
			lang: "ko-KR",					// 한글 설정
			placeholder: '최대 2048자까지 쓸 수 있습니다',	//placeholder 설정
			callbacks: {	//여기 부분이 이미지를 첨부하는 부분
				onImageUpload : function(files) {
					uploadSummernoteImageFile(files[0], this);
				}
			}
		});
		// summernote 이미지 파일 업로드
		function uploadSummernoteImageFile(file, editor) {
			data = new FormData();
			data.append("file", file);
			$.ajax({
				data : data,
				type : "POST",
				url : "/file",
				contentType : false,
				processData : false,
				success : function(data) {
		      	//항상 업로드된 파일의 url이 있어야 한다.
		      		console.log(data);
					$(editor).summernote('insertImage', data);
				}
			});
		}
});
  
    /* summernote 컨트롤러 소스
    @PostMapping(value="/uploadSummernoteImageFile", produces = "application/json")
    @ResponseBody
    public JsonObject uploadSummernoteImageFile(@RequestParam("file") MultipartFile multipartFile) {
      
      JsonObject jsonObject = new JsonObject();
      
      String fileRoot = "C:\\summernote_image\\";	//저장될 외부 파일 경로
      String originalFileName = multipartFile.getOriginalFilename();	//오리지날 파일명
      String extension = originalFileName.substring(originalFileName.lastIndexOf("."));	//파일 확장자
          
      String savedFileName = UUID.randomUUID() + extension;	//저장될 파일 명
      
      File targetFile = new File(fileRoot + savedFileName);	
      
      try {
        InputStream fileStream = multipartFile.getInputStream();
        FileUtils.copyInputStreamToFile(fileStream, targetFile);	//파일 저장
        jsonObject.addProperty("url", "/summernoteImage/"+savedFileName);
        jsonObject.addProperty("responseCode", "success");
          
      } catch (IOException e) {
        FileUtils.deleteQuietly(targetFile);	//저장된 파일 삭제
        jsonObject.addProperty("responseCode", "error");
        e.printStackTrace();
      }
      
      return jsonObject;
    }

*/
