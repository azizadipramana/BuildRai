import { execCommand } from "../../utils/exec";

export default async function(){
    const command = "docker desktop logs"; 

    try{
        await execCommand(command);
        console.log("Docker restart: Success"); 
    } catch {
        console.log("Docker restart: Failed"); 
    }

}




