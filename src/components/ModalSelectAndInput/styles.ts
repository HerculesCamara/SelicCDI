import styled from 'styled-components'

import arrowSvg from '../../assets/arrow_gray.svg'

export const Container = styled.div``

export const InputLabel = styled.div`
  display: flex;
  align-items: center;

  > label {
    font-size: 1rem;
    font-weight: 700;
    color: var(--gray-dark);
  }
`

export const InputsContent = styled.div`
  display: flex;

  margin-top: 0.25rem;

  input {
    width: 100%;
    max-width: 4.25rem;

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

  select {
    appearance: none;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */

    min-width: 4.5rem;

    padding: 0.625rem 2rem 0.625rem 0.5rem;

    margin-left: 0.625rem;

    border: 2px solid var(--gray-light);
    border-radius: 3px;

    font-size: 1rem;
    font-weight: 700;
    color: var(--gray-dark);

    background-image: url(${arrowSvg});
    background-repeat: no-repeat;
    background-position: right;

    option {
      padding: 0.625rem 0.5rem;

      font-size: 1rem;
      font-weight: 700;
      color: var(--gray-dark);
    }
  }
`

export const SelectContainer = styled.div`
  position: relative;

  img {
    position: absolute;
    right: 2px;
    top: 6px;
  }
`
