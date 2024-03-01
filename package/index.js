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
    .replace(/a che/g, 'var')
    .replace(/dekho/g, 'return')
    .replace(/jo/g, 'if')
    .replace(/ane/g, 'else if')
    .replace(/nahi to/g, 'else')
    .replace(/jyare/g, 'while')
    .replace(/mate/g, 'for')
    .replace(/tuto/g, 'break')
    .replace(/sachu/g, 'true')
    .replace(/khotu/g, 'false')
    .replace(/nala/g, 'null')
    .replace(/kaam/g, 'function')
    .replace(/hoy/g, '==')
    .replace(/kadak hoy/g, '===')
    .replace(/jao/g, 'continue')
    .replace(/baki/g, 'default')
    .replace(/kadhi nakho/g, 'delete')
    .replace(/karo/g, 'do')
    .replace(/udti/g, 'float')
    .replace(/macchara nathi/g, 'debugger')
    .replace(/bahar jao/g, 'export')
    .replace(/andar avo/g, 'import')
    .replace(/tya jao/g, 'goto')
    .replace(/ma/g, 'in')
    .replace(/baharni jagya/g, 'public')
    .replace(/phenkavum/g, 'throw')
    .replace(/sathe/g, 'with')
    .replace(/pakadyo/g, 'catch')
    .replace(/navu/g, 'new')
    .replace(/koi khyal nathi/g, 'undefined')
    .replace(/varga/g, 'class')
    .replace(/a su che/g, 'typeof');

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