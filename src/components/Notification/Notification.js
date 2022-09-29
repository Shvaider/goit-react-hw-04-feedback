import React from 'react';
import PropTypes from 'prop-types';
import styles from './notification.module.css';

export default function Notification({ message }) {
  return (
    <>
      <p className={styles.notificationText}>{message}</p>
    </>
  );
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
