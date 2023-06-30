// console.log("Datos: ", process.argv);

// for (let i = 0; i < process.argv.length; i++) {
//     console.log(process.argv[i]);
// }

import { Command } from 'commander';

const program = new Command();

program
    .option('-d', 'variable para debug')
    .option('-p <item>', 'puerto del servidor')
    .requiredOption('-m <item>', 'variable obligatoria');

program.parse();

const option = program.opts();

console.log("Options: ", option);
console.log("Opcion D: ", option.d);
console.log("Opcion P: ", option.p);
console.log("Opcion M: ", option.m);
