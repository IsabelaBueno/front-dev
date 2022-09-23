import styled from "styled-components";

export const AssociatesContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 1.25rem;
  box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
  border-radius: 0.25rem;
  height: 40rem;
  overflow-y: scroll;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 1.5rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--blue-900); /* color of the scroll thumb */
    border-radius: 1.25rem; /* roundness of the scroll thumb */
    border: 0.6rem solid var(--white); /* creates padding around scroll thumb */
  }

  .superior {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.6rem;
  }

  h1 {
    color: var(--gray-300);
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  span {
    color: var(--gray-100);
    margin-bottom: 2rem;
  }

  label {
    display: flex;
    width: 14.7rem;
    height: 1.8rem;
    top: 9rem;
    box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
    border-radius: 0.3rem;
    align-items: center;
    padding: 0.2rem;
    flex-direction: row;

    input {
      width: 100%;
      border: none;
      margin-top: 0.2rem;
      margin-left: 0.5;
    }
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 0.03rem;
    box-shadow: 0 0px 5px 1px rgba(0, 0, 0, 0.3);
    border-radius: 0.3rem;
  }

  td {
    border-top: 4px solid rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-collapse: collapse;
    color: var(--gray-300);
  }

  tr:nth-child(odd) {
    background-color: var(--blue-50);
    margin: 1rem;
  }

  th {
    background-color: var(--white);
    height: 2.7rem;
    text-align: left;
    padding-left: 1rem;
    color: var(--gray-300);
  }

  .title {
    width: 50%;
  }

  .active {
    background-color: var(--blue-150);
    height: 1.7rem;
    width: 4.1rem;
    left: 73.4rem;
    top: 22.8rem;
    border-radius: 0.3rem;
    color: var(--white);
    padding: 0.3rem;
  }
  .inactive {
    background-color: var(--red);
    height: 1.7rem;
    width: 5.3rem;
    left: 73.4rem;
    top: 22.8rem;
    border-radius: 0.3rem;
    color: var(--white);
    padding: 0.3rem;
  }
`;
