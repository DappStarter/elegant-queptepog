require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth shift protect idea permit foster tent'; 
let testAccounts = [
"0xe494c95475f4e3c660dcc12336fd47ffd186836144b77a6dd78875149f685dc9",
"0x63401bc6cf43d93a3c755c7c5babbdda45a977105fa6fea4bea7700b4ab5540d",
"0xb8699b6652b077258818f12134a0459a61c92358d29e02423e7c7bde9407f5a4",
"0x235d0ab5b4be3b4638a83c6ba4995125b0d18518b1ff9957af64635f030a6c41",
"0x2a1db7d080899054f629d7450b6fa5a2cd512c321c02a4aa59b5e376f26b3fd8",
"0xa549f1ad17f7e7e57b2ed66770f64e46d7e91f5315783fbdeab3cdcee7e12149",
"0x53efdcd55363ea577335c39c1da4fbf393afe375733fadf68ca195415d7fc1fa",
"0x74c6b2076bddef28acab347fbfd3748887455b20cc4c10a40939cb1180ac9282",
"0x1f3a8922e83fa29408be69b3b8f5e649b4cae793f76c9bd314711935017f54a3",
"0x206c85398f3c29913cf98a4da5a79ee36ceb753420dfd4c40456724eb7c8c4aa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
