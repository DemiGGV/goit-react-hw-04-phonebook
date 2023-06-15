import { FormInputCSS } from 'components/MainContainerCSS';
import PropTypes from 'prop-types';

export const Filter = ({ text, onChange, isDisabled }) => {
  return (
    <label>
      Filter by Name:
      <FormInputCSS
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        disabled={isDisabled}
        value={text}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
