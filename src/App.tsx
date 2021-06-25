import { Buttons } from './components/Buttons'
import { useState } from 'react'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

function App() {

  const [counter, setCounter] = useState(0)
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  
  const handleUpNumbers = () => {
    if(counter >= 20) {
      alert('O número máximo de pessoas dentro do supermercado é de 20 pessoas.')
    }
    return setCounter(counter + 1)
  }

  const handleDownNumbers = () => {
    if(counter < 0) {
      alert('Supermercado vazio')
    }
    return setCounter(counter - 1)
  }
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Buttons 
          plus='+' 
          less='-' 
          handleOnClickUp={handleUpNumbers} 
          handleOnClickDown={handleDownNumbers} 
          counterState={counter} 
          toggleThemeProps={toggleTheme}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
