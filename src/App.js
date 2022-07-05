import React from 'react';
import './App.scss';
import Timer2 from './components/Timer2';
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
        <Container id='container' display='flex' justify='center' alignItems='center' css={{ height: '100vh' }}>
          <Container id='app'>
            <Timer2 />
          </Container>
        </Container>
      </NextUIProvider>
    );
  }
}
export default App;
