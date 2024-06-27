import styled from 'styled-components';
import variables from '../../styles/variables';

export const FormContainer = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: ${variables.lightGrey};

  textarea {
    resize: none;
    margin: 16px 0;
    height: 183px;
  }
`
export const Options = styled.div`
  margin-bottom: 32px;

  p {
    margin-bottom: 6px;
  }

  div {
    display: inline-block;
    text-transform: capitalize;
  }

  label {
    margin-right: 6px;
  }

`
