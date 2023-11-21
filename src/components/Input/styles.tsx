import styled from 'styled-components';

export const InputStyle = styled.input`
  border-radius: 5px;
  width: 300px;
  margin-right: 5px;
  border:  1px  solid ${(props) => props.theme.colors.black};
  padding-left: 5px;
  font-weight: 600;
  font-size: 14px;
  line-height: 29.4px;
  letter-spacing: 2%;
`;
