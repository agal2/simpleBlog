import React, { useEffect, Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from './components/Template'
import Head from './components/Head'
import List from './components/List'
import Create from './components/Create'

import axios from 'axios';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9ecef;
  }
`

function App() {
  const sendRequest = async() => {
    const response = await axios.get('http://localhost:3002');
    console.log(response)
    console.log(response.data)
  }

  useEffect(() => {
    sendRequest();
  })
  

  return (
    <>
      <GlobalStyle />
      <Template>
        <Head/>
        <List/>
        <Create/>
      </Template>
    </>
  );
}

export default App;
