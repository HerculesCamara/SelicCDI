import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;

  background: transparent;

  border: none;
`

export const InputSelectContainer = styled.div`
  display: flex;

  justify-content: space-between;
  gap: 2rem;

  margin-top: 2.8rem;
`

export const CalcButton = styled.button`
  padding: 0.5rem 6.25rem;
  background: var(--blue);

  font-size: 1rem;
  font-weight: 700;
  color: var(--white);

  border: none;
  border-radius: 0.25rem;

  transition: all 0.2s;

  margin-top: 2rem;

  &:hover {
    background: var(--blue-light);
  }
`

export const NextCalcOption = styled.span`
  margin-top: 1rem;

  font-size: 1rem;
  text-decoration: underline;
  color: var(--blue);

  :hover {
    cursor: pointer;
  }
`
