import React from "react";
import { styled } from "styled-components";
import Avatar from "../IMG/AVTR-217.png";
import Estrela from "../IMG/Icon awesome-star.png";

const Main_St = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image: url(${Avatar});
  background-position: center;
  background-size: cover;
  height: 100vh;
`;
const Corpo = styled.div`
  display: flex;
  width: 90%;
  height: 30vh;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  font-family: Arial, Helvetica, sans-serif;
  color: #f2f2f2;
  h2 {
    font-size: 2rem;
  }
  p {
    font-weight: 400;
    width: 50%;
    font-size: 1rem;
  }
  h4 {
    font-weight: 100;
    font-size: 1rem;
  }
  img {
    width: 1.5vw;
    height: 3vh;
  }
`;

const ButtonDiv = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-around;
`;

const ButtonAssistir = styled.button`
  width: 12vw;
  height: 5vh;
  margin: 1rem;
  color: #f2f2f2;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 15px;
  border: none;
  background-color: #d53a00;
`;
const ButtonTrailer = styled.button`
  width: 12vw;
  height: 5vh;
  margin: 1rem;
  color: #f2f2f2;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 20px;
  border-radius: 15px;
  border: none;
  background-color: #717171;
`;
const Estrela_St = styled.div`
  display: flex;
  justify-content: space-between;
  width: 7vw;
  button {
    background-color: #f3cd32;
    font-weight: bold;
    border: none;
    border-radius: 10%;
    width: 2.6vw;
  }
`;

export default function Main() {
  return (
    <Main_St>
      <Corpo>
        <h2>Avatar: o Caminho da Água</h2>
        <h4>3hr 23 min | Fantasia, Família | 2023</h4>
        <Estrela_St>
          <img src={Estrela} alt="estrela" />
          <h3>9,9</h3>
          <button>IMDb</button>
        </Estrela_St>
        <p>
          Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para
          ficarem juntos. No entanto, eles devem sair de casa e explorar as
          regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve
          travar uma guerra difícil contra os humanos.
        </p>
        <ButtonDiv>
          <ButtonAssistir> Assitir Agora </ButtonAssistir>
          <ButtonTrailer> Trailer </ButtonTrailer>
        </ButtonDiv>
      </Corpo>
    </Main_St>
  );
}
