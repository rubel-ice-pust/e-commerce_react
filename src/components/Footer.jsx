import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
      display: flex;
`;
const Left = styled.div`
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 20px;
`;
const Logo = styled.h1``;

const Desc = styled.p`
      margin: 20px 0px;
      text-align: justify;

`;
const SocialContainer = styled.div`
      display: flex;
`;
const SocialIcon = styled.div`
      width: 40px;
      height: 40px;
      color: white;
      background-color: #${(props) =>props.color};
      display: flex;
      justify-content: center;
      border-radius: 50%;
      align-items: center;
      margin-right: 20px;

`;

const Center = styled.div`
      flex: 1;
      padding: 20px;
`;
const Title = styled.h3`
      margin-bottom: 30px;
`;
const List = styled.ul`
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
`;
const ListItem = styled.li`
      width: 50%;
      margin-bottom: 10px;
`;
const Right = styled.div`
      flex: 1;
      padding: 20px

`;
const ContactItem = styled.div`
      margin-bottom: 20px;
      display: flex;
      align-items: center;
`;
const Pay = styled.img`
      width: 50%;

`;

const Footer = () => {
  return (
    <Container>
      <Left>
       <Logo> RUBEL</Logo>
       <Desc>
       "Discover your style haven at Khan Fashion. Unleash trendsetting fashion with curated collections, perfect fits, and unparalleled comfort.Elevate your wardrobe today for a statement that speaks volumes.
        </Desc>
        <SocialContainer >
         <SocialIcon color='3B5999'> 
            <Facebook/>
         </SocialIcon>

        <SocialIcon color='E4405F'> 
           <Instagram/> 
           </SocialIcon>
        
        <SocialIcon color='55ACEE'> 
            <Twitter/>
            </SocialIcon>
        
        <SocialIcon color='E60023'> 
            <Pinterest />
        </SocialIcon>
        </SocialContainer>
       
        </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Man Fashion</ListItem>
        <ListItem>Woman Fashion</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
         <ContactItem>
            <Room style={{marginRight:"10px"}} /> BSMRH Hall,Pabna University of Science and Technology
         </ContactItem>
         <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +8801795662879 
         </ContactItem>
         <ContactItem>
            <MailOutline style={{marginRight:"10px"}}/> rubel.pust06@gmail.com 
         </ContactItem>
      </Right>
    </Container>
  )
}
export default Footer