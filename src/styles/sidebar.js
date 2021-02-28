import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton';

export const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 20%;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  background-color: #8c363e;
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 2%;
  margin-left: 10%;
`;

export const StyledAuthHeader = styled.h4`
  margin: auto;
  margin-top: 80px
  color: #fff;
  width: 80%;
  text-align: center;
`;

export const StyledAuthSpan = styled.span`
  font-size: 13px;
  font-style: italic;
  color: #fff;
  display: block;
  text-align: center;
  margin-bottom: 40px
`;

export const NavIcon = styled.span`
  height: 70px;
  line-height: 70px;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  width: 80%
  margin-left: 10%
  color: #fff;
  border-top: 2px solid #fff;
  text-align: center;
  :hover {
    color: #8c363e;
    background: #fff;
  }
`;

export const StyledNavItem = styled.span`
`;

export const StyledButton = styled(IconButton)`
  && {
    width: 20%;
    height: 5%;
    display: inline-block;
    color: #8c363e;
    background-color: #fff;
    text-align: center;
    item-align: center;
    font-size: 1.5em;
    margin: 6%;
    padding: 2.5%;
    border: 2% #fff;
    border-radius: 3%;
    :hover {
      color: #fff;
      background: #8c363e;
    }
  }

`;
