const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
};

const argv =
    require('yargs')
    .command('list', 'Shows in console a multiplication table', options)
    .command('create', 'Creates a multiplication table and saves is as a txt', options)
    .help()
    .argv;

module.exports = {
    argv
};