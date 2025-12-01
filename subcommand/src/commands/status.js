import { execCommand } from "../utils/exec";

export default async function(){
    const command = "docker desktop status"
    try{
        await execCommand(command); 
        console.log("Docker status: Running"); 
    } catch {
        console.log("Docker status: not running"); 
    }
    
}

