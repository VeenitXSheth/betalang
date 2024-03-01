const { open, access, writeFile } = require('fs/promises');
const prompt = require('prompt-sync')({sigint: true});

async function init() {
    const projectName = prompt('Beta, what is the name of your project? ');
    let entrypoint = prompt('Beta, where is your entrypoint (default: index.beta)? ');

    entrypoint = entrypoint || 'index.beta';

    const data = JSON.stringify({
        name: projectName,
        version: '1.0.0',
        entrypoint
    }, null, 2);

    try {
        await writeFile('betaconfig.json', data);
    } catch (err) {
        console.error(err);
    }
}

async function readFile(filename) {
    try {
        return (await (await open(filename, 'r')).readFile()).toString();
    } catch (err) {
        console.error(err);
    }
}


async function compile(src) {

    let result = src
    //Variable Declarations
    .replace(/a che/g, 'var')
    .replace(/a che j/g, 'const')
    .replace(/a ne raheva do/g, 'let')
    
    //Control
    .replace(/kaam/g, 'function')
    .replace(/pacho jao/g, 'return')
    .replace(/jo/g, 'if')
    .replace(/ane jo/g, 'else if')
    .replace(/nahi to/g, 'else')
    .replace(/pacha pharo/g, 'default')
    .replace(/badli karo/g, 'switch')
    .replace(/prasang/g, 'case')
    .replace(/kadhi nakho/g, 'delete')
    
    //Looping
    .replace(/karo/g, 'do')
    .replace(/jyare/g, 'while')
    .replace(/mate/g, 'for')
    .replace(/tuto/g, 'break')
    .replace(/jao/g, 'continue')
    .replace(/ma/g, 'in')
    
    //Values
    .replace(/sachu/g, 'true')
    .replace(/khotu/g, 'false')
    .replace(/nala/g, 'null')
    .replace(/khabar nathi/g, 'undefined')
    .replace(/su che/g, 'typeof')
    
    //Comparison ops
    .replace(/hoy/g, '==')
    .replace(/hoy j/g, '===')
    .replace(/na hoy/g, '!=')
    .replace(/na j hoy/g, '!==')
    .replace(/ochu/g, '<')
    .replace(/ochu hoy/g, '<=')
    .replace(/motu/g, '>')
    .replace(/motu hoy/g, '>=')
    .replace(/ane/g, '&&')
    .replace(/athava/g, '||')
    .replace(/nathi /g, '!') //usage example: nathi true -> !true
    
    //Error handling
    .replace(/phenko/g, 'throw')
    .replace(/prayatna karo/g, 'try')
    .replace(/pakad/g, 'catch')
    .replace(/bhul/g, 'Error')
    
    //classes/objects, modules
    .replace(/bahar jao/g, 'export')
    .replace(/andar avo/g, 'import')
    .replace(/navu/g, 'new')
    .replace(/varga/g, 'class')
    .replace(/a/g, 'this')
    .replace(/uttam/g, 'super')
    
    //arith operators
    .replace(/ni shakti che/g, '**')
    .replace(/ne/g, '+')
    .replace(/baad karo/g, '-')
    .replace(/guni nakho/g, '*')
    .replace(/bhagi nakho/g, '/')
    .replace(/baki/g, '%')
    
    //compound assignment 
    .replace(/ne add karo/g, '+=')
    .replace(/ne baad karo/g, '-=')
    .replace(/ne guni nakho/g, '*=')
    .replace(/ne bhagi nakho/g, '/=')
    .replace(/ma thi baki hoy/g, '%=')
    .replace(/ne shakti aapo/g, '**=')
        //usage for these: please use space before evoking, as syntax highlighting may not work as intended
        //e. g. -> 67 ne ek thi moto karo
    .replace(/ ne ek thi moto karo/g, '++')
    .replace(/ ne ek thi nano karo/g, '--')
    
    //comments
    .replace(/vaat chhe/g, '//')
    .replace(/moti vaat chhe/, '/*')
    .replace(/vaat pati gayi/, '*/')

    return result;

}

async function run() {

    try {
        await access('betaconfig.json');
        const data = await readFile('betaconfig.json');
        const jsonData = JSON.parse(data);
        const compiledCode = await compile(await readFile(jsonData.entrypoint));
        eval(compiledCode);
    } catch (err) {
        if (err.code == 'ENOENT') {
            console.log('Beta, please follow the setup and re-run this command')
            init();
        } else {
            console.error(err);
        }
    }

}

run();

module.exports = init;
module.exports = readFile;
module.exports = compile;
module.exports = run;
