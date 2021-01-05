import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
/* This defines the actual bar going down the screen */
import { StyledSideNav, StyledAuthHeader, StyledAuthSpan, NavIcon, StyledNavItem, StyledButton} from "../styles/sidebar";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';

class NavItem extends React.Component {
  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  }
  render() {
    const { active } = this.props;
    return (
      <StyledNavItem active={active}>
        <Link to={this.props.path} className={this.props.text} onClick={this.handleClick}>
          <NavIcon>{this.props.text}</NavIcon>
        </Link>
      </StyledNavItem>
    );
  }
}

class SideNav extends Component {
  constructor(props) {
  super(props);
  this.state = {
    activePath: props.location.pathname,
    items: [
      {
        path: '/about-me', /* path is used as id to check which NavItem is active basically */
        name: 'About',
        text: 'About',
        key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
      },
      {
        path: '/skills-and-interests',
        name: 'Skills',
        text: 'Skills and Interests',
        key: 2
      },
      {
        path: '/experience',
        name: 'Experience',
        text: 'Experience',
        key: 3
      }
    ]
    }
  }
  onItemClick = (path) => {
  this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
  }
  render() {
    const { items, activePath } = this.state;
    return (
      <StyledSideNav>
        <StyledAuthHeader>Anna Wong</StyledAuthHeader>
        <StyledAuthSpan>Data Scientist</StyledAuthSpan>
        {
          /* items = just array AND map() loops thru that array AND item is param of that loop */
          items.map((item) => {
            /* Return however many NavItems in array to be rendered */
            return (
              <NavItem path={item.path}
              name={item.name}
              text={item.text}
              onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */
              active={item.path === activePath}
              key={item.key}/>
            )
          })
        }

        <StyledButton aria-label="linkedin.com" onClick={() => window.open('https://www.linkedin.com/in/anna-wong-20982b146/')}>
          <LinkedInIcon fontSize="medium" />
        </StyledButton>

        <StyledButton aria-label="github.com" onClick={() => window.open('https://github.com/wongannaw')}>
          <GitHubIcon fontSize="medium" />
        </StyledButton>

        <StyledButton aria-label="resume" onClick={() => window.open('')}>
          <DescriptionIcon fontSize="medium" />
        </StyledButton>

      </StyledSideNav>
    );
  }
}

const RouterSideNav = withRouter(SideNav);

export default class Sidebar extends Component {
  render() {
    return (
      <RouterSideNav></RouterSideNav>
    )
  }
}
