import React from 'react';
import styled from '@emotion/styled';

const ContenedorImagen = styled.div`
    max-height: 300px;
    margin: 1rem 3rem;
`;


const Imagen = ({frase}) => {
    return (
        <ContenedorImagen>
            {/* eslint-disable-next-line */}
           <img src={frase.image}></img>
        </ContenedorImagen>
    );
}
 
export default Imagen;