import { argv, stdin } from  "process"; 

const command = argv[2]; 

async function run(){
    switch (command){

        // docker desktop command 



        // docker command 

        case "open":
            (await import("./commands/open.js")).default(); 
            break; 
        
        case "close":
            (await import("./commands/close.js")).default(); 
            break;

        case "list":
            (await import("./commands/docker_restart.js")).default(); 
            break;

        case "push":
            (await import("./commands/push.js")).default(); 
            break;
        
        case "start":
            (await import("./commands/start.js")).default(); 
            


        
        case "help": 
        case undefined: 
            showHelp(); 
            break; 
        
        default: 
            console.log('unknown command: ${command}');
            showHelp();  
    }
}

function showHelp(){
    console.log(`
        Usage: buildrai <command>

        Commands:
        A. Docker Dekstop
        docker start
        docker 

        B. Docker 
        push       Upload or push something
        list       Show list of items
        open       Open something
        close      Close something
        help       Show this help menu
    `); 
}

run(); 