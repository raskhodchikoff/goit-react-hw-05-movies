import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';

import { Header, Nav, Link } from './SharedLayout.styled';
import { Box } from 'components/Box';

const SharedLayout = () => {
  return (
    <Box as="div" mx="auto" px="20" minHeight="100vh">
      <Header>
        <Nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
export default SharedLayout;
