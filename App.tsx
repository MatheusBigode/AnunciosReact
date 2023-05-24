//import { Login } from './src/screens/telaLogin/Login'; <Login/>
//import { Cadastro } from './src/screens/telaCadastro/Cadastro'; <Cadastro/>
import { Anuncios } from './src/screens/telaAnuncios/Anuncios'; 

import { StatusBar } from 'expo-status-bar';
import React from 'react';


export default function App() {
  return (
    <>
      <StatusBar 
        backgroundColor='transparent'
        translucent
      />
      <Anuncios/>
    </>
  );
}