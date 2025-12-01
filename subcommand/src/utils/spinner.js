export function spinner(message){
    const frames = ['-', '\\', '|', '/']; 
    var i = 0; 

    const interval = setInterval(() => {
        process.stdout.write(`\r${frames[i++ % frames.length]} $(message)`); 
    }, 100);
    
    return {
        stop(success = true){
            clearInterval(interval); 
            const symbol = success ? "V" : "X"; 
            process.stdout.write(`\r$(symbol) $(message)\n`); 
        }
    }
}