import { expect } from "chai";
import { viem } from "hardhat";
import { getAddress, parseEther } from "viem";

describe("InsuranceNFT", function () {
  async function deployInsuranceNFTFixture() {
    const [owner, minter, user] = await viem.getWalletClients();

    const insuranceNFT = await viem.deployContract("InsuranceNFT", [
      "MediChainX Insurance",
      "MEDIX",
    ]);

    return {
      insuranceNFT,
      owner,
      minter,
      user,
    };
  }

  describe("Deployment", function () {
    it("Should set the right name and symbol", async function () {
      const { insuranceNFT } = await deployInsuranceNFTFixture();

      expect(await insuranceNFT.read.name()).to.equal("MediChainX Insurance");
      expect(await insuranceNFT.read.symbol()).to.equal("MEDIX");
    });

    it("Should set the right owner", async function () {
      const { insuranceNFT, owner } = await deployInsuranceNFTFixture();

      expect(await insuranceNFT.read.owner()).to.equal(
        getAddress(owner.account.address)
      );
    });
  });

  describe("Minter Authorization", function () {
    it("Should allow owner to set authorized minters", async function () {
      const { insuranceNFT, owner, minter } = await deployInsuranceNFTFixture();

      await insuranceNFT.write.setMinter([minter.account.address, true]);

      expect(
        await insuranceNFT.read.authorizedMinters([minter.account.address])
      ).to.be.true;
    });

    it("Should prevent unauthorized minting", async function () {
      const { insuranceNFT, user } = await deployInsuranceNFTFixture();

      await expect(
        insuranceNFT.write.mintPolicy(
          [
            user.account.address,
            parseEther("1000"),
            parseEther("100"),
            BigInt(86400 * 365), // 1 year
            "Health Insurance",
            "ipfs://test-metadata",
          ],
          { account: user.account }
        )
      ).to.be.rejectedWith("Not authorized to mint");
    });
  });

  describe("Policy Minting", function () {
    it("Should mint policy NFT with correct data", async function () {
      const { insuranceNFT, owner, minter, user } =
        await deployInsuranceNFTFixture();

      // Authorize minter
      await insuranceNFT.write.setMinter([minter.account.address, true]);

      // Mint policy
      const coverageAmount = parseEther("1000");
      const premium = parseEther("100");
      const duration = BigInt(86400 * 365); // 1 year
      const policyType = "Health Insurance";
      const metadataURI = "ipfs://test-metadata";

      await insuranceNFT.write.mintPolicy(
        [
          user.account.address,
          coverageAmount,
          premium,
          duration,
          policyType,
          metadataURI,
        ],
        { account: minter.account }
      );

      // Verify NFT was minted
      expect(await insuranceNFT.read.ownerOf([0n])).to.equal(
        getAddress(user.account.address)
      );

      // Verify policy data
      const policyData = await insuranceNFT.read.getPolicyData([0n]);
      expect(policyData.coverageAmount).to.equal(coverageAmount);
      expect(policyData.premium).to.equal(premium);
      expect(policyData.policyType).to.equal(policyType);
      expect(policyData.isClaimed).to.be.false;
      expect(policyData.metadataURI).to.equal(metadataURI);
    });
  });
});
