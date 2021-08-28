import { readFileSync, writeFileSync } from 'fs';
import { argv } from 'process';

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
    pkgJson.version = incrementType[typeVersion](pkgJson.version.split('.'))
    writeFileSync('./package.json', JSON.stringify(pkgJson, null, 2));
}

if(argv.length <= 2 || incrementType[argv[2]] === undefined) {
    console.error('Not type increment')
} else {
    useIncrement(argv[2])
}

