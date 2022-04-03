import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 4rem;
    text-align: center;

    padding-bottom: 3rem;
  }

  p {
    font-size: 2rem;
    text-align: center;
    color: var(--gray-light);
  }
`
