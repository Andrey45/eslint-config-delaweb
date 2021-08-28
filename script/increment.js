import { readFileSync, writeFileSync } from 'fs';
import shell from 'shelljs';
import { argv } from 'process';

let targetVersion = '';
let newVersion = ''

const incrementType = {
    major: ([major]) => {
        return [++major, 0, 0].join('.')
    },
    minor: ([major, minor]) => {
        return [major, ++minor, 0].join('.')
    },
    patch: ([major, minor, patch]) => {
        return [major, minor, ++patch].join('.')
    },
}

const useIncrement = (typeVersion) => {
    const pkgJson = JSON.parse(readFileSync('./package.json', 'utf8'));
    targetVersion = pkgJson.version;
    pkgJson.version = incrementType[typeVersion](pkgJson.version.split('.'))
    newVersion = pkgJson.version;
    writeFileSync('./package.json', JSON.stringify(pkgJson, null, 2));
}

if(argv.length <= 2 || incrementType[argv[2]] === undefined) {
    console.error('Not type increment')
} else {
    useIncrement(argv[2]);
    const commit = `git add . && git commit -m "version ${targetVersion} has been upgraded to ${newVersion}"`
    shell.exec(commit.toString());
    shell.exec('git push');
    shell.exec('npm publish')
}
