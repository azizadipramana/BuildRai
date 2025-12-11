import { execCommand } from "../../utils/exec.js";

export default async function(){
    
    const command = "docker desktop stop"; 

    try{
        execCommand(command); 
        console.log("Docker status: stopped"); 
    } catch {
        console.log("Docker status: not stopped"); 
    }

} 