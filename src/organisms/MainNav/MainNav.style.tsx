import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
  textDecoration: 'none',
  listStyle: 'none',
}));

export const StyledNavLink = styled(NavLink)(() => ({}));
