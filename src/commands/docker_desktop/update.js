import { execCommand } from "../../utils/exec.js";

export default async function(){
    const command = "docker dekstop update"; 

    try{
        await execCommand(command); 
        console.log(""); 
    } catch {
        console.log(""); 
    }

}