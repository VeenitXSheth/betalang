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

    .replace(/\bconsole ma\b/g, 'console.log(')
    .replace(/\blakho\b/g, ')')
    .replace(/\bne ek thi moto karo\b/g, '++')
    .replace(/\bne ek thi nano karo\b/g, '--')
    .replace(/\bni shakti che\b/g, '**')
    .replace(/\ba ne raheva do\b/g, 'let')
    .replace(/\bne add karo\b/g, '+=')
    .replace(/\bne baad karo\b/g, '-=')
    .replace(/\bne guni nakho\b/g, '*=')
    .replace(/\bne bhagi nakho\b/g, '/=')
    .replace(/\bma thi baki hoy\b/g, '%=')
    .replace(/\bne shakti aapo\b/g, '**=')
    .replace(/\bmoti vaat chhe/, '/*')
    .replace(/\bvaat pati gayi/, '*/')
    .replace(/\bprayatna karo\b/g, 'try')
    .replace(/\bpacha pharo\b/g, 'default')
    .replace(/\bbadli karo\b/g, 'switch')
    .replace(/\bbaad karo\b/g, '-')
    .replace(/\bguni nakho\b/g, '*')
    .replace(/\bbhagi nakho\b/g, '/')
    .replace(/\bprasang\b/g, 'case')
    .replace(/\bkadhi nakho\b/g, 'delete')
    .replace(/\bvaat chhe\b/g, '//')
    .replace(/\bsachu\b/g, 'true')
    .replace(/\bkhotu\b/g, 'false')
    .replace(/\bnala\b/g, 'null')
    .replace(/\bkhabar nathi\b/g, 'undefined')
    .replace(/\bbahar jao\b/g, 'export')
    .replace(/\bandar avo\b/g, 'import')
    .replace(/\bsu che\b/g, 'typeof')
    .replace(/\bkaam\b/g, 'function')
    .replace(/\bpacho jao\b/g, 'return')
    .replace(/\bane jo\b/g, 'else if')
    .replace(/\bnahi to\b/g, 'else')
    .replace(/\bjo\b/g, 'if')
    .replace(/\bphenko\b/g, 'throw')
    .replace(/\bpakad\b/g, 'catch')
    .replace(/\bBhul\b/g, 'Error')
    .replace(/\bnavu\b/g, 'new')
    .replace(/\bvarga\b/g, 'class')
    .replace(/\buttam\b/g, 'super')
    .replace(/\ba che j\b/g, 'const')
    .replace(/\ba che\b/g, 'var')
    .replace(/\bmotu hoy\b/g, '>=')
    .replace(/\bna j hoy\b/g, '!==')
    .replace(/\bhoy j\b/g, '===')
    .replace(/\bna hoy\b/g, '!=')
    .replace(/\bochu hoy\b/g, '<=')
    .replace(/\bhoy\b/g, '==')
    .replace(/\bochu\b/g, '<')
    .replace(/\bmotu\b/g, '>')
    .replace(/\bane\b/g, '&&')
    .replace(/\bathava\b/g, '||')
    .replace(/\bnathi\b/g, '!')
    .replace(/\bne\b/g, '+')
    .replace(/\bbaki\b/g, '%')
    .replace(/\bkaro\b/g, 'do')
    .replace(/\bjyare\b/g, 'while')
    .replace(/\bmate\b/g, 'for')
    .replace(/\btuto\b/g, 'break')
    .replace(/\bjao\b/g, 'continue')
    .replace(/\bma thi\b/g, 'of')
    .replace(/\bma\b/g, 'in')
    .replace(/\ba\b/g, 'this')

    

    console.log(result)
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
