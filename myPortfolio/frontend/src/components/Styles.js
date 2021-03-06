import styled, { createGlobalStyle } from 'styled-components'
import { animated } from 'react-spring'

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: #191b21;
    overflow: hidden;
    
    font-family: 'Monospaced Number', 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 21px;
  }
  html,
  body,
  div,
  a,
  i,
  button,
  select,
  option,
  optgroup,
  hr,
  br {
    user-select: none;
    cursor: default;
  }
  #root {
    padding: 30px;
    display: flex;
  align-items: center;
  }
`

export default Global