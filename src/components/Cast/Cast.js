import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import { getMovieCast } from 'services/api';

import { List } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <List>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg`
            }
            alt="title"
            width={140}
            height={200}
            loading="lazy"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </List>
  );
};

// Cast.propTypes = {
//   cast: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       profile_path: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       character: PropTypes.string.isRequired,
//     })
//   ),
// };

export default Cast;
