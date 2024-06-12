import CardFilter from "../../components/CardFilter"
import * as S from './styles'

const AsideContent = () => (
  <S.Aside>
    <div>
      <S.Input type="text" placeholder="Buscar" />
      <S.Filters>
        <CardFilter status="pendentes" counter={3} />
        <CardFilter status="concluídas" counter={1} />
        <CardFilter status="urgentes" counter={2} />
        <CardFilter status="importantes" counter={3} />
        <CardFilter status="normal" counter={5} />
        <CardFilter status="todas" counter={14} active/>
      </S.Filters>
    </div>
  </S.Aside>
)

export default AsideContent
