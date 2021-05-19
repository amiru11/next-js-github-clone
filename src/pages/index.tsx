import cx from 'classnames';
import styles from './Home.styled';

export default function Home() {
  return (
    <div className={cx('home-container')}>
      <h2>Home Page</h2>
      <style jsx>{styles}</style>
    </div>
  );
}
