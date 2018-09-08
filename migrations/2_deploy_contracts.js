var MinToken = artifacts.require("./MinToken.sol");
module.exports = function(deployer) {
  deployer.deploy(MinToken, 1000000).then(function(instance){
  	var tokenPrice = 1000000000000000;
  });
};