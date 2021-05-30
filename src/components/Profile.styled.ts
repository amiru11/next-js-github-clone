import css from 'styled-jsx/css';

const styles = css.global`
  .profile-container {
    width: 25%;
    padding: 24px 16px;
    height: 100%;
  }

  .thumbnail-wrap {
    width: 100%;

    img {
      border-radius: 50%;
      display: inline-block;
      overflow: hidden;
      vertical-align: middle;
      background-color: #ffffff;
      flex-shrink: 0;
      box-shadow: 0 0 0 1px transparent;
      width: 100%;
      height: auto;
    }
  }

  .nickname-wrap {
    padding: 16px 0;
    h1 {
      font-size: 32px;
      font-weight: 600;
      line-height: 1.4;
    }
    p {
      color: #222222;
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 24px;
    }
  }

  .bio-wrap {
    font-size: 14px;
  }

  .profile-detail {
    color: #595959;

    span {
      color: #222222;
      font-weight: 600;
      padding-left: 4px;
    }

    li {
      line-height: 22px;
      display: flex;
      align-items: center;
      padding: 6px 0;
    }
  }
`;

export default styles;
