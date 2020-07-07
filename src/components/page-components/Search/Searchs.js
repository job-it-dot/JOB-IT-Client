import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import css from './TestList.module.less';

const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = 'https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css';
document.head.appendChild(styleLink);

class JiyeoSearchs extends Component {
  //제일먼저 실행후 초기화를 담당

  constructor(props) {
    super(props);

    this.state = {
      gg: [],
    };
  }

  onChange = (value) => {
    console.log('onChange ', value);
    this.setState({ value });
  };

  render() {
    const panes = [
      {
        value: this.state.value,
        onChange: this.onChange,
        menuItem: '지역',

        render: () => (
          <Tab.Pane className={css.TT}>
            <details>
              <summary className={css.wow}>서울</summary>

              <button value="강남구" onClick={this.props.kkk} className={css.btu}>
                강남구
              </button>
              <button value="강동구" onClick={this.props.kkk} className={css.btu}>
                강동구
              </button>
              <button value="강북구" onClick={this.props.kkk} className={css.btu}>
                강북구
              </button>
              <button value="강서구" onClick={this.props.kkk} className={css.btu}>
                강서구
              </button>
              <button value="관악구" onClick={this.props.kkk} className={css.btu}>
                관악구
              </button>
              <button value="광진구" onClick={this.props.kkk} className={css.btu}>
                광진구
              </button>
              <button value="구로구" onClick={this.props.kkk} className={css.btu}>
                구로구
              </button>
              <button value="금천구" onClick={this.props.kkk} className={css.btu}>
                금천구
              </button>
              <button value="노원구" onClick={this.props.kkk} className={css.btu}>
                노원구
              </button>
              <button value="도봉구" onClick={this.props.kkk} className={css.btu}>
                도봉구
              </button>
              <button value="동대문구" onClick={this.props.kkk} className={css.btu}>
                동대문구
              </button>
              <button value="마포구" onClick={this.props.kkk} className={css.btu}>
                마포구
              </button>
              <button value="서대문구" onClick={this.props.kkk} className={css.btu}>
                서대문구
              </button>
              <button value="서초구" onClick={this.props.kkk} className={css.btu}>
                서초구
              </button>
              <button value="성동구" onClick={this.props.kkk} className={css.btu}>
                성동구
              </button>
              <button value="성북구" onClick={this.props.kkk} className={css.btu}>
                성북구
              </button>
              <button value="송파구" onClick={this.props.kkk} className={css.btu}>
                송파구
              </button>
              <button value="양천구" onClick={this.props.kkk} className={css.btu}>
                양천구
              </button>
              <button value="영등포구" onClick={this.props.kkk} className={css.btu}>
                영등포구
              </button>
              <button value="용산구" onClick={this.props.kkk} className={css.btu}>
                용산구
              </button>
              <button value="은평구" onClick={this.props.kkk} className={css.btu}>
                은평구
              </button>
              <button value="종로구" onClick={this.props.kkk} className={css.btu}>
                종로구
              </button>
              <button value="중구" onClick={this.props.kkk} className={css.btu}>
                중구
              </button>
              <button value="중랑구" onClick={this.props.kkk} className={css.btu}>
                중랑구
              </button>

              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>경기</summary>
              <button value="가평군" onClick={this.props.kkk} className={css.btu}>
                가평군
              </button>
              <button value="고양시 덕양구" onClick={this.props.kkk} className={css.btu}>
                고양시 덕양구
              </button>
              <button value="고양시 일산동구" onClick={this.props.kkk} className={css.btu}>
                고양시 일산동구
              </button>
              <button value="고양시 일산서구" onClick={this.props.kkk} className={css.btu}>
                고양시 일산서구
              </button>
              <button value="과천시" onClick={this.props.kkk} className={css.btu}>
                과천시
              </button>
              <button value="광명시" onClick={this.props.kkk} className={css.btu}>
                광명시
              </button>
              <button value="광주시" onClick={this.props.kkk} className={css.btu}>
                광주시
              </button>
              <button value="구리시" onClick={this.props.kkk} className={css.btu}>
                구리시
              </button>
              <button value="군포시" onClick={this.props.kkk} className={css.btu}>
                군포시
              </button>
              <button value="김포시" onClick={this.props.kkk} className={css.btu}>
                김포시
              </button>
              <button value="남양주시" onClick={this.props.kkk} className={css.btu}>
                남양주시
              </button>
              <button value="동두천시" onClick={this.props.kkk} className={css.btu}>
                동두천시
              </button>
              <button value="부천시" onClick={this.props.kkk} className={css.btu}>
                부천시
              </button>
              <button value="성남시 분당구" onClick={this.props.kkk} className={css.btu}>
                성남시 분당구
              </button>
              <button value="성남시 수정구" onClick={this.props.kkk} className={css.btu}>
                성남시 수정구
              </button>
              <button value="성남시 중원구" onClick={this.props.kkk} className={css.btu}>
                성남시 중원구
              </button>
              <button value="성남시 중원구" onClick={this.props.kkk} className={css.btu}>
                성남시 중원구
              </button>
              <button value="수원시 권선구" onClick={this.props.kkk} className={css.btu}>
                수원시 권선구
              </button>
              <button value="수원시 장안구" onClick={this.props.kkk} className={css.btu}>
                수원시 장안구
              </button>
              <button value="수원시 팔달구" onClick={this.props.kkk} className={css.btu}>
                수원시 팔달구
              </button>
              <button value="수원시 영통구" onClick={this.props.kkk} className={css.btu}>
                수원시 영통구
              </button>
              <button value="시흥시" onClick={this.props.kkk} className={css.btu}>
                시흥시
              </button>
              <button value="안산시 단원구" onClick={this.props.kkk} className={css.btu}>
                안산시 단원구
              </button>
              <button value="안산시 상록구" onClick={this.props.kkk} className={css.btu}>
                안산시 상록구
              </button>
              <button value="안성시" onClick={this.props.kkk} className={css.btu}>
                안성시
              </button>
              <button value="안양시 동안구" onClick={this.props.kkk} className={css.btu}>
                안양시 동안구
              </button>
              <button value="안양시 만안구" onClick={this.props.kkk} className={css.btu}>
                안양시 만안구
              </button>
              <button value="양주시" onClick={this.props.kkk} className={css.btu}>
                양주시
              </button>
              <button value="양평군" onClick={this.props.kkk} className={css.btu}>
                양평군
              </button>
              <button value="여주시" onClick={this.props.kkk} className={css.btu}>
                여주시
              </button>
              <button value="연천군" onClick={this.props.kkk} className={css.btu}>
                연천군
              </button>
              <button value="오산시" onClick={this.props.kkk} className={css.btu}>
                오산시
              </button>
              <button value="용인시 기흥구" onClick={this.props.kkk} className={css.btu}>
                용인시 기흥구
              </button>
              <button value="용인시 수지구" onClick={this.props.kkk} className={css.btu}>
                용인시 수지구
              </button>
              <button value="용인시 처인구" onClick={this.props.kkk} className={css.btu}>
                용인시 처인구
              </button>
              <button value="의왕시" onClick={this.props.kkk} className={css.btu}>
                의왕시
              </button>
              <button value="의정부시" onClick={this.props.kkk} className={css.btu}>
                의정부시
              </button>
              <button value="이천시" onClick={this.props.kkk} className={css.btu}>
                이천시
              </button>
              <button value="파주시" onClick={this.props.kkk} className={css.btu}>
                파주시
              </button>
              <button value="평택시" onClick={this.props.kkk} className={css.btu}>
                평택시
              </button>
              <button value="포천시" onClick={this.props.kkk} className={css.btu}>
                포천시
              </button>

              <button value="하남시" onClick={this.props.kkk} className={css.btu}>
                하남시
              </button>
              <button value="화성시" onClick={this.props.kkk} className={css.btu}>
                화성시
              </button>

              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>인천</summary>
              <button value="강화군" onClick={this.props.kkk} className={css.btu}>
                강화군
              </button>
              <button value="계양구" onClick={this.props.kkk} className={css.btu}>
                계양구
              </button>
              <button value="미추홀구" onClick={this.props.kkk} className={css.btu}>
                미추홀구
              </button>
              <button value="남동구" onClick={this.props.kkk} className={css.btu}>
                남동구
              </button>
              <button value="동구" onClick={this.props.kkk} className={css.btu}>
                동구
              </button>
              <button value="부평구" onClick={this.props.kkk} className={css.btu}>
                부평구
              </button>
              <button value="서구" onClick={this.props.kkk} className={css.btu}>
                서구
              </button>
              <button value="연수구" onClick={this.props.kkk} className={css.btu}>
                연수구
              </button>
              <button value="옹진군" onClick={this.props.kkk} className={css.btu}>
                옹진군
              </button>
              <button value="중구" onClick={this.props.kkk} className={css.btu}>
                중구
              </button>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>대전</summary>
              <button value="대덕구" onClick={this.props.kkk} className={css.btu}>
                대덕구
              </button>
              <button value="서구" onClick={this.props.kkk} className={css.btu}>
                서구
              </button>
              <button value="동구" onClick={this.props.kkk} className={css.btu}>
                동구
              </button>
              <button value="유성구" onClick={this.props.kkk} className={css.btu}>
                유성구
              </button>
              <button value="중구" onClick={this.props.kkk} className={css.btu}>
                중구
              </button>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>세종</summary>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>충남</summary>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>충북</summary>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>광주</summary>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>전남</summary>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>전북</summary>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>대구</summary>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>경북</summary>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>부산</summary>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>울산</summary>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>경남</summary>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>강원</summary>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>제주</summary>
              <button value="경기테스트1" onClick={this.props.kkk} className={css.btu}>
                경기테스트1
              </button>
              <button value="경기테스트2" onClick={this.props.kkk} className={css.btu}>
                경기테스트2
              </button>
              <button value="경기테스트3" onClick={this.handleInput} className={css.btu}>
                경기테스트3
              </button>
              <hr className={css.hr} />
            </details>
          </Tab.Pane>
        ),
      },

      {
        menuItem: '직군',
        render: () => (
          <Tab.Pane className={css.TT}>
            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>웹프로그래머</summary>
              <button value="Java" onClick={this.props.kkk} className={css.btu}>
                Java
              </button>
              <button value="jsp" onClick={this.props.kkk} className={css.btu}>
                jsp
              </button>
              <button value="php" onClick={this.props.kkk} className={css.btu}>
                php
              </button>
              <button value="MySQL" onClick={this.props.kkk} className={css.btu}>
                MySQL
              </button>
              <button value="SQL" onClick={this.props.kkk} className={css.btu}>
                SQL
              </button>
              <button value="AJAX" onClick={this.props.kkk} className={css.btu}>
                AJAX
              </button>
              <button value="asp" onClick={this.props.kkk} className={css.btu}>
                asp
              </button>
              <button value="Servlet" onClick={this.props.kkk} className={css.btu}>
                Servlet
              </button>
              <button value="xml" onClick={this.props.kkk} className={css.btu}>
                xml
              </button>
              <button value="NET" onClick={this.props.kkk} className={css.btu}>
                NET
              </button>
              <button value="HTML" onClick={this.props.kkk} className={css.btu}>
                HTML
              </button>
              <button value="Python" onClick={this.props.kkk} className={css.btu}>
                Python
              </button>
              <button value="wml" onClick={this.props.kkk} className={css.btu}>
                wml
              </button>
              <hr className={css.hr} />
            </details>
            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>응용프로그래머</summary>
              <button value="C++" onClick={this.props.kkk} className={css.btu}>
                C++
              </button>
              <button value="Windows" onClick={this.props.kkk} className={css.btu}>
                Windows
              </button>
              <button value="Linux" onClick={this.props.kkk} className={css.btu}>
                Linux
              </button>
              <button value="API" onClick={this.props.kkk} className={css.btu}>
                API
              </button>
              <button value="C#" onClick={this.props.kkk} className={css.btu}>
                C#
              </button>
              <button value="Unix" onClick={this.props.kkk} className={css.btu}>
                Unix
              </button>
              <button value="wml" onClick={this.props.kkk} className={css.btu}>
                wml
              </button>
              <button value="아이폰" onClick={this.props.kkk} className={css.btu}>
                아이폰
              </button>
              <button value="안드로이드" onClick={this.props.kkk} className={css.btu}>
                안드로이드
              </button>
              <button value="전산전공" onClick={this.props.kkk} className={css.btu}>
                전산전공
              </button>
              <hr className={css.hr} />
            </details>
            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>시스템프로그래머</summary>
              <button value="임베디드" onClick={this.props.kkk} className={css.btu}>
                임베디드
              </button>
              <button value="펌웨어" onClick={this.props.kkk} className={css.btu}>
                펌웨어
              </button>
              <button value="PLC" onClick={this.props.kkk} className={css.btu}>
                PLC
              </button>
              <button value="HMI" onClick={this.props.kkk} className={css.btu}>
                HMI
              </button>
              <button value="어셈블리" onClick={this.props.kkk} className={css.btu}>
                어셈블리
              </button>
              <button value="MMI" onClick={this.props.kkk} className={css.btu}>
                MMI
              </button>
              <hr className={css.hr} />
            </details>
            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>DBA·데이터베이스</summary>
              <button value="데이터베스" onClick={this.props.kkk} className={css.btu}>
                데이터베스
              </button>
              <button value="DBA" onClick={this.props.kkk} className={css.btu}>
                DBA
              </button>
              <button value="Oracle" onClick={this.props.kkk} className={css.btu}>
                Oracle
              </button>
              <button value="OCP" onClick={this.props.kkk} className={css.btu}>
                OCP
              </button>
              <button value="OLAP" onClick={this.props.kkk} className={css.btu}>
                OLAP
              </button>
              <button value="Sybase" onClick={this.props.kkk} className={css.btu}>
                Sybase
              </button>
              <button value="DB2" onClick={this.props.kkk} className={css.btu}>
                DB2
              </button>
              <button value="데이터마이닝" onClick={this.props.kkk} className={css.btu}>
                데이터마이닝
              </button>
              <button value="DW" onClick={this.props.kkk} className={css.btu}>
                DW
              </button>
              <hr className={css.hr} />
            </details>
          </Tab.Pane>
        ),
      },
      {
        menuItem: '학력/연봉/경력',
        render: () => (
          <Tab.Pane className={css.TT}>
            <datalist>
              <summary>테스트</summary>
            </datalist>
            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>학력</summary>
              <button value="대학교졸업(4년)" onClick={this.props.kkk} className={css.btu}>
                대학교졸업(4년)
              </button>
              <button value="대학교졸업(2,3년)" onClick={this.props.kkk} className={css.btu}>
                대학교졸업(2,3년)
              </button>
              <button value="대학원 석사졸업" onClick={this.props.kkk} className={css.btu}>
                대학원 석사졸업
              </button>
              <button value="대학원 박사졸업" onClick={this.props.kkk} className={css.btu}>
                대학원 박사졸업
              </button>
              <button value="고등학교졸업" onClick={this.props.kkk} className={css.btu}>
                고등학교졸업
              </button>
              <button value="학력무관" onClick={this.props.kkk} className={css.btu}>
                학력무관
              </button>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>연봉</summary>
              <button value="~2000만원" onClick={this.props.kkk} className={css.btu}>
                ~2000만원
              </button>
              <button value="2000~2500만원" onClick={this.props.kkk} className={css.btu}>
                2000~2500만원
              </button>
              <button value="2500~3000만원" onClick={this.props.kkk} className={css.btu}>
                2500~3000만원
              </button>
              <button value="3000~4000만원" onClick={this.props.kkk} className={css.btu}>
                3000~4000만원
              </button>
              <button value="4000~5000만원" onClick={this.props.kkk} className={css.btu}>
                4000~5000만원
              </button>
              <button value="5000만원~" onClick={this.props.kkk} className={css.btu}>
                4000~5000만원
              </button>

              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>경력</summary>
              <button value="신입" onClick={this.props.kkk} className={css.btu}>
                신입
              </button>
              <button value="1~3년" onClick={this.props.kkk} className={css.btu}>
                1~3년
              </button>
              <button value="4~6년" onClick={this.props.kkk} className={css.btu}>
                4~6년
              </button>
              <button value="7~9년" onClick={this.props.kkk} className={css.btu}>
                7~9년
              </button>
              <button value="10~15년" onClick={this.props.kkk} className={css.btu}>
                10~15년
              </button>
              <button value="16~20년" onClick={this.props.kkk} className={css.btu}>
                16~20년
              </button>
              <button value="21년이상" onClick={this.props.kkk} className={css.btu}>
                21년이상
              </button>
              <button value="경력무관" onClick={this.props.kkk} className={css.btu}>
                경력무관
              </button>
              <hr className={css.hr} />
            </details>
          </Tab.Pane>
        ),
      },

      {
        menuItem: '평점/기업형태',
        render: () => (
          <Tab.Pane className={css.TT}>
            <datalist>
              <summary>테스트</summary>
            </datalist>
            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>평점</summary>
              <button value="★☆☆☆☆" onClick={this.props.kkk} className={css.btu}>
                ★☆☆☆☆
              </button>
              <button value="★★☆☆☆" onClick={this.props.kkk} className={css.btu}>
                ★★☆☆☆
              </button>
              <button value="★★★☆☆" onClick={this.props.kkk} className={css.btu}>
                ★★★☆☆
              </button>
              <button value="★★★★☆" onClick={this.props.kkk} className={css.btu}>
                ★★★★☆
              </button>
              <button value="★★★★★" onClick={this.props.kkk} className={css.btu}>
                ★★★★★
              </button>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>기업형태</summary>
              <button value="대기업" onClick={this.props.kkk} className={css.btu}>
                대기업
              </button>
              <button value="30대그룹사" onClick={this.props.kkk} className={css.btu}>
                30대그룹사
              </button>
              <button value="매출1000대기업" onClick={this.props.kkk} className={css.btu}>
                매출1000대기업
              </button>
              <button value="중견기업" onClick={this.props.kkk} className={css.btu}>
                중견기업
              </button>
              <button value="강소기업" onClick={this.props.kkk} className={css.btu}>
                강소기업
              </button>
              <button value="외국계기업" onClick={this.props.kkk} className={css.btu}>
                외국계기업
              </button>
              <button value="벤처기업" onClick={this.props.kkk} className={css.btu}>
                벤처기업
              </button>
              <button value="공공기관·공기업" onClick={this.props.kkk} className={css.btu}>
                공공기관·공기업
              </button>
              <button value="비영리단체·협회재단" onClick={this.props.kkk} className={css.btu}>
                비영리단체·협회재단
              </button>
              <button value="외국기관·단체" onClick={this.props.kkk} className={css.btu}>
                외국기관·단체
              </button>
              <button value="주권상장" onClick={this.props.kkk} className={css.btu}>
                주권상장
              </button>
              <button value="코스닥상장" onClick={this.props.kkk} className={css.btu}>
                코스닥상장
              </button>
              <button value="코넥스상장" onClick={this.props.kkk} className={css.btu}>
                코넥스상장
              </button>
              <button value="해외상장" onClick={this.props.kkk} className={css.btu}>
                해외상장
              </button>

              <hr className={css.hr} />
            </details>
          </Tab.Pane>
        ),
      },
    ];
    return <Tab panes={panes} />;
  }
}

export default JiyeoSearchs;
