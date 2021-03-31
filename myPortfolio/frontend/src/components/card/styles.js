import styled, { createGlobalStyle } from 'styled-components'


const Global = createGlobalStyle`
html,
body,
#root {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  user-select: none;
  background: white;
  border: 25px;
  border-color: white;
}

#root > div {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.c {
  position: absolute;
  max-width: 500px;
  max-height: 500px;
  width: 50ch;
  height: 50ch;
  cursor: pointer;
  will-change: transform, opacity;
  
}

.front,
.back {
  background-size: cover;
}

.back {
  background-image: url(https://www.google.com/imgres?imgurl=https%3A%2F%2Fmma.prnewswire.com%2Fmedia%2F197838%2Fssc_logo.jpg&imgrefurl=https%3A%2F%2Finvestor.ssctech.com%2Finvestor-relations%2Fpress-releases%2Fpress-release-details%2F2018%2FSSC-to-Acquire-DST-Systems%2Fdefault.aspx&tbnid=3orIMXIUfscbaM&vet=12ahUKEwiPirGGq9jvAhUOyawKHS0lBLUQMygBegUIARDCAQ..i&docid=6njkjXYyLV1UmM&w=400&h=268&q=Ss%26C&ved=2ahUKEwiPirGGq9jvAhUOyawKHS0lBLUQMygBegUIARDCAQ);
}

.front {
  border: white
  background-image: url(https://www.google.com/imgres?imgurl=https%3A%2F%2Fmma.prnewswire.com%2Fmedia%2F197838%2Fssc_logo.jpg&imgrefurl=https%3A%2F%2Finvestor.ssctech.com%2Finvestor-relations%2Fpress-releases%2Fpress-release-details%2F2018%2FSSC-to-Acquire-DST-Systems%2Fdefault.aspx&tbnid=3orIMXIUfscbaM&vet=12ahUKEwiPirGGq9jvAhUOyawKHS0lBLUQMygBegUIARDCAQ..i&docid=6njkjXYyLV1UmM&w=400&h=268&q=Ss%26C&ved=2ahUKEwiPirGGq9jvAhUOyawKHS0lBLUQMygBegUIARDCAQ);
}

  
`
export { Global }