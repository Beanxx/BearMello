import styled from "styled-components";

export const AsideContainer = styled.aside`
  width: 300px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  > textarea {
    width: 100%;
    height: 100px;
    border: 1px solid #e5e5e5;
  }

  @media (max-width: 820px) {
    display: none;
  }
`;
