# CLA-Assistant: Decentralized Signature Storage

These Blockchain Services provide the option to store and explore CLA Signatures on the [Ethereum Blockchain](https://de.wikipedia.org/wiki/Ethereum).

## Motivation

To optimize data security the [GitHub Actions based CLA Handling](https://github.com/cla-assistant/github-action/blob/master/README.md) leverages Smart Contracts on the Ethereum Blockchain by storing CLA Signatures in the corresponding Distributed Ledger.

## How it works

Whenever a user signs a CLA in the repository,
an automated process (e.g Github Action) will send the data to an endpoint, which inserts the data into a blockchain.
The API is written in node.js with express.
We used the serverless framework (AWS) for cost optimization.
There is also the option to run the application in a [Docker Container](https://github.com/cla-assistant/blockchain-services/blob/master/Dockerfile). We highly recommend to use it as a serverless application.

## Client

A detailed documentation about the Signature Viewer can be found [here](https://github.com/cla-assistant/blockchain-services/blob/master/client/README.md).

## Server

A detailed documentation about the Blockchain Services itself (backend) can be found [here](https://github.com/cla-assistant/blockchain-services/blob/master/server/README.md).
