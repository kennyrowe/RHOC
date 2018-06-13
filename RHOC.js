var Web3 = require('web3')
var contract = require('truffle-contract')
var rhoc_token = require('./build/contracts/RHOC.json')
var ws_provider = 'wss://mainnet.infura.io/ws'
var web3 = new Web3(ws_provider)
var rhoc = contract(rhoc_token);
var econtract = new web3.eth.Contract(rhoc.abi, '0x168296bb09e24a88805cb9c33356536b980d3fc5');

console.log("Starting listner ....");

newTransferEvent = econtract.events.Transfer({fromBlock: 3383352, address: '0x168296bb09e24a88805cb9c33356536b980d3fc5', toBlock: 'latest'}, function(error, result){
  if (result !== undefined) {
  	var args = result.returnValues;
    args["w_txn"] = result.transactionHash;
    console.log(args);
  }
});

//TO-DO
//Save logs to file
//Check transfer to address for byte code
//Get complete history (maybe infura does not support starting block?)
