import {FC} from "react";
import {color} from "@chakra-ui/react";

interface LittleTotalData {
    data1:string,
    data2:string,
    data3?:string,
    color:string
}
const LittleTotalData:FC<LittleTotalData>=(props,context)=>{
    console.log('[+]Context ',context)



    return(
        <div className={`box box-${props.color}`} >
            {props.data1}
            <br/>
            {props.data3 && `+${props.data3}`}
            <br/>
            <p className={"number"}>
                {props.data2}
            </p>
        </div>
    )
}

export default LittleTotalData;