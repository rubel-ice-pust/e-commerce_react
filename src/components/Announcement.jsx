import styled from 'styled-components';


const Container = styled.div`
       height: 30px;
       background-color: teal;
       color: white;
       display: flex;
       font-size: 14px;
       font-weight:500;
       align-items: center;
    justify-content: center;

`;
const Announcement = () => {
  return (
     <Container>Super Deal! Fre Shipping on Orders Over $50</Container>
    )
}

export default Announcement