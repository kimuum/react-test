import styled from "styled-components";

function App() {
  return (
    <Wrapper className="App">
      <header>
        <h1>[OJT 과제] : 마크업 산출물</h1>
      </header>
      <section className="toc">
        <h2>카테고리 바로가기</h2>
        <ul>
          <li>
            <a href="#tab01">레이아웃</a>
          </li>
          <li>
            <a href="#tab02">KPGA</a>
          </li>
        </ul>
      </section>
      <section className="section_info">
        <span className="label_date new"></span> NEW{" "}
        <span className="label_date update"></span> UPDATE
      </section>
      <section className="section_list">
        <h2 id="tab_doc" className="sec_h">
          Document
        </h2>
        <h2 id="tab01">레이아웃</h2>
        <ul>
          <li>
            <a href="views/01_01_step.html">
              STEP-01 / <span className="filename">01_01_step.html</span>
            </a>
            <span className="label_date new">24.12.18</span>
          </li>
          <li>
            <a href="views/01_02_step.html">
              STEP-02 / <span className="filename">01_02_step.html</span>
            </a>
            <span className="label_date new">24.12.18</span>
          </li>
          <li>
            <a href="views/01_03_step.html">
              STEP-03 / <span className="filename">01_03_step.html</span>
            </a>
            <span className="label_date new">24.12.18</span>
          </li>
          <li>
            <a href="views/01_04_01_step.html">
              STEP-04-01 / <span className="filename">01_04_01_step.html</span>
            </a>
            <span className="label_date new">24.12.18</span>
          </li>
          <li>
            <a href="views/01_04_02_step.html">
              STEP-04-02 / <span className="filename">01_04_02_step.html</span>
            </a>
            <span className="label_date new">24.12.18</span>
          </li>
          <li>
            <a href="views/01_05_step.html">
              STEP-05 / <span className="filename">01_05_step.html</span>
            </a>
            <span className="label_date new">24.12.18</span>
          </li>
          <li>
            <a href="views/01_06_01_step.html">
              STEP-06-01 / <span className="filename">01_06_01_step.html</span>
            </a>
            <span className="label_date new">24.12.18</span>
          </li>
          <li>
            <a href="views/01_06_02_step.html">
              STEP-06-02 / <span className="filename">01_06_02_step.html</span>
            </a>
            <span className="label_date new">24.12.18</span>
          </li>
          <li>
            <a href="views/01_06_03_step.html">
              STEP-06-03 / <span className="filename">01_06_03_step.html</span>
            </a>
            <span className="label_date new">24.12.18</span>
          </li>
          <li>
            <a href="views/01_07_step.html">
              STEP-07 / <span className="filename">01_07_step.html</span>
            </a>
            <span className="label_date new">24.12.18</span>
          </li>
          <li>
            <a href="views/01_08_02_step.html">
              STEP-08 / <span className="filename">01_08_02_step.html</span>
            </a>
            <span className="label_date new">24.12.18</span>
          </li>
          <li>
            <a href="views/01_08_step.html">
              STEP-08 / <span className="filename">01_08_step.html</span>
            </a>
            <span className="label_date new">24.12.18</span>
          </li>
          <li>
            <a href="views/01_09_step.html">
              STEP-09 / <span className="filename">01_09_step.html</span>
            </a>
            <span className="label_date new">24.12.18</span>
          </li>
        </ul>
        <h2 id="tab02">KPGA</h2>
        <ul>
          <li>
            <a href="views/02_01_kpga.html">
              KPGA / <span className="filename">02_01_kpga.html</span>
            </a>
            <span className="label_date new">24.12.24</span>
          </li>
        </ul>
      </section>
      <footer>
        <p>
          <strong>Hivelab</strong> / UIT / UI개발 2팀 김윤희 전임
        </p>
      </footer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,700);

  blockquote,
  body,
  dd,
  dl,
  dt,
  fieldset,
  figure,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  html,
  iframe,
  legend,
  li,
  ol,
  p,
  pre,
  textarea,
  ul {
    margin: 0;
    padding: 0;
    font-family: "Noto Sans KR", "맑은고딕", MalgunGothic, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: 400;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  :after,
  :before {
    box-sizing: inherit;
  }

  audio,
  embed,
  img,
  object,
  video {
    height: auto;
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
    text-align: left;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: #333;
    z-index: 2b;
  }

  .clearfix:after,
  .clearfix:before {
    content: "";
    display: block;
    clear: both;
  }

  h1 {
    float: left;
    margin: 20px;
    font-size: 25px;
    font-weight: 700;
    color: #eee;
  }

  h2 {
    padding: 7px;
    font-size: 18px;
    font-weight: 700;
    color: #333;
    border-bottom: 2px solid #333;
    scroll-margin-top: 100px;
  }

  .preview_btn {
    height: 36px;
    margin: 20px 0;
    border: none;
    border-radius: 6px;
    background: #777;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }

  .search {
    float: right;
    margin: 13px 25px;
    font-size: 12px;
    color: #fff;
  }

  .search div {
    float: left;
  }

  .search label {
    vertical-align: middle;
    margin-right: 10px;
    letter-spacing: 1.5px;
    font-weight: 300;
    color: #adff2f;
  }

  .search input,
  .search select {
    font-size: 12px;
    vertical-align: middle;
    padding: 3px 5px;
    color: #333;
  }

  .search .search_date {
    margin-left: 20px;
  }

  .search .search_keyword {
    float: none;
    margin-top: 30px;
    text-align: right;
  }

  .search .search_keyword input {
    width: 173px;
  }

  .toc {
    margin-top: 80px;
    padding: 20px;
    background: #f4f4f4;
  }

  .toc h2 {
    font-size: 14px;
  }

  .toc ul {
    margin-bottom: 0;
  }

  .toc li {
    padding: 3px 10px;
  }

  .section_list {
    padding: 15px 20px 0;
    margin: 0 0 38px;
  }

  ul {
    margin-bottom: 20px;
  }

  li {
    display: block;
    padding: 7px 10px;
    border-bottom: 1px solid #eee;
  }

  li span {
    margin-left: 10px;
  }

  a {
    font-size: 13px;
    color: #777;
    text-decoration: none;
    letter-spacing: 0.6px;
    padding: 1px 5px;
    border-radius: 3px;
  }

  a:hover {
    color: #333;
  }

  footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10px 20px;
    background: #333;
    text-align: center;
  }

  footer p {
    font-size: 12px;
    color: #fff;
    letter-spacing: 2px;
  }

  footer strong {
    text-transform: uppercase;
  }

  .new {
    display: inline-block;
    position: relative;
    top: -1px;
    height: 16px;
    padding: 0 5px 1px;
    border-radius: 3px;
    background: #fd3939;
    font-family: verdana;
    font-size: 11px;
    font-weight: 400;
    color: #fff;
    line-height: 16px;
    vertical-align: middle;
    margin-left: 0;
  }

  .update {
    display: inline-block;
    position: relative;
    top: -1px;
    height: 16px;
    background: #45a7fb;
    color: #fff;
    padding: 0 5px 1px;
    border-radius: 3px;
    font-family: verdana;
    font-size: 11px;
    font-weight: 400;
    line-height: 16px;
    vertical-align: middle;
    margin-left: 0;
  }

  .section_info {
    padding: 15px 20px 0;
    font-size: 12px;
    color: #666;
  }

  .section_info span {
    vertical-align: top;
    margin-top: 2px;
  }

  .section_info span + span {
    margin-left: 5px;
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 18px;
      margin: 15px 15px 0;
    }

    header {
      height: 120px;
    }

    .section_list {
      margin: 0 0 28px;
    }

    .search {
      float: none;
      margin: 0 15px;
    }

    .search label {
      margin-right: 5px;
    }

    .search div {
      margin-top: 5px;
    }

    .toc {
      margin-top: 120px;
    }

    .search select {
      width: 89px;
    }

    .search .search_date {
      margin-left: 10px;
    }

    .search .search_keyword {
      float: none !important;
      clear: both;
      margin-left: 0 !important;
      padding-top: 5px;
      text-align: left;
    }

    .search input {
      width: 129px;
    }

    footer {
      padding: 5px 20px;
    }
  }
  .filename {
    color: #333;
    background: #eee;
    padding: 1px 5px;
    margin: 0;
    border-radius: 4px;
    word-wrap: break-word;
  }
  .on a {
    background: #ffff93;
  }

  @media screen and (max-width: 360px) {
    .search select {
      width: 65px;
    }
    .search .search_keyword input {
      width: 124px;
    }
  }
`;
export default App;
