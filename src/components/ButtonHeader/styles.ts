import styled from 'styled-components'

export const Button = styled.button`
  width: 9.25rem;
  height: 3rem;
  background: var(--blue);

  border: none;
  border-radius: 3px;

  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: white;

  transition: all 0.2s;

  :hover {
    background: var(--blue-light);
  }

  @media screen and (max-width: 470px) {
    width: 7rem;
    height: 2.25rem;

    font-size: 1rem;
  }
`
