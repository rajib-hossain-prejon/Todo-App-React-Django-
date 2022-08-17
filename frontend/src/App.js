import React from 'react';
import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Container>
        <HomeScreen></HomeScreen>
      </Container>
    </Fragment>
  );
}

export default App;
