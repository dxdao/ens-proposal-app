import Link from 'next/link'
import styled from 'styled-components'

/**
 * Base Button frame
 */
export const StyledButtonStaticBase = styled.div`
  position: relative;
  overflow: hidden;

  background: #8086ff;

  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.white};

  user-select: none;
  appearance: none;
  cursor: pointer;
  outline: none;
  border: none;
`

/**
 * Button frame with hover, focus and disabled state
 */
export const StyledButtonBase = styled(StyledButtonStaticBase)`
  /** Animations */
  animation-timing-function: ease-out;
  animation-duration: 300ms;

  /** States */
  &:hover {
    background: #0030c9;
  }

  &:active,
  &:focus {
    background: #0030c9;
  }

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
    outline: none;
  }
`

export const StyledButtonBaseFrame = styled(StyledButtonBase)`
  border-radius: 4px;
`

export const StyledButtonFrame = styled(StyledButtonBaseFrame)`
  padding: 13px 24px;
`

export const StyledLink = styled(Link)`
  display: inline-block;
`

/**
 * Inner component for the button.
 */
export const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10px;
`

export const DottedButtonBase = styled.button`
  cursor: pointer;
  line-height: 24px;
  letter-spacing: 0.1em;
  border: 2px dotted rgba(67, 104, 234, 1);
`
