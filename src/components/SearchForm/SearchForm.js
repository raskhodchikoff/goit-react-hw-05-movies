import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

import { Form, Input, Button } from './SearchForm.styled.js';

const SearchForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="movieName"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Button type="submit">
        <FaSearch size={16} />
      </Button>
    </Form>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
