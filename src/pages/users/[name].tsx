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
  const { data: user, error } = useSWR(
    `https://api.github.com/users/${router.query.name}`,
    fetcher,
  );
  console.log('router', router.query, user, error);

  const goToHome = () => {
    router.push('/');
  };
  return (
    <div className={cx('user-container')}>
      {!(user && error) && (
        <>
          <Profile />
          <Repository />
        </>
      )}
      {(!user || error) && (
        <div className={'not-found-wrap'}>
          <h2>I don't know 😳</h2>
          <button className={'home-button'} onClick={goToHome}>
            HOME
          </button>
        </div>
      )}

      <style jsx>{styles}</style>
    </div>
  );
}
