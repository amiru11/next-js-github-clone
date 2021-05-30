import { useRouter } from 'next/router';
import cx from 'classnames';

import styles from './Repository.styled';

export default function RepositoryComponent() {
  const router = useRouter();

  return (
    <ul className={cx('repository-container')}>
      <style jsx>{styles}</style>
    </ul>
  );
}
