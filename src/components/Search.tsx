import Link from 'next/link';
import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import { MdSearch } from 'react-icons/md';

import styles from './Search.styled';

export default function SearchComponent() {
  const router = useRouter();
  const [value, setValue] = useState<string>('');

  const onChangeValue = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    setValue(value);
  };

  const handleKeydown = (event: KeyboardEvent<HTMLInputElement>): void => {
    console.log('event.key', event.code);
    if (event.key === 'Enter') {
      router.push(`/users/${value}`);
    }
  }

  return (
    <div className={cx('search-container')}>
      <div className={cx('search-wrap')}>
        <input className={cx('search-input')} type="text" value={value} onChange={onChangeValue} onKeyDown={handleKeydown} />
        <Link href={`/users/${value}`}>
          <a className={cx('search-button')}>
            <MdSearch />
          </a>
        </Link>
      </div>

      <style jsx>{styles}</style>
    </div>
  );
}
