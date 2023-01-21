import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #115490;

  --blue: #0068c6;
  --blue-light: #1F7DD0;
  --white: #fff;
  --gray: #6B6B6B;
  --gray-light: #9c9c9c;
  --gray-dark: #434343;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;

  @media (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body {
  background: var(--white);
  -webkit-font-smoothing: antialiased;

  font-family: 'Montserrat', sans-serif;
}

input, button {
  font-family: 'Montserrat', sans-serif;
}

button {
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.react-modal-overlay {
  background-color: rgba(70, 70, 70, 0.7);

  padding: 1rem;

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content{
  width: 100%;
  max-width: 684px;

  padding: 6.25rem 2rem 4.75rem;

  background-color: var(--white);

  position: relative;
}

`
