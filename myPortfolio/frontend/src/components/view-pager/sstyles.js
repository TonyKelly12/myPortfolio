import styled, { createGlobalStyle } from 'styled-components'


const Global = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  html,
  body {
    overscroll-behavior-y: contain;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    user-select: none;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
      segoe ui, arial, sans-serif;
    position: fixed;
    overflow: hidden;
  }
  
  #root {
    position: fixed;
    overflow: hidden;
    width: 100%;
    height: 100%;
    cursor: url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png') 39 39,
      auto;
  }
  
  #root > div {
    position: absolute;
    width: 100vw;
    height: 100vh;
    will-change: transform;
  }
  
  #root > div > div {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100%;
    will-change: transform;
    box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
  }
  
`
export { Global }