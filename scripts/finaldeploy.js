const hre = require("hardhat");

async function main() {
  const chai = await hre.ethers.getContractFactory("CrowdFunding");
  const contract = await chai.deploy(); //instance of contract
  console.log(`Deployed: ${contract.target}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
