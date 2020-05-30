import React from "react"
import styled from "styled-components"
import { Text } from "../Header.styles"

const MenuItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  p:hover {
    color: #7c5eff;
  }
`

const ListItem = styled.li`
  list-style: none;
  margin: 5px 10px;
`

const Item = props => {
  return (
    <ListItem>
      <MenuItem href={props.href}>
        <Text>{props.title}</Text>
      </MenuItem>
    </ListItem>
  )
}

export default Item
