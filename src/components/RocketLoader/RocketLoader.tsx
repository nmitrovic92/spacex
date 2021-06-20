import React from 'react';
import { ReactComponent as RocketLoading } from '../../assets/images/launch.svg';
import styles from './RocketLoader.module.scss';

const RocketLoader = () => {
  return (
    <div className={`${styles.pulse} ${styles.rocketLoader}`}>
      <RocketLoading width="100" height="auto" />
    </div>
  );
};

export default RocketLoader;
