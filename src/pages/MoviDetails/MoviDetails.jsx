import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetailsMovies } from 'services/api';
import { Box } from 'components/Box';
import {
  PosterImg,
  TitleBox,
  Title,
  List,
  NavItem,
} from './MoviDetails.styled';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import defaultImg from 'Img/error_img.jpg';
import { GoArrowLeft } from 'react-icons/go';
import { useLocation } from 'react-router-dom';

const IMG_URL = 'https://image.tmdb.org/t/p/original';

export const MoviDetails = () => {
  const [movi, setMovi] = useState({});
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchDetailsMovies(id).then(setMovi);
  }, [id]);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movi;

  const imagePoster = poster_path ? `${IMG_URL}${poster_path}` : defaultImg;

  const backLink = location.state?.from ?? '/';

  return (
    <>
      <NavItem to={backLink}>
        <GoArrowLeft />
        <p>Go Back</p>
      </NavItem>
      <Box display="flex" mt={4} ml={2} pb={3}>
        <PosterImg src={imagePoster} alt="Poster Movie" />
        <TitleBox>
          <Box>
            <Title>{title}</Title>
            <span>{release_date}</span>
          </Box>
          <p>{`User Score: ${Math.ceil(vote_average * 10)}%`}</p>

          <h3>Overviev</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <List>
            {genres &&
              genres.map(({ id, name }) => {
                return <li key={id}>{name}</li>;
              })}
          </List>
        </TitleBox>
      </Box>
      <AdditionalInfo />
    </>
  );
};
