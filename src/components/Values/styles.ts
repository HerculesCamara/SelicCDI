import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 98px);
  padding: 0 4.37rem;

  display: flex;
  flex-direction: column;

  background: var(--background);
  background-image: linear-gradient(
    to bottom,
    var(--background),
    rgba(0, 0, 0, 0.5) 90%
  );

  @media screen and (max-width: 790px) {
    position: relative;

    height: calc(73vh - 98px);
  }

  @media screen and (max-width: 470px) {
    padding: 0 2rem;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 90rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  margin: 0 auto;

  div {
    width: 100%;

    h1 {
      font-size: 2.5rem;
      font-weight: 400;
      color: var(--white);
    }

    h2 {
      font-size: 5.31rem;
      font-weight: 700;
      color: var(--white);

      margin-top: 2.75rem;
    }

    :nth-of-type(2) {
      display: flex;
      flex: 1;

      font-size: 2rem;
      font-weight: 500;
      color: var(--white);
      position: relative;

      transform: translateY(4rem);
    }

    :nth-of-type(3) {
      text-align: right;
    }
  }

  @media screen and (max-width: 790px) {
    div {
      h1 {
        font-size: 1.75rem;
      }

      h2 {
        margin-top: 0.75rem;

        font-size: 3rem;
      }

      :nth-of-type(2) {
        font-size: 1.5rem;
        transform: translateY(2rem);
      }

      :nth-of-type(3) {
      }
    }
  }

  @media screen and (max-width: 470px) {
    flex-direction: column;
    max-height: 40%;
    align-items: flex-start;
    position: relative;
    justify-content: center;

    margin: auto 0;

    div {
      h1 {
        font-size: 1.5rem;
      }

      h2 {
        margin-top: 0.75rem;

        font-size: 2.75rem;
      }

      transform: translateY(0);

      :nth-of-type(2) {
        margin-top: 2.375rem;

        opacity: 0.5;

        font-weight: 400;
        transform: translateY(0%);
      }

      :nth-of-type(3) {
        margin-top: 2.375rem;

        text-align: left;
      }
    }
  }
`

export const Understand = styled.button`
  width: 100%;

  font-size: 1.25rem;
  color: var(--white);

  bottom: 0;
  margin-bottom: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  left: 0;
  right: 0;

  background: transparent;
  border: none;

  img {
    width: 2rem;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 470px) {
    font-size: 0.75rem;

    margin-bottom: 1.5rem;
    img {
      width: 1.375rem;
      margin-top: 0.5rem;
    }
  }
`

/* export const Selic = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--white);
  }

  h2 {
    font-size: 5.31rem;
    font-weight: 700;
    color: var(--white);
  }
`
export const Cdi = styled.div`
  text-align: right;
  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--white);
  }
  h2 {
    font-size: 5.31rem;
    font-weight: 700;
    color: var(--white);
  }
` */
