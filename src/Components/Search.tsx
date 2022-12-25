import React, {FC, useState} from "react";

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    FormHelperText,
} from '@chakra-ui/react'

import "./Search.css"
const Search:FC=()=>{
    const [Search,setSearch]=useState<string>("");
    function handleSearch(e:any){
        console.log('[+]Search ',e.target.value)
        setSearch(e.target.value)
    }
    function searchSubmitHandler(e:any){
        e.preventDefault();
        console.log('[+]Searched for ',Search)
    }
    return(
        <div className={"search"}>
            <form onSubmit={searchSubmitHandler}>
                <FormControl>
                    <FormLabel>Search</FormLabel>
                    <Input type='text' value={Search} onChange={handleSearch} />
                    <FormHelperText>Search the states you need...</FormHelperText>
                </FormControl>
            </form>
        </div>

    )
}

export default Search;