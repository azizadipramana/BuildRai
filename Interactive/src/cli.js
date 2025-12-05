import readline from "readline"; 

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout, 
    prompt: "buildrai > "
}); 

console.log("Welcome to BuildRai!"); 
rl.prompt(); 

rl.on("line", (line) => {
    const cmd = line.trim(); 

    switch (cmd){
        case "push":
            console.log("Running push..");  
            break;
        
        case "list":
            console.log("showing list.."); 
            break; 
        
        case "open": 
            console.log("Opening...");
            break;  
                
        case "help": 
            console.log("Available command: push, limit, open, close, help, exit");
            break;
        
        case "exit": 
            rl.close(); 
            return; 
        
        default: 
            console.log(`unknown command ${cmd} (type "help")`); 
    }        


    rl.prompt();
}); 

rl.on("close", () => {
    console.log("Goodbye!"); 
    process.exit(0); 
}); 

