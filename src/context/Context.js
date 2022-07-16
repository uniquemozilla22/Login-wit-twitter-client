


import React,{createContext,useState,useEffect} from 'react'
import axiosBase from '../axiosBase'

export const userContext = createContext()
const Context = (props) => {

    const [userObject , setUserObject] = useState()
    useEffect( ()=>fetchUser,[])
    const fetchUser =  async ()=>{
        try{
            const response  =  await axiosBase.get("user")
            if(response.data){
             setUserObject(response.data)
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