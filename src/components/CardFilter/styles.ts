import styled from "styled-components"
//import { Props } from "."

/* //PODE DEIXAR ASSIM, PORÉM SE FOR PARA OMITIR DIVERSAS PROPS, PODE ACABAR FICANDO MAIS FÁCIL TIPAR AS PROPS QUE VÃO SER USADAS
  type StyleProps = Omit<Props, 'counter' | 'identifier' | 'criteria'>
*/

type Props = {
  $active: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => props.$active? '#1E90FF' : '#A1A1A1'};
  border-radius: 8px;
  background-color: ${(props) => props.$active? '#FFFFFF' : '#FCFCFC'};
  color: ${(props) => props.$active? '#1E90FF' : '#5E5E5E'};
  cursor: pointer;
`
export const Counter = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`
export const Label = styled.span`
  font-size: 14px;
`
