import { argv, stdin } from  "process"; 

const command = argv[2]; 
const sub = argv[3]; 

async function run(){
    switch (command){

        // docker desktop command 

        case "desk":
            switch(sub) {
                case "logs":
                    (await import("./commands/docker_desktop/logs.js")).default(); 
                    break;
        
                case "restart":
                    (await import("./commands/docker_desktop/restart.js")).default(); 
                    break;
        
                case "start":
                    (await import("./commands/docker_desktop/start.js")).default(); 
                    break;
        
                case "status":
                    (await import("./commands/docker_desktop/status.js")).default(); 
                    break;
        
                case "stop":
                    (await import("./commands/docker_desktop/stop.js")).default(); 
                    break;
        
                case "update":
                    (await import("./commands/docker_desktop/update.js")).default(); 
                    break;
        
                case "version":
                    (await import("./commands/docker_desktop/version.js")).default(); 
                    break;
            }
            break; 

    

        // docker command 

        case "run":
            (await import("./commands/docker/run.js")).default(); 
            break; 
        
        case "exec":
            (await import("./commands/docker/exec.js")).default(); 
            break;

        case "ps":
            (await import("./commands/docker/ps.js")).default(); 
            break;

        case "build":
            (await import("./commands/docker/build.js")).default(); 
            break;
        
        case "bake":
            (await import("./commands/docker/bake.js")).default(); 
            break;

        case "pull":
            (await import("./commands/docker/pull.js")).default(); 
            break;

        case "push":
            (await import("./commands/docker/push.js")).default(); 
            break;

        case "images":
            (await import("./commands/docker/images.js")).default(); 
            break;

        case "login":
            (await import("./commands/docker/login.js")).default(); 
            break;

        case "logout":
            (await import("./commands/docker/logout.js")).default(); 
            break;

        case "search":
            (await import("./commands/docker/search.js")).default(); 
            break;

        case "version":
            (await import("./commands/docker/version.js")).default(); 
            break;

        case "info":
            (await import("./commands/docker/info.js")).default(); 
            break;

        
        case "help": 
        case undefined: 
            showHelp(); 
            break; 
        
        default: 
            console.log(`unknown command: ${command}`);
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