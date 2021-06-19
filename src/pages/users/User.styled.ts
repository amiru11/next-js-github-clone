import css from 'styled-jsx/css';

const styles = css.global`
  .user-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }

  .not-found-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      margin-bottom: 50px;
      font-size: 2rem;
    }
    .home-button {
      border: 1px solid #040d21;
      border-radius: 4px;
      outline: 0;
      background-color: #040d21;
      color: #ffffff;
      cursor: pointer;
      padding: 20px;
      width: 100%;
      transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);

      &:hover {
        background-color: #30363d;
        border-color: #8b94b2;
        transition-duration: 0.1s;
      }
    }
  }
`;

export default styles;
