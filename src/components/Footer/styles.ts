import styled from "styled-components";

export const Container = styled.footer`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(250, 250, 235, 0.3);
    box-shadow: 10px 5px 20px rgba(100, 100, 100, 0.2);
    backdrop-filter: blur(10px);

    padding: 0.5rem;
    
    /* &:before {
        width: 100%;
        height: 100%;
        background: red;

        position: absolute;
        content: '';
        filter: blur(5px);
        
    } */

    p {
        color: var(--gray);
        
        font-weight: 400;
        a {
            background-image: linear-gradient(90deg, rgb(55, 139, 164) 0%, rgb(129, 190, 206) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 600;
        }

    }
`