## PixelCanvas: Decentralized Collaborative Pixel Art Smart Contract

### Contract Overview
PixelCanvas is an Ethereum smart contract that enables collaborative pixel art creation on a fixed 64x64 canvas with a predefined color palette.

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
initializeBuidlGuidlLogo(): Sets initial canvas state with Batch11 logo

3. Contract Management
withdraw(): Allows owner to withdraw contract balance
Accepts Ether via fallback() and receive() functions

4. Initialization
Test the PixelCanvas contract
Includes default Buidlguidl Batch11 logo on contract deployment
Demonstrates initial canvas state

Current Limitations
Fixed canvas size (64x64)
No pixel modification after placement
Limited to 8 colors
Only contract owner can withdraw funds



