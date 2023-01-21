import styled from 'styled-components'

export const InputTextContainer = styled.div`
  width: 100%;
  max-width: 25.25rem;

  margin-top: 2.75rem;

  :first-of-type {
    margin-top: 0;
  }
`

export const InputLabel = styled.div`
  display: flex;
  align-items: center;

  > label {
    font-size: 1rem;
    font-weight: 700;
    color: var(--gray-dark);
  }
`

export const InputContent = styled.div`
  position: relative;

  span {
    position: absolute;
    left: 0;

    font-size: 1.25rem;
    font-weight: 700;
    color: var(--gray);
  }

  input {
    width: 100%;

    padding-bottom: 0.225rem;

    text-align: right;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--gray);

    border: none;
    border-bottom: 2px solid var(--gray-light);

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: var(--gray-light);
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: var(--gray-light);
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: var(--gray-light);
    }

    :focus {
      border-bottom-color: var(--blue);
      outline: none;
    }
  }
`