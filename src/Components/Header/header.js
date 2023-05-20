import styled from "styled-components"

const Container = styled.header`
    position:fixed;
    width:100%;
    height:10vh;
    background-color: #000000;
    backdrop-filter: ;
    ul{
        display:; 
    }
    li{
      color: white;
    }
   
`


export default function Header() {
  return (
    <Container>
      <img scr="" alt="" />
      <nav>
        <ul>
          <li>Seies</li>
          <li>Filmes</li>
        </ul>
      </nav>
      <nav>
        <img scr="" alt="" />
        <ul>
          <li>Filtro</li>
          <li>Login</li>
        </ul>
      </nav>
    </Container>
  );
}
