import { GoArrowLeft } from 'react-icons/go';
import { NavItem } from './BtnBack.styled';

export const BtnBack = ({ to, title }) => {
  return (
    <NavItem to={to}>
      <GoArrowLeft />
      <p>{title}</p>
    </NavItem>
  );
};
