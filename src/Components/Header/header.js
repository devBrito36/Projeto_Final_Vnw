import styled from "styled-components";

const Container = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: black;
  ul {
    display: flex;
    border: solid 1px red;
    width: 10vw;
    height: 3vh;
    justify-content: space-between;
  }
  li {
    color: white;
    list-style: none;
  }
  img {
    width: 2vw;
    height: 2vh;
    border: solid 1px red;
  }
`;

export default function Header() {
  return (
    <Container>
      <img src="" alt="" />
      <nav>
        <ul>
          <li>Seies</li>
          <li>Filmes</li>
        </ul>
      </nav>
      <nav>
        <ul>
          <img src="" alt="" />
          <li>Filtro</li>
          <li>Login</li>
        </ul>
      </nav>
    </Container>
  );
}
