import React from "react";
import {FC} from "react";

import Top from "./Components/Top";
import Header from "./Components/Header"
const Home:FC=()=>{
    return(
        <div >
            <Top />
            <Header/>
        </div>
    )
}

export default Home;