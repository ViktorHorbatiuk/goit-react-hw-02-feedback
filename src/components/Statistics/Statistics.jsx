import css from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2 className={css.title}>Statistics</h2>
      <ul className={css.statistics}>
        <li className={css.statistic}>
          Good: <span>{good}</span>
        </li>
        <li className={css.statistic}>
          Neutral: <span>{neutral}</span>
        </li>
        <li className={css.statistic}>
          Bad: <span>{bad}</span>
        </li>
        <li className={css.total}>
          Total: <span>{total}</span>
        </li>
        <li className={css.total}>
          Positive feedback:{' '}
          <span>{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
