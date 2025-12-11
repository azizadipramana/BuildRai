import { exec } from "child_process"; 

export function execCommand(command){
    return new Promise((resolve, reject) => {
        const child = exec(command, (error, stdout, stderr) => {
            if(error){
                console.log("Error:", error.message); 
                return; 
            } 

            if(stderr){
                console.log("stderr:", stderr); 
            }
            
            console.log(stdout); 

        }); 

        child.stdout?.on("data", (data) => console.log(data)); 
        child.stderr?.on("data", (data) => console.error(data)); 
    }); 
}