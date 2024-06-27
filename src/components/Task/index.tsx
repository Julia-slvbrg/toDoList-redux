import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { changeStatus, edit, remove } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import { EditBtn, SaveBtn } from '../../styles'
import * as emuns from '../../utils/enums/Task'

type Props = TaskClass

const Task = ({
  title,
  priority,
  status,
  description: originalDescription,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription)
    }
  }, [originalDescription])

  function cancelEdit () {
    setIsEditing(false)
    setDescription(originalDescription)
  }

  function changeStatusTask (e: ChangeEvent<HTMLInputElement>) {
    dispatch(changeStatus({
      id,
      done: e.target.checked
    }))
  }

  return(
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={status === emuns.Status.DONE}
          onChange={changeStatusTask}
        />
        <S.Title>
          {isEditing && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>
      <S.Tag
        $params='priority'
        $priority={priority}
      >
        {priority}
      </S.Tag>
      <S.Tag
        $params='status'
        $status={status}
      >
        {status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <S.ActionsField>
        {isEditing? (
          <>
            <SaveBtn
              onClick={() => {
                dispatch(
                  edit({
                    title,
                    description,
                    priority,
                    status,
                    id
                  })
                )
                setIsEditing(false)
              }
              }
            >Salvar</SaveBtn>
            <S.RemoveCancelBtn onClick={() => cancelEdit()}>Cancelar</S.RemoveCancelBtn>
          </>
        ) : (
          <>
            <EditBtn onClick={() => setIsEditing(true)}>Editar</EditBtn>
            <S.RemoveCancelBtn onClick={() => dispatch(remove(id))}>Remover</S.RemoveCancelBtn>
          </>
        )}
      </S.ActionsField>
    </S.Card>
  )
}

export default Task
