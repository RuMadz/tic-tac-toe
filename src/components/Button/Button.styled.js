import styled from "styled-components";

export const ButtonWrapper = styled.button`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 20px 30px;
  border-radius: 25px;
  min-width: 250px;
  font-size: 1.5rem;
  margin: 20px;
  border: none;
  font-weight: 400

  &:hover {
    box-shadow: 0px 0px 10px ${(props) => props.theme.colors.purple};
    cursor: pointer;
  }
    ${(props) => props.theme.media.mobile} {
    min-width: 100px;
  }
`;
