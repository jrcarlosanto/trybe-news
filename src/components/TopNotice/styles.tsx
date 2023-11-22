import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

`;

export const Img = styled.img`
  width: 654px;
  height: 385px;
  background: ${(props) => props.theme.colors.shadow};
  border: 1px solid ${(props) => props.theme.colors.shadow};
  box-shadow: 0px 4px 4px 0px ${(props) => props.theme.colors.shadow};
  
  @media (max-width: 468px) {
    width: 90%;
    height: 210px;
  }

  @media (max-width: 580px) and (min-width: 469px) {
    width: 90%;
    height: 250px;
  }

  @media (max-width: 680px) and (min-width: 581px) {
    width: 90%;
    height: 280px;
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
    color: ${(props) => props.theme.colors.primaryText};
    margin-bottom: 4px;

    @media (max-width: 390px) {
      font-size: 25px;
    }

    @media (min-width: 390px) and (max-width: 520) {
      font-size: 28px;
    }

    @media (max-width: 389) {
      font-size: 26px;
    }
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
  color: ${(props) => props.theme.colors.primaryText};
`;
