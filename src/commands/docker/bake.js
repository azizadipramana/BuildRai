import { execCommand } from "../../utils/exec.js";

export default async function(){
    const command = "docker bake"; 

    try{
        await execCommand(command);
        console.log("Docker restart: Success"); 
    } catch {
        console.log("Docker restart: Failed"); 
    }

}




