import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';

import { AiOutlineArrowLeft } from 'react-icons/ai';
// import PropTypes from 'prop-types';

import { getMovieDetails } from 'services/api';
import Loader from 'components/Loader';

import {
  Button,
  Back,
  MovieDetail,
  Genres,
  Wrapper,
  LinkAddInfo,
} from './MovieDetails.styled';
import { Box } from 'components/Box';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(data => setMovieDetail(data));
  }, [movieId]);

  const {
    original_title,
    release_date,
    overview,
    genres,
    poster_path,
    vote_average,
  } = movieDetail;

  return (
    <Box as="main" p={12}>
      <Button type="button">
        <Back to={location.state?.from ?? '/'}>
          <AiOutlineArrowLeft size={16} />
          Go back
        </Back>
      </Button>
      <Box
        as="div"
        display="flex"
        py={30}
        mr={20}
        borderTop="1px solid #82919f"
      >
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg`
          }
          alt="title"
          width={240}
          height={360}
          loading="lazy"
        />
        <MovieDetail>
          <h2>
            {original_title}&nbsp;({new Date(release_date).getFullYear()})
          </h2>
          <p>
            User Score: &nbsp;
            {Math.round(vote_average * 10)}%
          </p>
          <h4>Overview</h4>
          <p>{overview} </p>
          <h4>Genres</h4>
          <Genres>
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </Genres>
        </MovieDetail>
      </Box>
      <Wrapper>
        <h4>Additional information</h4>
        <LinkAddInfo to="cast" state={{ ...location.state }}>
          Cast
        </LinkAddInfo>
        <LinkAddInfo to="reviews" state={{ ...location.state }}>
          Reviews
        </LinkAddInfo>
      </Wrapper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

// MovieDetails.propTypes = {
//   movieDetail: PropTypes.arrayOf(
//     PropTypes.shape({
//       original_title: PropTypes.string.isRequired,
//       release_date: PropTypes.number.isRequired,
//       overview: PropTypes.string.isRequired,
//       genres: PropTypes.array.isRequired,
//       poster_path: PropTypes.string.isRequired,
//       vote_average: PropTypes.number.isRequired,
//     })
//   ),
// };

export default MovieDetails;
