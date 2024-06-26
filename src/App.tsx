import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AsideContent from './container/AsideContent'
import ToDoList from './container/ToDoList'
import GlobalStyle, { Container } from './styles'
import store from './store'
import Home from './pages/Home'
import NewTask from './pages/NewTask'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <NewTask/>
  }
])

function App() {

  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}

export default App
