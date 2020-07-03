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

              <button value="서울" onClick={this.props.kkk} className={css.btu}>
                서울
              </button>
              <button value="테스트2" onClick={this.props.kkk} className={css.btu}>
                테스트2
              </button>
              <button value="테스트3" onClick={this.props.kkk} className={css.btu}>
                테스트3
              </button>
              <button value="테스트4" onClick={this.props.kkk} className={css.btu}>
                테스트4
              </button>
              <button value="테스트6" onClick={this.props.kkk} className={css.btu}>
                테스트6
              </button>
              <button value="테스트7" onClick={this.props.kkk} className={css.btu}>
                테스트7
              </button>
              <button value="테스트8" onClick={this.props.kkk} className={css.btu}>
                테스트8
              </button>
              <button value="테스트9" onClick={this.props.kkk} className={css.btu}>
                테스트9
              </button>
              <button value="테스트10" onClick={this.props.kkk} className={css.btu}>
                테스트10
              </button>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>경기</summary>
              <button value="수원" onClick={this.props.kkk} className={css.btu}>
                수원
              </button>
              <button value="경기테스트1" onClick={this.props.kkk} className={css.btu}>
                경기테스트1
              </button>
              <button value="경기테스트2" onClick={this.props.kkk} className={css.btu}>
                경기테스트2
              </button>
              <button value="경기테스트3" onClick={this.handleInput} className={css.btu}>
                경기테스트3
              </button>
              <button value="경기테스트4" onClick={this.handleInput} className={css.btu}>
                경기테스트4
              </button>
              <button value="경기테스트5" onClick={this.handleInput} className={css.btu}>
                경기테스트5
              </button>
              <button value="경기테스트6" onClick={this.handleInput} className={css.btu}>
                경기테스트6
              </button>
              <button value="경기테스트7" onClick={this.handleInput} className={css.btu}>
                경기테스트7
              </button>
              <button value="경기테스트8" onClick={this.handleInput} className={css.btu}>
                경기테스트8
              </button>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>인천</summary>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>대전</summary>
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
        menuItem: '기업형태',
        render: () => (
          <Tab.Pane className={css.TT}>
            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>대기업</summary>
              <button value="대기업이다" onClick={this.props.kkk} className={css.btu}>
                대기업이다
              </button>
              <button value="대기업테스트" onClick={this.props.kkk} className={css.btu}>
                대기업테스트
              </button>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>외국계기업</summary>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>중견기업</summary>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>우수기업</summary>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>벤쳐기업</summary>
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
              <button value="웹프로그래머" onClick={this.props.kkk} className={css.btu}>
                웹프로그래머
              </button>
              <button value="웹프로그래머테스트" onClick={this.handleInput} className={css.btu}>
                웹프로그래머테스트
              </button>
              <hr className={css.hr} />
            </details>
            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>응용프로그래머</summary>
              <hr className={css.hr} />
            </details>
            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>시스템프로그래머</summary>
              <hr className={css.hr} />
            </details>
            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>DBA·데이터베이스</summary>
              <hr className={css.hr} />
              <hr className={css.hr} />
            </details>
          </Tab.Pane>
        ),
      },
      {
        menuItem: '학력/연봉/경력/평점',
        render: () => (
          <Tab.Pane className={css.TT}>
            <datalist>
              <summary>테스트</summary>
            </datalist>
            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>학력</summary>
              <button value="고졸" onClick={this.handleInput} className={css.btu}>
                고졸
              </button>
              <button value="대졸" onClick={this.handleInput} className={css.btu}>
                대졸
              </button>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>연봉</summary>
              <button value="~2000" onClick={this.handleInput} className={css.btu}>
                ~2000
              </button>
              <button value="2500~3000" onClick={this.handleInput} className={css.btu}>
                2500~3000
              </button>
              <button value="3000~" onClick={this.handleInput} className={css.btu}>
                3000~
              </button>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>경력</summary>
              <button value="신입" onClick={this.handleInput} className={css.btu}>
                신입
              </button>
              <button value="1~3년" onClick={this.handleInput} className={css.btu}>
                1~3년
              </button>
              <button value="5년이상" onClick={this.handleInput} className={css.btu}>
                5년이상
              </button>
              <hr className={css.hr} />
            </details>

            <details style={{ marginTop: 5 }}>
              <summary className={css.wow}>평점</summary>

              <button value="★☆☆☆☆" onClick={this.handleInput} className={css.btu}>
                ★☆☆☆☆
              </button>

              <button value="★★☆☆☆" onClick={this.handleInput} className={css.btu}>
                ★★☆☆☆
              </button>

              <button value="★★★☆☆" onClick={this.handleInput} className={css.btu}>
                ★★★☆☆
              </button>

              <button value="★★★☆☆" onClick={this.handleInput} className={css.btu}>
                ★★★★☆
              </button>

              <button value="★★★☆☆" onClick={this.handleInput} className={css.btu}>
                ★★★★★
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
