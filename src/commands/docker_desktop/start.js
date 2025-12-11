import { execCommand } from "../../utils/exec.js"; 
// import { spinner } from "../utils/spinner";

export default async function(){ 

    const command = "docker desktop start"; 

    try {
        await execCommand(command); 
        console.log("docker start success !"); 
    } catch {
        console.log("docker start failed !!!"); 
    }

}

