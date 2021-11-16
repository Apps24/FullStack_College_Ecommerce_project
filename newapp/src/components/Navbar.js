import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import {mobile} from "../responsive"

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding : "10px 0"})}

`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})}

`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "15px"})}

`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px"})}

`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({ fontSize: "24px"})}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: "2", justifyContent: "center"})}

`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px"})}

`;

function Navbar() {
  const quantity = useSelector(state => state.cart.quantity)
  // console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{color: "gray", fontSize: 16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Ap.</Logo>
        </Center>
        <Right>
          <MenuItem> <Link to="/register">Register </Link> </MenuItem>
          <MenuItem> <Link to="/login"> Sign In </Link> </MenuItem>
          <Link to="/cart"> 
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
   
    </Container>
  );
}

export default Navbar;
