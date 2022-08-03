import ImgPageError from '../../Img/error_page.jpg';
import { ImgError } from './Error.styled';
import { BtnBack } from 'components/BtnBack/BtnBack';

export const Error = () => {
  return (
    <>
      <BtnBack title="Go Home" to="/" />
      <ImgError src={ImgPageError} alt="Error" />
    </>
  );
};
