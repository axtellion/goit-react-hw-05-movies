import ImgPageError from '../../Img/error_page.jpg';
import { ImgError, NavItem } from './Error.styled';
import { GoArrowLeft } from 'react-icons/go';

export const Error = () => {
  return (
    <>
      <NavItem to={'/'}>
        <GoArrowLeft />
        <p>Go to Home</p>
      </NavItem>
      <ImgError src={ImgPageError} alt="Error" />
    </>
  );
};
