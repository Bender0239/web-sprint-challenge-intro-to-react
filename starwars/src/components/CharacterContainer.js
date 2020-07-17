import React from 'react'
import Character from './Character.js'
import styled from 'styled-components'

const StyledCon = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
`

const CharacterContainer = (props) => {
    const { data } = props
    //console.log(data)
    return (
        <StyledCon>
            {data.map(char => {
                return <Character key={char.id} data={char}/> 
            })}
        </StyledCon>
    )
}


export default CharacterContainer