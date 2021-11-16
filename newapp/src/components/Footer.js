import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: "column"})}

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none"})}

`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 100%;
`

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Ap.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi maxime
          eum laboriosam consectetur. Deserunt iure ratione vero dolorum
          repudiandae voluptates repellat tempore quos maiores quasi.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
                <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
                <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
                <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{marginRight: "10px"}} /> At.Post. Masur, Tal.Karad, Dist.Satara.
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{marginRight: "10px"}} /> 9511868630
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{marginRight: "10px"}} /> ap@g.com
        </ContactItem>
        <Payment src="" />
      </Right>
    </Container>
  );
}

export default Footer;
