// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract PixelCanvas is Ownable {
    // Canvas Dimensions
    uint256 public constant CANVAS_WIDTH = 64;
    uint256 public constant CANVAS_HEIGHT = 64;

    // Color Palette (Limited Options)
    enum Color {
        WHITE,
        BLACK,
        RED,
        GREEN,
        BLUE,
        YELLOW,
        PURPLE,
        ORANGE
    }

    // Pixel Structure
    struct Pixel {
        address author;
        Color color;
        uint256 timestamp;
    }

    // Mapping to store modified pixels
mapping(uint256 => mapping(uint256 => Pixel)) public canvas;


    // Events
    event PixelPlaced(address indexed author, uint256 x, uint256 y, Color color);
    event Withdrawal(address indexed owner, uint256 amount);

    // Constructor to initialize default Buidlguidl Batch11 drawing
    constructor() Ownable(msg.sender){
        
        // Initial drawing representing Buidlguidl Batch11 logo
        initializeBuidlGuidlLogo();
    }

    /**
     * @dev Initialize a default Buidlguidl Batch11 inspired pixel art
     * This is a simplified representation and can be customized
     */
    function initializeBuidlGuidlLogo() private {
    for (uint256 x = 10; x < 20; x++) {
        for (uint256 y = 10; y < 50; y++) {
            canvas[x][y] = Pixel({
                author: msg.sender,
                color: Color.BLUE,
                timestamp: block.timestamp
            });
        }
    }

        // 11 representation with some pixels
        for (uint256 x = 30; x < 40; x++) {
            for (uint256 y = 20; y < 30; y++) {
                canvas[x][y] = Pixel({
                    author: msg.sender,
                    color: Color.GREEN,
                    timestamp: block.timestamp
                });
            }
        }

        // Add some distinctive pixels to represent Buidlguidl spirit
        canvas[32][25] = Pixel({
            author: msg.sender,
            color: Color.RED,
            timestamp: block.timestamp
        });
    }

    /**
     * @dev Place a pixel on the canvas
     * @param x X-coordinate of the pixel
     * @param y Y-coordinate of the pixel
     * @param color Color of the pixel
     */
   function placePixel(uint256 x, uint256 y, Color color) external {
    require(x < CANVAS_WIDTH, "X coordinate out of bounds");
    require(y < CANVAS_HEIGHT, "Y coordinate out of bounds");

    canvas[x][y] = Pixel({
        author: msg.sender,
        color: color,
        timestamp: block.timestamp
    });

    emit PixelPlaced(msg.sender, x, y, color);
}


    /**
     * @dev Get pixel information
     * @param x X-coordinate of the pixel
     * @param y Y-coordinate of the pixel
     * @return Pixel details
     */
    function getPixel(uint256 x, uint256 y) external view returns (Pixel memory) {
    require(x < CANVAS_WIDTH, "X coordinate out of bounds");
    require(y < CANVAS_HEIGHT, "Y coordinate out of bounds");
    return canvas[x][y];
}



    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");

        // Transfer the balance to the owner
        payable(owner()).transfer(balance);

        // Emit withdrawal event
        emit Withdrawal(owner(), balance);
    }

    // Fallback and receive functions to accept Ether
    fallback() external payable {}

    receive() external payable {}
}
