import React from 'react'
import styled from '@emotion/styled'
import {Avatar,Tooltip} from "@mui/material"
import {Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login';
const NavigationBar = ({user}) => {

    console.log(user)

  return (
    <Wrapper>
        <Name>{ user && user.name || "Login"}</Name>
        <UserSection>
            {user ?<Tooltip title={user.name}><Avatar src={user.image}/></Tooltip>:<Link to="/login"><Tooltip title={"Login"}><LoginIcon/></Tooltip></Link>}
        </UserSection>
    </Wrapper>
  )
}


const Wrapper = styled.div({
    display:"flex",
    backgroundColor:"white",
    color:"#2b2b2b",
    padding:"1rem 2rem",
    justifyContent:"space-between",
    alignItems:"center",

})
const UserSection = styled.div({
    alignSelf:"end"
})


const Name  = styled.h3({
    fontSize:"1.5rem",
    margin:"0"

})

export default NavigationBar