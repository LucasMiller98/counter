import styled from 'styled-components'

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  position: relative;
`

export const ContainerSwitch = styled.div `
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;
`

export const ButtonCounter = styled.button `
  cursor: pointer;
  padding: 1rem;
  outline: none;
  border: 1.5px solid #606060;
  border-radius: 20px;
  font-size: 1rem;
  transition: all ease .3s;
  background: linear-gradient(200.10deg, #0081AF 0%, #53D8FB 100%);
  color: #f1f1f1;

  &:hover {
    filter: brightness(.9);
  }

  &:disabled {
    cursor: not-allowed;
  }
`

export const Counter = styled.div `
  font-family: 'Nunito', 'Times New Roman',sans-serif;
`

export const SpanCounter = styled.span `
  font-size: 20rem;
`

export const ContainerButtons = styled.div `
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
