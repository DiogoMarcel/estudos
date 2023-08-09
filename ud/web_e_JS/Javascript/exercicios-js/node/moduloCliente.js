// import { ola, bemVindo, ateLogo } from './moduloA';
// import moduloB from './moduloB';

const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);

console.log('moduloA:\n',moduloA);

console.log(moduloB.bomDia);
console.log(moduloB.boaNoite());
console.log('moduloB:\n', moduloB);