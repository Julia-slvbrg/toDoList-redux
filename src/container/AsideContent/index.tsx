import { useDispatch, useSelector } from "react-redux"
import CardFilter from "../../components/CardFilter"
import * as S from './styles'
import { RootReducer } from "../../store"
import { changeSearchTerm } from "../../store/reducers/filter"
import * as enums from '../../utils/enums/Task'

const AsideContent = () =>{
  const dispatch = useDispatch()
  const { searchTerm } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.Input
          type="text"
          placeholder="Buscar"
          value={searchTerm}
          onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
        />
        <S.Filters>
          <CardFilter
            value={enums.Status.PENDING}
            criteria="status"
            identifier="pendentes"
          />
          <CardFilter
            value={enums.Status.DONE}
            criteria="status"
            identifier="concluídas"
          />
          <CardFilter
            value={enums.Priority.URGENT}
            criteria="priority"
            identifier="urgentes"
          />
          <CardFilter
            value={enums.Priority.IMPORTANT}
            criteria="priority"
            identifier="importantes"
          />
          <CardFilter
            value={enums.Priority.NORMAL}
            criteria="priority"
            identifier="normal"
          />
          <CardFilter
            criteria="all"
            identifier="todas"
          />
        </S.Filters>
      </div>
    </S.Aside>
  )
}
export default AsideContent
