
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