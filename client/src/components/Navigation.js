import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";

const logOut = (event, props) => {
  event.preventDefault();
  localStorage.removeItem("token");
  props.history.push("/login");
};

const NavBar = styled.nav`
  background-color: #403a52;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 15px;
`;

const NavColumn = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
`;

const NavContainer = styled.ul`
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0 15px;
  display: inline-block;
`;

const NavElement = styled(NavLink)`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
`;

const Button = styled.button`
  background: #403a52;
  border: 2px solid #fff;
  color: #fff;
  padding: 12px 20px;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const Navigation = props => {
  return (
    <NavBar>
      <NavColumn>
        <NavContainer>
          <NavItem>
            <NavElement to="/">Home</NavElement>
          </NavItem>
          <NavItem>
            <NavElement to="/login">Login</NavElement>
          </NavItem>
          <NavItem>
            <NavElement to="/register">Register</NavElement>
          </NavItem>
        </NavContainer>
      </NavColumn>
      <Button onClick={event => logOut(event, props)}>Log Out</Button>
    </NavBar>
  );
};

export default withRouter(Navigation);
