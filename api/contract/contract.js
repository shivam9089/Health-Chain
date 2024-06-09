const {Web3}= require("web3");
const ABI = require("../ABI.json");
const web3 = new Web3("https://shy-responsive-glitter.ethereum-sepolia.discover.quiknode.pro/cc1bfcd841ef40555948bda9105da00e053c22c7/")
const contractAddress = "0xe395b3a70acd3299aa09eca01dbd2598d9569cc5";
const contract = new web3.eth.Contract(ABI,contractAddress);

module.exports={contract}