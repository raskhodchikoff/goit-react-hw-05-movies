import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

import { Form, Input, Button } from './SearchForm.styled.js';

const SearchForm = ({ handleSubmit, value }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="movieName"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        defaultValue={value}
      />
      <Button type="submit">
        <FaSearch size={16} />
      </Button>
    </Form>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default SearchForm;
