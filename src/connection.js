const contract = require("@truffle/contract");
const signature_artifact = require("../build/contracts/Signature.json");

const Signature = contract(signature_artifact);

module.exports = {
    getSignature: async function (signature_id) {
        console.log("GET SIGNATURE: " + signature_id);

        // Bootstrap the Signature abstraction for Use.
        Signature.setProvider(this.web3.currentProvider);

        try {
            let instance = await Signature.deployed();
            let signature = await instance.getSignature(parseInt(signature_id));
            console.log(signature)
            return signature;
        } catch (error) {
            console.log(error);
            return "Error 500: " + error;
        }
    },
    getSignaturesOfUser: async function (user_id) {
        console.log("GET USER: " + user_id);

        // Bootstrap the Signature abstraction for Use.
        Signature.setProvider(this.web3.currentProvider);

        try {
            let instance = await Signature.deployed();
            let signatures = await instance.getSignaturesOfUser(user_id);
            return signatures;
        } catch (error) {
            console.log(error);
            return "Error 500: " + error;
        }
    },
    getSignaturesOfRepo: async function (repo_id) {
        console.log("GET REPO: " + repo_id);

        // Bootstrap the Signature abstraction for Use.
        Signature.setProvider(this.web3.currentProvider);

        try {
            let instance = await Signature.deployed();
            let signatures = await instance.getSignaturesOfRepo(repo_id);
            return signatures;
        } catch (error) {
            console.log(error);
            return "Error 500: " + error;
        }
    },
    createSignature: async function (
        username,
        user_id,
        comment_id,
        repo_id,
        pull_request_no,
        created_at
    ) {
        console.log("CREATING SIGNATURE FOR: " + username);
        // Bootstrap the Signature abstraction for Use.
        Signature.setProvider(this.web3.currentProvider);

        try {
            let instance = await Signature.deployed();
            let accounts = await this.web3.eth.getAccounts();
            const ceoAccount = accounts[0];
            let newId = await instance.createSignature(
                username,
                user_id,
                comment_id,
                repo_id,
                pull_request_no,
                created_at,
                {from: ceoAccount}
            );
            console.log("CREATED!");
            let signatureId = parseInt(newId.logs[0].args.signatureId);
            console.log(signatureId)
            return signatureId;
        } catch (error) {
            console.log(error);
            return "Error 500: " + error;
        }
    },
    paused: async function () {
        console.log("GET STATUS");

        // Bootstrap the Signature abstraction for Use.
        Signature.setProvider(this.web3.currentProvider);

        try {
            let instance = await Signature.deployed();
            return await instance.paused();
        } catch (error) {
            console.log(error);
            return "Error 500: " + error;
        }
    }
};
