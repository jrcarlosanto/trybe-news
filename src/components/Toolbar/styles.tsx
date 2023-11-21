import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  padding: 10px 10px 10px 10px;
  align-items: center;
  margin: 40px 0 10px 0;
`;

export const NavFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  border: 0;
  background-color: transparent;
  margin-left: 10px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0em;
  color:${(props) => props.theme.colors.black};
  margin-right: 5px;
`;

export const ButtonOpenSearch = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background-color: transparent;
`;

export const Img = styled.img`
  height: 23px;
`;

export const SearcDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding: 10px 10px 10px 10px;
  margin-bottom: 10px;
`;

export const Search = styled.div`
  display: flex;
`;
