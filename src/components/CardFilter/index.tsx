import * as S from './styles'

export type Props = {
  active?: boolean
  counter: number
  status: string
}

const CardFilter = ({ active, counter, status}: Props) => (
  <S.Card active={active}>
    <S.Counter>{counter}</S.Counter>
    <S.Label>{status}</S.Label>
  </S.Card>
)

export default CardFilter
