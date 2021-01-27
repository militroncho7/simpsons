import React, { Fragment, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Frase from './components/Frase';
import Imagen from './components/Imagen';
import Footer from './components/Footer';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #ee3133 0%, #ee3133 20%, #9c1414 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 3rem;
  margin-bottom: 2rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid white;
  border-radius: 30px;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 800px;
  }
`;

const ContenedorBoton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
`;

function App() {

  //state de frases
  const [ frase, guardarFrase ] = useState({});

  //cargar una frase
  useEffect( () => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';
    const api = await fetch(url);
    const frase = await api.json();
    guardarFrase(frase[0]);
  };

  return (
    <Fragment>
      <Header />

      <div className="contenedor-frase yellow darken-1">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
            <Contenedor>
              <Frase
                frase={frase}
              />
            </Contenedor>

            </div>
            <div className="col m6 s12">
              <Imagen
                frase={frase}
              />
            </div>
          </div>
        </div>

        <ContenedorBoton>
          <Boton
            onClick={consultarAPI}
          >¡Tu Frase!</Boton>
        </ContenedorBoton>
      </div>


      <Footer />
    </Fragment>
  );
}

export default App;
