import Link from 'next/link';
import { GoMarkGithub } from 'react-icons/go';
import cx from 'classnames';

import Search from 'components/Search';

import styles from './Header.styled';

const WHITE_COLOR = '#ffffff';

export default function HeaderComponent() {
  return (
    <header className={cx('header-wrap')}>
      <div className={cx('container')}>
        <div className={cx('logo')}>
          <Link href="/">
            <a>
              <GoMarkGithub size="32" color={WHITE_COLOR} />
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{styles}</style>
    </header>
  );
}
