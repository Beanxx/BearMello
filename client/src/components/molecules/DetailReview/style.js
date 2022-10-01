import styled from "styled-components";

export const ReviewContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-bottom: 1px solid var(--main-color-5);

  flex-grow: 1;

  > div:nth-child(2) {
    line-height: 1.2rem;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgBox = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 10px;

  > img {
    width: 70px;
    height: 70px;
    border-radius: 5px;
  }
`;
