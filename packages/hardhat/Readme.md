## PixelCanvas: Decentralized Collaborative Pixel Art Smart Contract

### Contract Overview
A collaborative on-chain pixel art platform implemented as an Ethereum smart contract, enabling users to create and modify a shared 64x64 pixel canvas.

### Technical Specifications
- **Blockchain**: Ethereum
- **Solidity Version**: ^0.8.20
- **Dependencies**: OpenZeppelin Ownable
- **Canvas Dimensions**: 64x64 pixels
- **Color Palette**: 8 predefined colors

### Key Components

#### Pixel Structure
```solidity
struct Pixel {
    address author;   // Address of pixel creator
    Color color;      // Chosen color from enum
    uint256 timestamp;// Block timestamp of pixel placement
}

Core Functionalities
1. Pixel Placement

Function: placePixel(uint256 x, uint256 y, Color color)
Validates coordinate boundaries
Allows user to place a single pixel
Emits PixelPlaced event for tracking

2. Canvas Retrieval

getPixel(x, y): Retrieves individual pixel information
getCanvasSnapshot(): Returns entire canvas state

3. Initialization
Test the PixelCanvas contract
Includes default Buidlguidl Batch11 logo on contract deployment
Demonstrates initial canvas state

Known Limitations

Fixed 64x64 canvas size
Limited 8-color palette
No pixel modification after placement



