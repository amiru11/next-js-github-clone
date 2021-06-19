import css from 'styled-jsx/css';

const styles = css.global`
  .search-container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-wrap {
    border-bottom: 1px solid #333333;
    display: flex;
    align-items: center;
    justify-self: center;
  }

  .search-input {
    border: 0;
    color: #333333;
    font-size: 1.8rem;
    font-weight: 500;
    flex: 1 1 0;
    max-width: 700px;
    outline: 0;
    letter-spacing: -0.1px;
    text-align: left;
    padding: 0;
  }

  .search-button {
    background-color: transparent;
    border: 0;
    color: #333333;
    cursor: pointer;
    display: block;
    font-size: 2rem;
    outline: 0;
  }
`;

export default styles;
