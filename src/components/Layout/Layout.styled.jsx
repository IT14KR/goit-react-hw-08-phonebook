import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
  &.active {
    display: flex;
    background-color: #326fa8;
    width: 80px;
    height: 20px;
    padding: 8px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  }
`;
