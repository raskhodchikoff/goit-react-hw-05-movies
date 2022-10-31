import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useLocation, Outlet } from 'react-router-dom';

import Loader from 'components/Loader';
import SearchForm from 'components/SearchForm';

import { searchMovies } from 'services/api';

import { List, SearchLink } from './Movies.styled';
import { Box } from 'components/Box';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const movieName = searchParams.get('movieName') ?? '';

  useEffect(() => {
    if (movieName === '') {
      return;
    }

    searchMovies(movieName).then(data => setMovies(data.results));
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    setSearchParams({ movieName: searchForm.elements.movieName.value });
  };

  return (
    <Box as="main">
      <SearchForm handleSubmit={handleSubmit} value={movieName} />
      <List>
        {movies.length > 0 &&
          movies.map(movie => {
            return (
              <div key={movie.id}>
                <SearchLink
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                >
                  {movie.original_title || movie.name}
                </SearchLink>
              </div>
            );
          })}
      </List>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Movies;
