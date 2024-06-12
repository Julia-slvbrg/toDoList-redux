import AsideContent from "./container/AsideContent";
import ToDoList from "./container/ToDoList";
import GlobalStyle, { Container } from "./styles";

function App() {

  return (
    <>
      <GlobalStyle/>
      <Container>
        <AsideContent />
        <ToDoList />
      </Container>
    </>
  );
}

export default App;
