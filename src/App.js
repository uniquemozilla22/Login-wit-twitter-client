import { Route, Routes } from "react-router";
import LoginScreen from "./Screens/Login/Login.screen";
import './App.css'
import { useContext } from "react";
import { userContext } from "./context/Context";
import LayoutComponent from "./Component/Layout.comp";

function App() {
  const userObject = useContext(userContext)
  return (
    <LayoutComponent user ={userObject}>
    <Routes>
      <Route path="/" exact element={<>Home</>}/>
      <Route path="/login" element={<LoginScreen />}/>
    </Routes>
    </LayoutComponent>
  );
}



export default App;
