import { Provider } from 'react-redux'
import AsideContent from './container/AsideContent'
import ToDoList from './container/ToDoList'
import GlobalStyle, { Container } from './styles'
import store from './store'

function App() {

  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Container>
        <AsideContent />
        <ToDoList />
      </Container>
    </Provider>
  )
}

export default App
