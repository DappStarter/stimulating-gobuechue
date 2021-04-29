require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict person forget turn ship riot pizza smooth coin derive sudden tuition'; 
let testAccounts = [
"0x9d8ff64d1b38f81c2a7d2af9958421b4ea1ba908c0043fa3e7f19be42b45d343",
"0x6f60078206c52a1223f4f8933d282a2284325a3659a7a1412002da9c630644df",
"0xf6ec0937e4dbc70f99eb390107505083c0b410719c01c534a4c00f32677fd2b7",
"0xca942c8949f8524a61a6faafdadf40470467772c31c4ea9d3f379481c3a50fc6",
"0x8eaa2e6fe128e5c1988a94b05744b005f2ad650f9cf01147c442bd7dd7836ed6",
"0x7044529458b3bd5d0cada7667e82ebc16223328c29efe519b868d3c6933239e7",
"0xf5cb5440f7784f8d13f99682a0869383812e5d1d910ce59377ffb290138b6989",
"0x57fe729aef2c30a51e0a50a066b24741d5e275248b4577ca5deceb5a6a2208ac",
"0xeccb3f8cf1224d96868a7ad7eeacfb1dc96daa3869718a0e7e43697c34ad9343",
"0xf4914528acb4cd83b1adf2b0bdb087c7b8d0d58b7349cf05e86973cbc1239860"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

