import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map((option, index) => {
        const label = option.charAt(0).toUpperCase() + option.slice(1);
        return (
          <button
            className={styles.button}
            key={index}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {label}
          </button>
        );
      })}
    </>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
