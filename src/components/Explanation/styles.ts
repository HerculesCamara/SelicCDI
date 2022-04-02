import styled from 'styled-components'

export const Container = styled.div.attrs({
  id: 'explain-content'
})`
  background: var(--white);
  width: 100%;
  height: 100%;
  padding: 4rem 4.37rem 4rem 4.37rem;

  @media screen and (max-width: 470px) {
    padding: 2rem;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;

  h2 {
    font-size: 2.5rem;

    color: var(--gray);

    :last-of-type {
      margin-top: 4rem;
    }
  }

  h3 {
    font-size: 1.5rem;

    color: var(--gray);

    margin-top: 4rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--gray);

    margin-top: 1.5rem;
  }

  ul {
    list-style-position: inside;

    padding-left: 1rem;
    li {
      margin-top: 0.5rem;

      &:before {
        margin-right: 5rem;
      }

      a {
        font-size: 1rem;
        color: var(--blue-light);
        text-decoration: none;
      }
    }
  }

  @media screen and (max-width: 470px) {
    h2 {
      font-size: 1.5rem;

      :last-of-type {
        margin-top: 1.5rem;
      }
    }

    h3 {
      font-size: 1rem;

      margin-top: 1.5rem;
    }

    p {
      font-size: 1rem;

      margin-top: 1rem;
    }
  }
`
