
const SHA256 = require("crypto-js/sha256")

/* Generate hash */
const calculateHash = ({ previousHash, timestamp, data, nonce = 1 }) => {
    return SHA256(previousHash + timestamp + JSON.stringify(data) + nonce).toString()
}

/* Genesis block */
const generateGenesisBlock = () => {
    const block = {
        timestamp: + new Date(),
        data: "Genesis Block",
        previousHash: "0"
    };
    return {
        ...block,
        hash: calculateHash(block)
    }
}

const checkDifficulty = (difficulty, hash) => {
    return hash.substr(0, difficulty) === "0".repeat(difficulty)
}

const nextNonce = (block) => {
    return updateHash({ ...block, nonce: block.nonce + 1 })
}

const updateHash = (block) => {
    return { ...block, hash: calculateHash(block) }
}

const addBlock = (chain, data) => {
    const { hash: previousHash } = chain[chain.length - 1]
    const block = {
        timestamp: + new Date(),
        data,
        previousHash,
        nonce: 0
    }
    const newBlock = mineBlock(4, block)
    return chain.concat(newBlock)
}

const newBlock = {
    data: {
        sender: "x3041d34134g22d",
        receiver: "x89sj8ak2l9al18",
        amount: 0.0012,
        currency: "BTC"
    },
    timestamp: 1568481293771,
    previousHash: "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae",
}



console.log(generateGenesisBlock())

// https://dev.to/educationecosystem/how-to-create-your-own-cryptocurrency-blockchain-in-nodejs-274c
// https://itnext.io/writing-a-blockchain-in-node-js-cd3e903226cf