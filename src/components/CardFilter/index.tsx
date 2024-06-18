import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { changeFilter } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'
import { RootReducer } from '../../store'

export type Props = {
  identifier: string
  criteria: "priority" | "status" | "all"
  value?: enums.Priority | enums.Status
}

const CardFilter = ({ identifier, criteria, value }: Props) => {
  const dispatch = useDispatch()
  const  filter  = useSelector((state: RootReducer) => state.filter)
  const  tasks  = useSelector((state: RootReducer) => state.tasks)

  const activeCheck = () => {
    const valueCheck = filter.value === value
    const criteriaCheck = filter.criteria === criteria

    return valueCheck && criteriaCheck
  }

  const countTask = () => {
    if (criteria === 'all') return tasks.itens.length

    if (criteria === 'priority') {
      return tasks.itens.filter((item) => item.priority === value).length
    }
    if (criteria === 'status') {
      return tasks.itens.filter((item) => item.status === value).length
    }
  }

  const filterTasks = () => {
    dispatch(changeFilter({
      criteria,
      value
    }))
  }

  const active = activeCheck()
  const taskNumber = countTask()

  return (
    <S.Card $active={active} onClick={filterTasks}>
      <S.Counter>{taskNumber}</S.Counter>
      <S.Label>{identifier}</S.Label>
    </S.Card>
  )
}

export default CardFilter
