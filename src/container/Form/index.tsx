import { FormEvent, useState } from 'react'
import { Input, MainContainer, SaveBtn, Title } from '../../styles'
import { FormContainer, Options } from './styles'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/Task'
import Task from '../../models/Task'
import { add } from '../../store/reducers/tasks'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const addTask = (event: FormEvent) => {
    event.preventDefault()
    const newTask = new Task(
      title,
      priority,
      enums.Status.PENDING,
      description,
      9
    )
    const taskObj = {...newTask}

    dispatch(add(taskObj))
    navigate('/')
  }

  return(
    <MainContainer>
      <Title>Nova tarefa</Title>
      <FormContainer onSubmit={addTask}>
        <Input
          type="text"
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Input as="textarea"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priority, index) =>
            <div key={index}>
              <input
                value={priority}
                name="priority"
                type="radio"
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
                onChange={(e) => setPriority(e.target.value as enums.Priority)}
              />{' '}
              <label htmlFor={priority}>{priority}</label>
            </div>
          )}
        </Options>
        <SaveBtn type="submit">Cadastrar</SaveBtn>
      </FormContainer>
    </MainContainer>
  )
}

export default Form
