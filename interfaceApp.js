
//const childProcess = require('child_process');
//const { exec } = require('child_process');

const btnCreate = document.querySelector('.btn-create');

const parentNameInput = document.querySelector('.partner-name')
const hostInput = document.querySelector('.host')
const clientIdNameInput = document.querySelector('.client-id')
const clientSecretInput = document.querySelector('.client-secret')
const originIdInput = document.querySelector('.origin-id')

let partnerName = "";
let host = "";
let clientId = "";
let clientSecret = "";
let originId = "";

parentNameInput.addEventListener ('input', (e) => {
    partnerName = e.target.value;
})
hostInput.addEventListener ('input', (e) => {
    host = e.target.value;
})
clientIdNameInput.addEventListener ('input', (e) => {
    clientId = e.target.value; 
})
clientSecretInput.addEventListener ('input', (e) => {
    clientSecret = e.target.value; 
})
originIdInput.addEventListener ('input', (e) => {
    originId = e.target.value;
})


const credentials = () => {   
    const creds = {
        partnerName,
        host,
        clientId,
        clientSecret,
        originId
    }
    console.log(creds)        
    return creds
}

/*const execProcess = (command) => {
    exec(command, (error, stdout, stderr)=> {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);

        if (error != null) {
            console.log(`error: ${error}`);
        }
    })
}*/

btnCreate.addEventListener ('click', () => {
    credentials();
    //execProcess('npm wdio run wdio.conf.js')
})
exports = credentials;
