import styled from "styled-components";
import Logo from "../IMG/Grupo 569.png";
import Lupa1 from "../IMG/Icon ionic-ios-search.png";

const Container = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: #00000030;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 13vw;
    height: 6vh;
    justify-content: space-between;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    list-style: none;
    width: 5vw;
    height: 5vh;
    translate: 0.5;
  }
  li:hover {
    background-color: #747474;
    border-radius: 15%;
    translate: 0.5;
  }
`;
const Logo_St = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 10vw;
  img {
    width: 6vw;
    height: 6vh;
  }
`;
const Nav1 = styled.nav`
  width: 12vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    width: 11vw;
    height: 3vh;
    justify-content: space-between;
  }
  li {
    color: #ffffff;
    list-style: none;
    opacity: 1;
  }
`;
const Nav2 = styled.nav`
  img {
    position: relative;
    top: 4px;
    translate: 10;
  }
`;
const Div = styled.div`
  .image-container {
    position: relative;
    display: inline-block;
  }

  #texto {
    position: absolute;
    top: 50%;
    left: -220%;
    transform: translate(-50%, -50%);
    display: none;
  }
  input {
    background-color: #747474;
    color: #ffffff;
    border: none;
    position: relative;
  }
`;

export default function Header() {
  const imagem = document.getElementById("imagem");
  const texto = document.getElementById("texto");

  imagem.addEventListener("click", function () {
    texto.style.display = "block";
    texto.focus();
  });

  texto.addEventListener("blur", function () {
    texto.style.display = "none";
  });

  return (
    <Container>
      <Logo_St>
        <img src={Logo} alt="" />
      </Logo_St>
      <Nav1>
        <ul>
          <li>Seies</li>
          <li>Filmes</li>
        </ul>
      </Nav1>
      <Nav2>
        <ul>
          <Div>
            <div class="image-container">
              <img src={Lupa1} alt="Imagem" id="imagem" />
              <input type="text" id="texto" />
            </div>
          </Div>
          <li>Filtro</li>
          <li>Login</li>
        </ul>
      </Nav2>
    </Container>
  );
}
