import styled from 'styled-components'
import variables from '../../styles/variables'
import * as enums from '../../utils/enums/Task'
import { Btn } from '../../styles'

type TagProps = {
  $priority?: enums.Priority
  $status?: enums.Status
  $params: 'status' | 'priority'
}

function tagBackgroundColor(props: TagProps): string {
  if (props.$params === 'status') {
    if (props.$status === enums.Status.PENDING) return variables.lightYellow
    if (props.$status === enums.Status.DONE) return variables.green
  } else {
    if (props.$priority === enums.Priority.URGENT) return variables.red
    if (props.$priority === enums.Priority.IMPORTANT) return variables.darkYellow
  }
  return variables.lightBlue
}

export const Card = styled.div`
  background-color: ${variables.white3};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`
export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: ${variables.white1};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => tagBackgroundColor(props)};
  border-radius: 8px;
  border: none;
  margin-right: 16px;
  display: inline-block;
`
export const Description = styled.textarea`
  color: ${variables.darkGrey};
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border: none;
  background-color: transparent;
`
export const ActionsField = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px 0;
`

export const RemoveCancelBtn = styled(Btn)`
  background-color: ${variables.red};
`
