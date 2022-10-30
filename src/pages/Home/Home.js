import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getTrendingMovies } from 'services/api';

import { Title, ListMovies, MovieLink } from './Home.styled';
import { Box } from 'components/Box';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(data => {
      setTrendMovies(data.results);
    });
  }, []);

  return (
    <Box as="main">
      <Title>Trending today</Title>
      <ListMovies>
        {trendMovies.map(movie => (
          <div key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.name}
            </MovieLink>
          </div>
        ))}
      </ListMovies>
    </Box>
  );
};

export default Home;
