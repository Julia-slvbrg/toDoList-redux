import styled, { createGlobalStyle } from "styled-components"
import variables from "./variables"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style-type: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Title = styled.h2`
  display: block;
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;
`
export const Input = styled.input`
  background-color: ${variables.white1};
  border: 1px solid ${variables.lightGrey};
  border-radius: 8px;
  width: 100%;
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
`
export const Btn = styled.button`
font-weight: bold;
  font-size: 12px;
  color: ${variables.white1};
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  margin-right: 8px;
  cursor: pointer;
`
export const SaveBtn = styled(Btn)`
  background-color: ${variables.green};
`
export const EditBtn = styled(Btn)`
  background-color: ${variables.grey};
`
export default GlobalStyle
