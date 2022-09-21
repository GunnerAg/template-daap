const HDWalletProvider = require('@truffle/hdwallet-provider');
const dotenv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV == 'development'){
  const envFound = dotenv.config();
  if(envFound.error) {
    throw new Error(" ⚠️ Couldn't find .env file ⚠️ ");
  }
}

module.exports = {
  contracts_directory: './src/smart-contracts/contracts',
  contracts_build_directory: './src/smart-contracts/build',
  migrations_directory: './src/smart-contracts/migrations',
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: 5777,
      gas: 4612388,
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(process.env.MNEMONIC, `https://rinkeby.infura.io/v3/97851b45f6a6423593cbc26793a738a8`),
      network_id: 4,
      gas: 5500000,
      confirmations: 0,
      timeoutBlocks: 50,
      skipDryRun: true,
    },
    main: {
      provider: () =>
        new HDWalletProvider(process.env.MNEMONIC, `https://mainnet.infura.io/v3/97851b45f6a6423593cbc26793a738a8`),
      network_id: 1,
      gas: 5500000,
      confirmations: 0,
      timeoutBlocks: 50,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: '^0.8.0',
    },
  },
};
