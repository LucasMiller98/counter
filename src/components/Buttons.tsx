import { 
  Container, 
  ButtonCounter, 
  Counter, 
  SpanCounter, 
  ContainerButtons,
  ContainerSwitch
} from '../styles/styles'
import { shade } from 'polished'
import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

type ButtonsProps = {
  plus: string
  less: string
  counterState: number
  handleOnClickUp: () => void
  handleOnClickDown: () => void
  toggleThemeProps: () => void
}

export function Buttons({ ...props }: ButtonsProps) {

  const { colors, title } = useContext(ThemeContext)

  // const isGreaterThanTwenty = counterState > 20
  // const isLessThanZero = counterState < 0
  
  return (
    <>
      <Container>
        
        <ContainerSwitch>
          <Switch 
            onChange={props.toggleThemeProps}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            offColor={colors.secundary}
            onColor={shade(0.45, colors.primary)}
            height={10}
            width={40}
            handleDiameter={20}
          />
        </ContainerSwitch>
        
        <Counter>
          <SpanCounter>{ props.counterState }</SpanCounter>
        </Counter>
        <ContainerButtons>
          <ButtonCounter onClick={props.handleOnClickUp}>{props.plus}</ButtonCounter>
          <ButtonCounter onClick={props.handleOnClickDown}>{props.less}</ButtonCounter>
        </ContainerButtons>
      </Container>
    </>
  )
}