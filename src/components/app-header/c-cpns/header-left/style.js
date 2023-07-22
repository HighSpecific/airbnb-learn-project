import { styled } from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  /* color: var(--primary-color); */
  color: ${(props) => (props.theme.isAlpha ? '#fff' : props.theme.textColor.primaryColor)};

  .logo {
    margin-left: 24px;
    cursor: pointer;
  }
`
