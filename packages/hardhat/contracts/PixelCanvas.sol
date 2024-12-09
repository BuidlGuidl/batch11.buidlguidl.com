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

    // 2D Mapping to store pixels
    Pixel[CANVAS_WIDTH][CANVAS_HEIGHT] public canvas;

    // Events
    event PixelPlaced(address indexed author, uint256 x, uint256 y, Color color);

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
        // B letter representation
        for (uint256 x = 10; x < 20; x++) {
            for (uint256 y = 10; y < 50; y++) {
                canvas[x][y] = Pixel({
                    author: owner(),
                    color: Color.BLUE,
                    timestamp: block.timestamp
                });
            }
        }

        // 11 representation with some pixels
        for (uint256 x = 30; x < 40; x++) {
            for (uint256 y = 20; y < 30; y++) {
                canvas[x][y] = Pixel({
                    author: owner(),
                    color: Color.GREEN,
                    timestamp: block.timestamp
                });
            }
        }

        // Add some distinctive pixels to represent Buidlguidl spirit
        canvas[32][25] = Pixel({
            author: owner(),
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
        // Validate pixel coordinates
        require(x < CANVAS_WIDTH, "X coordinate out of bounds");
        require(y < CANVAS_HEIGHT, "Y coordinate out of bounds");

        // Update pixel
        canvas[x][y] = Pixel({
            author: msg.sender,
            color: color,
            timestamp: block.timestamp
        });

        // Emit event
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

    
   

    /**
     * @dev Get canvas snapshot (useful for viewing entire canvas)
     * @return Array of pixels
     */
    function getCanvasSnapshot() external view returns (Pixel[CANVAS_WIDTH][CANVAS_HEIGHT] memory) {
        return canvas;
    }
}
