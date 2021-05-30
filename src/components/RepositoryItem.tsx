import cx from 'classnames';

import styles from './RepositoryItem.styled';

export default function RepositoryComponent() {
  return (
    <li className={cx('repository-item-container')}>
      <h3 className={cx('title')}></h3>
      <p className={cx('description')}></p>
      <ul className={cx('detail-list')}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <style jsx>{styles}</style>
    </li>
  );
}
