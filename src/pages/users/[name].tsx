import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import cx from 'classnames';

import Profile from 'components/Profile';
import Repository from 'components/Repository';
import styles from './User.styled';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function UserPage() {
  const router = useRouter();
  const { data: user, error } = useSWR(`https://api.github.com/users/${router.query.name}`, fetcher);
  console.log('router', router.query, user);
  return (
    <div className={cx('user-container')}>
      <Profile />
      <Repository />

      <style jsx>{styles}</style>
    </div >
  );
}
