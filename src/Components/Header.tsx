import React, {FC, useContext} from "react";

import {dataContext} from "../App";
import LittleTotalData from "./containers/LittleTotalData";

import "./Header.css"
const Header:FC=()=>{
    const {data}=useContext(dataContext)
    console.log('[+]data in context ',data)
    let flag:boolean=false
    let date=new Date()
    if(data){
        flag=true
        date= new Date()
    }else{
        flag=false
    }
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return(
        <>
            <div className={"Header"}>
                <div className={"left"}>
                    <div className={"india"}>
                        India
                    </div>
                    <p>
                        The latest update to at your fingers...
                    </p>
                    <p> As per date {
                        flag && date.getUTCDate().toString()+"/"+date.getUTCMonth().toString()+"/"+date.getUTCFullYear().toString()
                    }</p>
                </div>
                <div className={"right"}>
                    <div>Confirmed</div>
                    {
                        flag &&
                        <p className={"count"}>{data.total_values.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                    }
                    {
                        flag &&
                        <p>As of {date.getUTCDate()}  {monthNames[date.getUTCMonth()]}</p>
                    }

                </div>
            </div>
            {
                flag &&
            <div className={"little"}>
                <LittleTotalData data1={"Confirmed"} data2={data.total_values.confirmed} data3={data.total_values.deltaconfirmed} color={"red"}></LittleTotalData>
                <LittleTotalData data1={"Active"} data2={data.total_values.active} color={"blue"}></LittleTotalData>
                <LittleTotalData data1={"Deaths"} data2={data.total_values.deaths} data3={data.total_values.deltadeaths} color={"grey"}></LittleTotalData>
                <LittleTotalData data1={"Recovered"} data2={data.total_values.recovered} data3={data.total_values.deltarecovered} color={"green"}></LittleTotalData>

            </div>
            }
        </>
    )
}


export default Header;