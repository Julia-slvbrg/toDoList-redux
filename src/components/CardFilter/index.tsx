import * as S from './styles'

export type Props = {
  active?: boolean
  counter: number
  priority: string
}

const CardFilter = ({ active, counter, priority}: Props) => (
  <S.Card active={active}>
    <S.Counter>{counter}</S.Counter>
    <S.Label>{priority}</S.Label>
  </S.Card>
)

export default CardFilter
