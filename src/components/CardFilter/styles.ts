import styled from 'styled-components'
import variables from '../../styles/variables'
//import { Props } from '.'

/* //PODE DEIXAR ASSIM, PORÉM SE FOR PARA OMITIR DIVERSAS PROPS, PODE ACABAR FICANDO MAIS FÁCIL TIPAR AS PROPS QUE VÃO SER USADAS
  type StyleProps = Omit<Props, 'counter' | 'identifier' | 'criteria'>
*/

type Props = {
  $active: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => props.$active? `${variables.blue}` : `${variables.grey1}`};
  border-radius: 8px;
  background-color: ${(props) => props.$active? `${variables.white1}` : `${variables.white3}`};
  color: ${(props) => props.$active? `${variables.blue}` : `${variables.grey2}`};
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
