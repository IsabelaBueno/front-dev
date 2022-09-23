import styled from "styled-components";

export const PageMainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  .loggedUser {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--blue-900);
    margin-bottom: 4rem;
  }

  .sections {
    display: flex;
    font-size: 1.112rem;
    font-weight: 400;
    max-width: 50rem;
    width: 100%;

    span {
      color: var(--gray - 300);
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  }
`;

const defaultButton = styled.button`
  margin-bottom: 0.45rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: var(--yellow);
  color: var(--white);
  border-radius: 999px;
  max-width: 6rem;
  width: 100%;
  height: 6rem;
  transition: all 0.2s ease -in -out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const AnalyzeBtn = styled(defaultButton)`
  background-color: var(--yellow);
`;

export const CalendarBtn = styled(defaultButton)`
  background-color: var(--red);
`;

export const CommunicationBtn = styled(defaultButton)`
  background-color: var(--yellow);
`;
