import styled from 'styled-components';

export const ButtonStyled = styled.button`
   font-weight: 700;
   font-size: 14px;
   line-height: 23.1px;
   text-align: center;
   padding: 4px 8px;
   background-color:  ${(props) => props.theme.colors.green};
   box-shadow: rgba(0, 0, 0, 0.25);
   border: 0;
   border-radius: 5px;
   opacity: 0.9;
   color: ${(props) => props.theme.colors.primary};
   
   &:hover {
    opacity: 0.7;
   }
`;
