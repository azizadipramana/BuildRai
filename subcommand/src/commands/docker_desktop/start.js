import { execCommand } from "../utils/exec"; 
import { spinner } from "../utils/spinner";

export default async function(){
    console.log("Starting Docker Desktop..."); 

    const command = "docker desktop start"; 

    try {
        await execCommand(command); 
        console.log("docker start success !"); 
    } catch {
        console.log("docker start failed !!!"); 
    }

}

