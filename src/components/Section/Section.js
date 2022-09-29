import React from 'react';
import PropTypes from 'prop-types';
import styles from './sections.module.css';

export default function Section({ title, children }) {
  return (
    <>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
