import React, {FC} from "react";
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";

import "./Top.css"
const Top:FC=()=>{
    return (
        <div className={"top"}>
        <Search/>
        <ThemeToggle/>
        </div>
    );
}

export default Top;