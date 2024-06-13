import Task from '../../components/Task'
import { Container } from './styles'
import * as enums from '../../utils/enums/Task'

const tasks = [
  {
    title: 'Estudar',
    description: 'Estudar Redux',
    priority: enums.Priority.IMPORTANT,
    status: enums.Status.PENDING
  },
  {
    title: 'Pagar boleto',
    description: 'Baixar boleto',
    priority: enums.Priority.URGENT,
    status: enums.Status.DONE
  },
  {
    title: 'Ir para academia',
    description: 'Treino em duplas',
    priority: enums.Priority.NORMAL,
    status: enums.Status.PENDING
  },
]

const ToDoList = () => (
  <Container>
    <p>2 tarefas marcadas com: "categoria" e "termo"1</p>
    <ul>
      {tasks.map((element, index) => (
        <li key={index}>
          <Task title={element.title} description={element.description} priority={element.priority} status={element.status} />
        </li>
      ))}
    </ul>
  </Container>
)

export default ToDoList
