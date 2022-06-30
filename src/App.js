import React from 'react';
import './App.scss';
import Timer from './components/Timer';
import lightTheme from './themes/LightTheme';
import { NextUIProvider, Container, globalCss } from '@nextui-org/react';

const globalStyles = globalCss({
  body: { 
  }
})

class App extends React.Component {
  render() {
    globalStyles();
    return (
      <NextUIProvider theme={lightTheme}>
        <Container id='container' display='flex' justify='center' alignItems='center'>
          <Container id='app'>
            <Timer />
          </Container>
        </Container>
      </NextUIProvider>
    );
  }
}
export default App;
