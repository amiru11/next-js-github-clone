import cx from 'classnames';
import styles from './Home.styled';

import Search from 'components/Search';

export default function HomePage() {
  return (
    <div className={cx('home-container')}>
      <h2>Search Github User!</h2>

      <Search />

      <style jsx>{styles}</style>
    </div>
  );
}
