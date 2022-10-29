import styled from 'styled-components'

export const FORM_CONTROL_BORDER_RADIUS = 4

export const FormControl = styled.input`
  border-color: hsl(0, 0%, 80%);
  background-color: #fff;
  border-color: hsl(0, 0%, 80%);
  border-radius: ${FORM_CONTROL_BORDER_RADIUS}px;
  border-style: solid;
  border-width: 1px;
  cursor: default;
  min-height: 38px;
  outline: 0 !important;
  position: relative;
  transition: all 100ms;
  box-sizing: border-box;

  padding: 10px;

  :hover {
    border-color: hsl(0, 0%, 70%);
  }

  :focus {
    border-color: #2684ff;
    box-shadow: 0 0 0 1px #2684ff;
  }
`
