import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './GlobalStyle';
import { Container } from './App.styled';

import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';

import { Toaster } from 'react-hot-toast';

const Home = lazy(() => import('../pages/Home/Home'));
const Move = lazy(() => import('../pages/Move/Move'));
const MoviDetails = lazy(() => import('../pages/MoviDetails/MoviDetails'));
const Error = lazy(() => import('../pages/Error/Error'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Move />} />
            <Route path="movies/:id" element={<MoviDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};
