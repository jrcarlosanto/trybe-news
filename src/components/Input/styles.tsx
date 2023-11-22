import styled from 'styled-components';

export const InputStyle = styled.input`
  border-radius: 5px;
  width: 400px;
  margin-right: 5px;
  border:  1px  solid ${(props) => props.theme.colors.primaryText};
  padding-left: 5px;
  font-weight: 600;
  font-size: 16px;
  line-height: 29.4px;
  letter-spacing: 2%;
  background-color:${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primaryText};

  @media (max-width: 590px) and (min-width:392px) {
    width: 300px;
  }

  @media (max-width: 390px) {
    width: 220px;
  }

  @media (max-width: 460px) and (min-width: 391px) {
    width: 250px;
  }
`;
