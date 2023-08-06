import styled from "styled-components";
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";

const Wrapper = styled.div`
  
`

function Root() {
  return (
    <Wrapper>
      <Header />
      <Body />
      <Footer />
    </Wrapper>
  );
}

export default Root;
