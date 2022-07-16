


import React,{createContext,useState,useEffect} from 'react'
import axiosBase from '../axiosBase'
import {useNavigate} from 'react-router-dom'

export const userContext = createContext()
const Context = (props) => {
    const navigation  = useNavigate()

    const [userObject , setUserObject] = useState()
    useEffect( ()=>fetchUser,[])
    const fetchUser =  async ()=>{
        try{
            const response  =  await axiosBase.get("user/get")
            console.log(response)
            if(response.data){
             setUserObject(response.data)
            }
            else{
                navigation("login")
            }
        }
        catch (e){
            console.log(e)
        }
    }
  return (
   <userContext.Provider value={userObject}>{props.children}</userContext.Provider>
  )
}

export default Context