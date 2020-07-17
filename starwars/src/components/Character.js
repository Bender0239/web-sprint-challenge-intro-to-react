import React from 'react'
import styled from 'styled-components'

const StyledChar = styled.div`
    margin: 15px;
    color: white;
`

const Character = (props) => {
    const { data } = props
    console.log(data)
    return (
        <StyledChar>
            <img src={data.image}></img>
            <h4>Name: {data.name}</h4>
            <div>
                <p>Status: {data.status}</p>
                <p>Species: {data.species}</p>
            </div>
        </StyledChar>
    )
}

export default Character
