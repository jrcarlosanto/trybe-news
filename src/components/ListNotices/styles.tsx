import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
`;

export const H2 = styled.h2`
  font-family: IBM Plex Serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.colors.primaryText};
  margin: 60px 0;
`;
