import { execCommand } from "../../utils/exec.js";

export default async function(){
    console.log("Stop docker dekstop");
    
    const command = "docker dekstop stop"; 

    try{
        execCommand(command); 
        console.log("Docker status: stopped"); 
    } catch {
        console.log("Docker status: not stopped"); 
    }

} 