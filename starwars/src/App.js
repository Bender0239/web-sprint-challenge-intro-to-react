import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import CharacterContainer from './components/CharacterContainer.js'


const StyledApp = styled.div`
font-family: 'Roboto', sans-serif;
color: #00FF7F;
h1{
    margin-top: 20px;      
    text-shadow: 2px 1px 2px #00FF7F;
    font-size: 4rem;
    
  }
  h3{
    text-shadow: .5px .5px 1px #00FF7F;
  }
`

const App = () => {

  const [ data, setData ] = useState([])
  
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12')
    .then(res => {
      setData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])
  
  return (
    <StyledApp className="App">
      <h1>Rick And Morty</h1>
      <h3>Intro to React API Sprint</h3>
      <CharacterContainer data={data}/>
    </StyledApp>
  );
}

export default App;
