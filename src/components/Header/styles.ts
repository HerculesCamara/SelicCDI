import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  padding: 2.93rem 4.37rem 1rem 4.37rem;

  background: var(--background);

  @media screen and (max-width: 470px) {
    padding: 2.75rem 2rem 1rem 2rem;
  }
`
export const Content = styled.div`
  max-width: 90rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;

  z-index: 1000;

  @media screen and (max-width: 470px) {
    img {
      width: 6.25rem;
    }
  }
`
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
