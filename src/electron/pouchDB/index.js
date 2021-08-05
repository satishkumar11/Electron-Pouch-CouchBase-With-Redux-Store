const PouchDB = require('pouchdb')
const localSkuDB = new PouchDB('src/data');

const remoteDB = new PouchDB("http://localhost:4985/sku-db", {
    auth: {
        username: 'test_user',
        password: 'test_user@123'
    }
})


localSkuDB.sync(remoteDB, { live: true, retry: true })
    .on('change', function (change) {
    })
    .on('paused', function (info) {
    })
    .on('active', function (info) {
    })
    .on('denied', function (err) {
    })
    .on('complete', function () {
    })
    .on('error', function (err) {
    });
