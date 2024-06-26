import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { edit, remove } from '../../store/reducers/tasks'
import TaskClass from '../../models/Task'
import { SaveBtn } from '../../styles'

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

  return(
    <S.Card>
      <S.Title>{title}</S.Title>
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
            <S.EditBtn onClick={() => setIsEditing(true)}>Editar</S.EditBtn>
            <S.RemoveCancelBtn onClick={() => dispatch(remove(id))}>Remover</S.RemoveCancelBtn>
          </>
        )}
      </S.ActionsField>
    </S.Card>
  )
}

export default Task
