import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'pages/Home/Home';
import { MoviDetails } from '../pages/MoviDetails/MoviDetails';
import { Container } from './App.styled';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Move } from 'pages/Move/Move';
import { Error } from 'pages/Error/Error';

export const App = () => {
  return (
    <Container>
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
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};
