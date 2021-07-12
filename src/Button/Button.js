import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ onClick }) {
  return (
    <button className={s.button} onClick={onClick} type="button">
      Load More
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
