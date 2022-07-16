import React from 'react'
import styled from '@emotion/styled'
import {Avatar,Tooltip} from "@mui/material"
import {Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import axiosBase from '../axiosBase';
const NavigationBar = ({user}) => {

    const logout = () =>{
        try{
            const logout  = axiosBase.get("user/logout")
        }
        catch(e)
        {
            console.log(e)
        }
    }

  return (
    <Wrapper>
        <Name>{ user && user.name || "Login"}</Name>
        <UserSection>
            {user ?<LoggedInUser>
            <Tooltip title={user.name}><Avatar src={user.image}/></Tooltip>
            <Logout onClick={()=>logout()}><Tooltip title={"Logout"}><LogoutIcon/></Tooltip></Logout>
            </LoggedInUser>:<Link to="/login"><Tooltip title={"Login"}><LoginIcon/></Tooltip></Link>}
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
const LoggedInUser = styled.div({
    display:"flex",
    gap:"1rem",
})



const Name  = styled.h3({
    fontSize:"1.5rem",
    margin:"0"

})

const Logout = styled.button({
    background:"transparent",
    color:'#2b2b2b',
    border:'none'
})

export default NavigationBar