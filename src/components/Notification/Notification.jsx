import css from './notification.module.css';
import PropTypes from 'prop-types';

import React from 'react';

export default function Notification({message}) {
  return <div className={css.message}>{message}</div>;
}

Notification.propTypes = {
  message: PropTypes.string,
};
