import { useRouter } from 'next/router';
import cx from 'classnames';
import { MdStarBorder, MdGroup, MdEmail, MdLink, MdDomain } from 'react-icons/md';

import styles from './Profile.styled';

export default function ProfileComponent() {
  const router = useRouter();

  return (
    <div className={cx('profile-container')}>
      <div className={cx('thumbnail-wrap')}>
        <img src="" alt="Avatar" />
      </div>
      <div className={cx('profile-info')}>
        <div className={cx('nickname-wrap')}>
          <h1>Nickname</h1>
          <p>Github ID</p>
        </div>
        {/* <button className={cx('follow-button')}>Follow</button> */}

        <div className={cx('bio-wrap')}></div>

        <ul className={cx('profile-detail')}>
          <li>
            <MdGroup /> <span>followers · </span>
          </li>
          <li>
            <MdGroup /> <span>followings · </span>
          </li>
          <li>
            <MdStarBorder /> <span>91</span>
          </li>
          <li>
            <MdDomain />
          </li>
          <li>
            <MdEmail />
          </li>
          <li>
            <MdLink />
          </li>
        </ul>
      </div>

      <style jsx>{styles}</style>
    </div>
  );
}
