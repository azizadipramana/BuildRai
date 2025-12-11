import { execCommand } from "../../utils/exec.js";

export default async function(){
    const command = "docker dekstop version"; 

    try{
        await execCommand(command); 
        console.log(""); 
    } catch {
        console.log(""); 
    }

}