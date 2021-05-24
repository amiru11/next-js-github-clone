import Link from 'next/link';
import { useState, ChangeEvent } from 'react';
import cx from 'classnames';

import styles from './Search.styled';

export default function SearchComponent() {
  const [value, setValue] = useState<string>('');

  const onChangeValue = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setValue(value);
  };

  return (
    <div className={cx('search-container')}>
      <input type="text" value={value} onChange={onChangeValue} />
      <Link href={`/users/${value}`}>
        <a></a>
      </Link>
    </div>
  );
}
