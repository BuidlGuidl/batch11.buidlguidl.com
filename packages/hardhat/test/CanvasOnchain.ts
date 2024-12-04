import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("PixelCanvas", function () {
  async function deployPixelCanvas() {
    const [owner, user1, user2] = await hre.ethers.getSigners();
    const pixel = await hre.ethers.getContractFactory("PixelCanvas");
    const Pixel = await pixel.deploy();
    return { owner, user1, user2, Pixel };
  }

  describe("Deployment", function () {
    it("Should set the correct owner", async function () {
      const { owner, Pixel } = await loadFixture(deployPixelCanvas);
      expect(await Pixel.owner()).to.equal(owner.address);
    });

    it("Should initialize canvas with predefined pixels", async function () {
      // Check a few predefined pixels from initializeBuidlGuidlLogo()
      const { owner, Pixel } = await loadFixture(deployPixelCanvas);
      const bluePixel = await Pixel.canvas(15, 25);
      expect(bluePixel.color).to.equal(4); // Blue is enum index 1
      expect(bluePixel.author).to.equal(owner.address);
    });
  });

  describe("Pixel Placement", function () {
    it("Should allow placing a pixel", async function () {
      const x = 10;
      const y = 20;
      const color = 2; // Red from enum
      const { user1, Pixel } = await loadFixture(deployPixelCanvas);
      // Place pixel from user1
      await Pixel.connect(user1).placePixel(x, y, color);

      const pixel = await Pixel.canvas(x, y);
      expect(pixel.author).to.equal(user1.address);
      expect(pixel.color).to.equal(color);
    });

    it("Should reject out-of-bounds pixel placement", async function () {
      const { Pixel } = await loadFixture(deployPixelCanvas);
      await expect(Pixel.placePixel(64, 10, 0)).to.be.revertedWith("X coordinate out of bounds");

      await expect(Pixel.placePixel(10, 64, 0)).to.be.revertedWith("Y coordinate out of bounds");
    });

    it("Should emit PixelPlaced event", async function () {
      const x = 30;
      const y = 40;

      const color = 3; // Green from enum
      const { user1, Pixel } = await loadFixture(deployPixelCanvas);
      await expect(Pixel.connect(user1).placePixel(x, y, color))
        .to.emit(Pixel, "PixelPlaced")
        .withArgs(user1.address, x, y, color);
    });
  });

  describe("Pixel Retrieval", function () {
    it("Should retrieve pixel information", async function () {
      const x = 12;
      const y = 15;
      const color = 4; // Blue from enum
      const { user1, Pixel } = await loadFixture(deployPixelCanvas);
      await Pixel.connect(user1).placePixel(x, y, color);

      const pixel = await Pixel.getPixel(x, y);
      expect(pixel.author).to.equal(user1.address);
      expect(pixel.color).to.equal(color);
    });
  });

  describe("Canvas Snapshot", function () {
    it("Should return full canvas snapshot", async function () {
      const { Pixel } = await loadFixture(deployPixelCanvas);
      const snapshot = await Pixel.getCanvasSnapshot();
      expect(snapshot.length).to.equal(64);
      expect(snapshot[0].length).to.equal(64);
    });
  });
});
