import styled from 'styled-components'
import { FormControl } from '../shared'

export const TextArea = styled(FormControl).attrs({ as: 'textarea' })`
  font: inherit;
  width: 100%;
  resize: vertical;
  overflow: hidden;
`
