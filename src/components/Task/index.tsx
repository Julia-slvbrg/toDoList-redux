import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'

type Props = {
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string
}

const Task = ({ title, priority, status, description }: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  return(
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag params='priority' priority={priority} >{priority}</S.Tag>
      <S.Tag params='status' status={status} >{status}</S.Tag>
      <S.Description value={description} />
      <S.ActionsField>
        {isEditing? (
          <>
            <S.SaveBtn >Salvar</S.SaveBtn>
            <S.RemoveCancelBtn onClick={() => setIsEditing(false)}>Cancelar</S.RemoveCancelBtn>
          </>
        ) : (
          <>
            <S.EditBtn onClick={() => setIsEditing(true)}>Editar</S.EditBtn>
            <S.RemoveCancelBtn>Remover</S.RemoveCancelBtn>
          </>
        )}
      </S.ActionsField>
    </S.Card>
  )
}

export default Task
