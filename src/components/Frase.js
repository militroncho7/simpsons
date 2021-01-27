import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 3rem;
    background-color: #FFF;
    max-width: 800px;
    margin: 7rem 3rem;
    border: 2px solid black;
    border-radius: 10px;

    @media (min-width: 992px) {
        margin-top: 10rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        font-size: 1.4rem;

        &::before {
            content: open-quote;
            font-size: 7rem;
            color: #000;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;        
    }
`;

const Frase = ({frase}) => {
    return (
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>- {frase.character}</p>
        </ContenedorFrase>
    );
}
 
export default Frase;