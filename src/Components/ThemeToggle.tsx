import React, {FC, useContext} from "react";
import { Switch,FormControl,FormLabel } from '@chakra-ui/react'
import "./ThemeToggle.css"

import {themeContext} from "../App";
const ThemeToggle:FC=()=>{

    const theme=useContext(themeContext)

    return(
        <div className={"theme-toggle"}>
            <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='email-alerts' mb='0'>
                    Light/Dark
                </FormLabel>
                <Switch onChange={theme.toggle}id='theme' />
            </FormControl>
        </div>
    )
}
export default ThemeToggle;