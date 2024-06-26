import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { MainContainer, Title } from '../../styles/index'
import { RootReducer } from '../../store'

const ToDoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { searchTerm, criteria, value} = useSelector((state: RootReducer) => state.filter)

  const filterTasks = () => {
    let filteredTasks = itens

    if (searchTerm === undefined) return itens

    filteredTasks = filteredTasks.filter((item) => item.title.toLocaleLowerCase().search(searchTerm.toLocaleLowerCase()) >= 0)

    if (criteria === 'priority') {
      filteredTasks = filteredTasks.filter(
        (item) => item.priority === value
      )
    } else if (criteria === 'status') {
      filteredTasks = filteredTasks.filter(
        (item) => item.status === value
      )
    }

    return filteredTasks
  }

  const showFilterResult = (quantity: number) => {
    let message = ''

    const criteriaPt = criteria === 'all'? 'todas' :
      criteria === 'priority' ? 'prioridade' : 'status'

    const complementMsg = searchTerm !== undefined && searchTerm.length > 0? `e "${searchTerm}"` : ''

    if (criteria === 'all') {
      message = quantity == 1? `${quantity} tarefa encontrada como: todas ${complementMsg}` : `${quantity} tarefas encontradas como: todas ${complementMsg}`
    } else {
      message = quantity == 1? `${quantity} tarefa encontra como: "${`${criteriaPt}=${value}`}" ${complementMsg}` : `${quantity} tarefas encontras como: "${`${criteriaPt}=${value}`}" ${complementMsg}`

    }

    return message
  }

  const tasks = filterTasks()
  const message = showFilterResult(tasks.length)

  return (
    <MainContainer>
      <Title as="p">
        {message}
      </Title>
      <ul>
        {tasks.map((element, index) => (
          <li key={index}>
            <Task
              title={element.title}
              description={element.description}
              status={element.status}
              id={element.id}
              priority={element.priority}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ToDoList
