const networkConfig = {
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
    // 137: {
    //     name:"polygon",
    //     ethUsdPriceFeed: "0x0715A7794a1dc8e42615F059dD6e406A6594651A"
    // }
}

const developmentChains = ["hardhat", "loacalhost"]
const DECIMALS = 8
const INITAL_ANSWER = 2000_000_000_00

module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITAL_ANSWER,
}
