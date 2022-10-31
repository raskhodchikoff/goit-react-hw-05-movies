import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/api';
// import PropTypes from 'prop-types';

import { List, Item } from './Reviews.styled';
import { Box } from 'components/Box';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(data => setReview(data.results));
  }, [movieId]);

  return (
    <List>
      {review.length > 0
        ? review.map(({ id, author, content }) => (
            <Item key={id}>
              <Box as="div" display="flex">
                <h4>Author:&nbsp;</h4>
                <p>"{author}"</p>
              </Box>
              <div>
                <h4>Review:</h4>
                <p>{content}</p>
              </div>
            </Item>
          ))
        : "We don't have any review for this movie "}
    </List>
  );
};

// Reviews.propTypes = {
//   review: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       author: PropTypes.string.isRequired,
//       content: PropTypes.string.isRequired,
//     })
//   ),
// };

export default Reviews;
