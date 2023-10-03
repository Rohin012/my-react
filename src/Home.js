
import { Employee } from "./data";

export default function Home(){
    return(
        <div>
            {Employee.map((value)=>{

                            return (<><div> {value.id}{value.name}</div></>)

                            })}
        </div>)
}