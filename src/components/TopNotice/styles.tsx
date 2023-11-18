import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 690px) {
     font-size: 60%;
  }
`;

export const Img = styled.img`
  width: 654px;
  height: 385px;
  background: ${(props) => props.theme.colors.shadow};
  border: 1px solid ${(props) => props.theme.colors.shadow};
  box-shadow: 0px 4px 4px 0px ${(props) => props.theme.colors.shadow};
  
  @media (max-width: 690px) {
    width: 90%;
    height: 350px;
  }
`;

export const NoticeCard = styled.div`
  width: 540px;
  padding:10px;

  & h2 {
    font-family: IBM Plex Serif;
    font-size: 32px;
    font-weight: 600;
    line-height: 42px;
    letter-spacing: 0em;
    text-align: left;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 4px;
  }

  & div {
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LastNoticeInfo = styled.p`
  color: ${(props) => props.theme.colors.red};
  font-weight: 600;
  font-size: 14px;
  line-height: 29.4px;
  letter-spacing: 2%;
  text-align: left;
`;

export const Intro = styled.p`
  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.colors.black};
`;
