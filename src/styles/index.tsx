import styled, { createGlobalStyle } from "styled-components"
import { Btn } from "../components/Task/styles"
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
  background-color: #FFFFFF;
  border: 1px solid #666666;
  border-radius: 8px;
  width: 100%;
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
`
export const SaveBtn = styled(Btn)`
  background-color: ${variables.green};
`
export default GlobalStyle
