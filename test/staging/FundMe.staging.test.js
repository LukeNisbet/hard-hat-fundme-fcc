const { assert } = require("chai")
const { getNamedAccounts, ethers, network } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

// ////  let varible = true
// ////  somevar = varible ? "yes" : "no"   ----is equivelent to >>>>> if (varible) { somevar = "yes"} else {somvar = "no"}

developmentChains.includes(network.name)
    ? describe.skip //the question mark is a tunrary opperator
    : describe("FundMe", async function () {
          let fundMe
          let deployer
          const sendValue = ethers.utils.parseEther("0.1")
          beforeEach(async function () {
              deployer = (await getNamedAccounts).deployer
              fundMe = await ethers.getContract("FundMe", deployer)
          })
          it("Allows people to fund and withdraw", async function () {
              await fundMe.fund({ value: sendValue })
              await fundMe.withdraw()
              const endingBalance = await fundMe.provider.getBalance(
                  fundMe.address
              )
              assert.equal(endingBalance.toString(), "0")
          })
      })
