// Load the AWS SDK for Node.js
const truffle_connect = require("./connection.js");
const Web3 = require("web3");
require("dotenv").config({path: '../.env'});
const HDWalletProvider = require("@truffle/hdwallet-provider");

const mnemonic = process.env.MNEMONIC;
const endpoint = process.env.ENDPOINT;
truffle_connect.web3 = new Web3(new HDWalletProvider(mnemonic, endpoint));

exports.handler = async (event, context, callback) => {
    console.log("event: ", JSON.stringify(event));

    for (let signature of JSON.parse(event.Records[0].body)) {
        console.log("Signature: " + signature);
        try {
            let signatureId = await truffle_connect.createSignature(
                signature.username,
                signature.user_id,
                signature.comment_id,
                signature.repo_id,
                signature.pull_request_no,
                signature.created_at
            );
        } catch (error) {
            const response = {
                statusCode: 500,
                body: JSON.stringify({
                    message: "Internal Error: " + error,
                    input: event
                })
            };
            return response;
        }
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "SQS event processed.",
            input: event
        })
    };

    return response;
};
