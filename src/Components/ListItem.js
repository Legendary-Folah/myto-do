import React from 'react'

function ListItem(props) {

    // Destructure props for simplicity of code
    const {name} = props;
  return (
    <h3><li>{name}</li></h3>
  )
}

export default ListItem;