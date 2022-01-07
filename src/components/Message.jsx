import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div `
background-color: red;
color: #FFF;
padding: 15px;
font-size: 22px;
text-transform: uppercase;
font-family: "Lato", sans-serif;
font-weight: 700;
text-align: center;
border-radius: 10px ;
`

const Message = ({children, }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Message
