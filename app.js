const colors = require('colors');
const { argv } = require('./config/yargs');
const { createTable, listTable } = require('./multiply/multiply');

const command = argv._[0];
switch (command) {
    case 'list':
        console.log('Let\'s list!'.underline);
        listTable(argv.base, argv.limit);
        break;
    case 'create':
        console.log('Let\'s create a txt!'.underline);
        createTable(argv.base, argv.limit)
            .then(file => {
                console.log(`File created: ${file}`);
            })
            .catch(err => {
                console.log(`ERROR: ${err}`);
            });
        break;
    default:
        console.log('That command does not exist'.underline);
        break;
};