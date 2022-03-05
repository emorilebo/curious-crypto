//https://eth-ropsten.alchemyapi.io/v2/2cVrs2Q7lDoZra5C8NHtOOHopuYn7GeB

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/2cVrs2Q7lDoZra5C8NHtOOHopuYn7GeB",
      accounts: [
        "85963b7c821c2766267aaf63e2274d09e001aee7da683ee9d25f91132a1d7020",
      ],
    },
  },
};
