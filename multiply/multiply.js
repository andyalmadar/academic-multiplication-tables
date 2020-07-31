const fs = require('fs');
const colors = require('colors');

const listTable = (base, limit = 10) => {
    for (let i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} = ${base * i}` [i % 2 === 0 ? 'green' : 'red']);
    }
};

const createTable = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`The base argument (${base}) is not a number.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tables/table-of-${base}-up-to-${limit}.txt`, data, err => {
            if (err) {
                reject(err)
            } else {
                resolve(`table-of-${base}-up-to-${limit}.txt`.green);
            }
        });
    });
};

module.exports = {
    createTable,
    listTable
};