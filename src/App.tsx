import React, {useEffect} from 'react';
import Home from './Home';
import {useState} from "react";

import "./root.css"

interface t{
    toggle:()=>void;
}

const themeContext = React.createContext<Partial<t>>({});
const dataContext=React.createContext<any>(null)
function App() {
    const [Theme,setTheme]=useState(0);
    const [data,setData]=useState<any>(null)
    let con=1;
useEffect(()=>{
    fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india",{
        method:"GET",
        headers:{
            "X-RapidAPI-Key":"5007ef3844msh5ae54f5a5aa36abp103da3jsn45254664c522",
            "X-RapidAPI-Host":"corona-virus-world-and-india-data.p.rapidapi.com"
        }
    }).then(res=>res.json()).then(res=>{
        console.log('[+]Api fetch data ',res)
        if(res.message){
            return
        }
        setData(res)
    })
})
const toggle=()=>{
    console.log('[+]Toggled .. ',Theme)
    setTheme((Theme==0)?1:0);
    console.log('[+]')
}


  return (
      <dataContext.Provider value={{data:data}}>
          <themeContext.Provider value={{toggle: toggle}}>
            <div className={`body ${(Theme==0)?"light-mode":"dark-mode"}`}>
                <Home/>
            </div>
          </themeContext.Provider>
      </dataContext.Provider>

  );
}

export default App;
export {themeContext,dataContext}
