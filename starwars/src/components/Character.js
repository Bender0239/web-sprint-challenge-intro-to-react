import React from 'react'
import styled from 'styled-components'

const StyledChar = styled.div`
    margin: 15px;
    color: #00FF7F;
    img{
        border-radius: 10px;
    }
    img{
        box-shadow: 4px 3px 8px #00FF7F;
    }
    div{
        
        display: flex;
        flex-direction: column;
        align-items: center;

        h4, p{
            margin-top: 10px; 
        }
    }
`

const Character = (props) => {
    const { data } = props
    //console.log(data)
    return (
        <StyledChar>
            <img src={data.image}></img>
            <div>
                <h4>Name: {data.name}</h4>
                <p>Status: {data.status}</p>
                <p>Species: {data.species}</p>
            </div>
        </StyledChar>
    )
}

export default Character
