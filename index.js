const db_backpack_suite = require('db-backpack-suite');
const db_backpack_downloader = require('db-backpack-downloader');
const node_sass = require('node-sass');
const mongoose = require('mongoose');
const validator = require('validator');
const socket.io = require('socket.io');

const assert = require('assert');
assert.strictEqual(1, 1, '1 should be equal to 1');

const events = require('events');
const emitter = new events.EventEmitter();
emitter.on('customEvent', (arg1, arg2) => {
  console.log('Custom event triggered:', arg1, arg2);
});
emitter.emit('customEvent', 'Hello', 'World');

const user = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = user;
console.log(`User's name is ${firstName} ${lastName}`);

// Estimate gas cost for a smart contract method call
contractInstance.methods.someMethod().estimateGas({ from: senderAddress }).then(gas => {
  console.log('Gas estimate for method:', gas);
}).catch(err => {
  console.error('Error estimating gas for method:', err);
});

const array = [5, 12, 8, 130, 44];
const found = array.find(element => element > 10);
console.log(found);

try {
  throw new Error('Whoops!');
} catch (e) {
  console.log(e.name + ': ' + e.message);
}

const dns = require('dns');
dns.lookup('example.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});

// Deploy a smart contract using Truffle
const TruffleContract = require('@truffle/contract');
const contractJson = require('./build/contracts/YourContract.json');
const contract = TruffleContract(contractJson);
contract.setProvider(web3.currentProvider);

contract.deployed().then(instance => {
  console.log('Contract address:', instance.address);
}).catch(err => {
  console.error('Error deploying contract:', err);
});

// Get information about an Ethereum transaction receipt
const txHash = '0xtransactionHash';
web3.eth.getTransactionReceipt(txHash).then(receipt => {
  console.log('Transaction receipt:', receipt);
}).catch(err => {
  console.error('Error getting transaction receipt:', err);
});