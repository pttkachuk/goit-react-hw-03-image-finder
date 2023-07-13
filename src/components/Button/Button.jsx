import PropTypes from 'prop-types';
import style from './Button.module.css'
export default function Button({ nextPage }) {
  return (
    <button type="button" className={style.Button} onClick={nextPage}>
      Load more
    </button>
  );
}
Button.propTypes = {
  nextPage: PropTypes.func.isRequired,
};