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
	event PixelPlaced(
		address indexed author,
		uint256 x,
		uint256 y,
		Color color
	);
	event Withdrawal(address indexed owner, uint256 amount);

	// Constructor to initialize default Buidlguidl Batch11 drawing
	constructor() Ownable(msg.sender) {
		// Initial drawing representing Buidlguidl Batch11 logo
		initializeBuidlGuidlLogo();
	}

	/**
	 * @dev Initialize a default Buidlguidl Batch11 inspired pixel art
	 * This is a simplified representation and can be customized
	 */
	function initializeBuidlGuidlLogo() private {
		uint256 startx = 28;
		uint256 starty = 28;

		canvas[startx][starty + 1] = Pixel({
			author: msg.sender,
			color: Color.BLACK,
			timestamp: block.timestamp
		});

		canvas[startx + 1][starty] = Pixel({
			author: msg.sender,
			color: Color.BLACK,
			timestamp: block.timestamp
		});

		canvas[startx + 1][starty + 1] = Pixel({
			author: msg.sender,
			color: Color.BLACK,
			timestamp: block.timestamp
		});

		canvas[startx + 1][starty + 2] = Pixel({
			author: msg.sender,
			color: Color.BLACK,
			timestamp: block.timestamp
		});

		canvas[startx + 1][starty + 3] = Pixel({
			author: msg.sender,
			color: Color.BLACK,
			timestamp: block.timestamp
		});

		canvas[startx + 1][starty + 4] = Pixel({
			author: msg.sender,
			color: Color.BLACK,
			timestamp: block.timestamp
		});

		canvas[startx][starty + 4] = Pixel({
			author: msg.sender,
			color: Color.BLACK,
			timestamp: block.timestamp
		});
		canvas[startx + 2][starty + 4] = Pixel({
			author: msg.sender,
			color: Color.BLACK,
			timestamp: block.timestamp
		});

		startx = 32;

		canvas[startx][starty + 1] = Pixel({
			author: msg.sender,
			color: Color.BLACK,
			timestamp: block.timestamp
		});

		canvas[startx + 1][starty] = Pixel({
			author: msg.sender,
			color: Color.BLACK,
			timestamp: block.timestamp
		});

		canvas[startx + 1][starty + 1] = Pixel({
			author: msg.sender,
			color: Color.BLACK,
			timestamp: block.timestamp
		});

		canvas[startx + 1][starty + 2] = Pixel({
			author: msg.sender,
			color: Color.BLACK,
			timestamp: block.timestamp
		});

		canvas[startx + 1][starty + 3] = Pixel({
			author: msg.sender,
			color: Color.BLACK,
			timestamp: block.timestamp
		});

		canvas[startx + 1][starty + 4] = Pixel({
			author: msg.sender,
			color: Color.BLACK,
			timestamp: block.timestamp
		});

		canvas[startx][starty + 4] = Pixel({
			author: msg.sender,
			color: Color.BLACK,
			timestamp: block.timestamp
		});
		canvas[startx + 2][starty + 4] = Pixel({
			author: msg.sender,
			color: Color.BLACK,
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
	function getPixel(
		uint256 x,
		uint256 y
	) external view returns (Pixel memory) {
		require(x < CANVAS_WIDTH, "X coordinate out of bounds");
		require(y < CANVAS_HEIGHT, "Y coordinate out of bounds");
		return canvas[x][y];
	}

	/**
	 * @dev Get the entire canvas as a 2D array of pixels
	 * @return Array of arrays containing all pixels
	 */
	function getFullCanvas() external view returns (Pixel[][] memory) {
		Pixel[][] memory fullCanvas = new Pixel[][](CANVAS_WIDTH);

		for (uint256 x = 0; x < CANVAS_WIDTH; x++) {
			fullCanvas[x] = new Pixel[](CANVAS_HEIGHT);
			for (uint256 y = 0; y < CANVAS_HEIGHT; y++) {
				fullCanvas[x][y] = canvas[x][y];
			}
		}

		return fullCanvas;
	}

	function withdraw() external onlyOwner {
		uint256 balance = address(this).balance;
		require(balance > 0, "No funds to withdraw");

		(bool success, ) = payable(owner()).call{ value: balance }("");
		require(success, "Transfer failed");

		emit Withdrawal(owner(), balance);
	}

	// Fallback and receive functions to accept Ether
	fallback() external payable {}

	receive() external payable {}
}
