import React from "react"
export const Title = ({children})=>(
    <h1 className="title">{children}</h1>
)

//<Title title='Search Movies'/>  => reciviendo por props
//<Title>Titulo de movies</Title>  => recivinedo por children