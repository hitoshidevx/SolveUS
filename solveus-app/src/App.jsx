import React from 'react';
import Home from './components/Home';
import Menu from './components/Menu';
import Rodape from './components/Rodape';
import { DivApp } from './style/styled';

export default function App() {
  return(
    <DivApp>
        <Menu />
        <Home />
        <Rodape />
    </DivApp>
  )
}