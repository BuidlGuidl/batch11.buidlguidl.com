//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

interface IBatchRegistry {
    function BATCH_NUMBER() external view returns (uint16);
}

interface IGraduateNFTMetadata {
    function getName() external view returns (string memory);
    function getColor() external view returns (uint8, uint8, uint8);
}

contract BatchGraduationNFT is ERC721 {
    IBatchRegistry public batchRegistry;

    uint256 private _tokenIds;

    mapping(address => address) public yourGraduationContractAddress;
    mapping(uint256 => address) public tokenToMetadataContract;

    event MetadataSet(address builder, address metadataContract);

    // Errors
    error BatchGraduationNFT__NoMetadataSet();
    error BatchGraduationNFT__UnauthorizedCaller();
    error BatchGraduationNFT__TokenNonExistent();

    constructor(address _batchRegistry) ERC721("BatchGraduate", "BGRAD") {
        batchRegistry = IBatchRegistry(_batchRegistry);
    }

    modifier callerIsBatchRegistry() {
        if (msg.sender != address(batchRegistry)) revert BatchGraduationNFT__UnauthorizedCaller();
        _;
    }

    function setMetadataContract(address metadataContract) public {
        // Verify that the contract has the required methods
        IGraduateNFTMetadata(metadataContract).getName();
        IGraduateNFTMetadata(metadataContract).getColor();

        yourGraduationContractAddress[msg.sender] = metadataContract;
        emit MetadataSet(msg.sender, metadataContract);
    }

    function mint(address builder) public callerIsBatchRegistry returns (uint256) {
        if (yourGraduationContractAddress[builder] == address(0)) revert BatchGraduationNFT__NoMetadataSet();

        _tokenIds++;
        uint256 newTokenId = _tokenIds;
        _safeMint(builder, newTokenId);

        tokenToMetadataContract[newTokenId] = yourGraduationContractAddress[builder];
        return newTokenId;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        if (_ownerOf(tokenId) == address(0)) revert BatchGraduationNFT__TokenNonExistent();

        address metadataContract = tokenToMetadataContract[tokenId];
        IGraduateNFTMetadata metadata = IGraduateNFTMetadata(metadataContract);

        string memory name = metadata.getName();
        (uint8 r, uint8 g, uint8 b) = metadata.getColor();

        string memory svg = generateSVG(name, r, g, b);
        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "',
                        name,
                        ' Graduate", ',
                        '"description": "Batch',
                        Strings.toString(batchRegistry.BATCH_NUMBER()),
                        ' Graduation NFT", ',
                        '"image": "data:image/svg+xml;base64,',
                        Base64.encode(bytes(svg)),
                        '"}'
                    )
                )
            )
        );

        return string(abi.encodePacked("data:application/json;base64,", json));
    }

    function generateSVG(string memory name, uint8 r, uint8 g, uint8 b) internal view returns (string memory) {
        return string(
            abi.encodePacked(
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">',
                '<circle cx="100" cy="100" r="90" fill="rgb(',
                Strings.toString(r),
                ",",
                Strings.toString(g),
                ",",
                Strings.toString(b),
                ')" />',
                '<path d="M112.436 44.642v18.643h-7.841v-5.493a4.374 4.374 0 0 0-4.377-4.365c-2.417 0-4.381 1.954-4.381 4.365v5.493H88.03V44.642h4.57v2.693a2.073 2.073 0 0 0 .6 1.498 2.095 2.095 0 0 0 1.494.625 2.104 2.104 0 0 0 1.495-.625 2.081 2.081 0 0 0 .599-1.498v-2.693h2.362v-9.827c5.87-2.396 6.033 4.381 12.053 2.408-1.988 3.577-5.081 4-7.594 3.377-1.899-.47-2.421.596-2.421.596v3.446h2.456v2.681a2.058 2.058 0 0 0 .598 1.499 2.095 2.095 0 0 0 1.495.624 2.104 2.104 0 0 0 1.495-.624 2.076 2.076 0 0 0 .599-1.499v-2.68h4.605z" fill="white" />',
                '<text x="100" y="85" font-family="Times New Roman, Georgia, serif" font-weight="bold" font-size="24" fill="white" text-anchor="middle">Batch ',
                Strings.toString(batchRegistry.BATCH_NUMBER()),
                "</text>",
                '<text x="100" y="93" font-family="Times New Roman, Georgia, serif" font-size="8" fill="white" text-anchor="middle">graduate</text>',
                '<text x="100" y="135" font-family="monospace" font-size="14" fill="white" text-anchor="middle">',
                name,
                "</text>",
                '<text x="100" y="170" font-family="Times New Roman, Georgia, serif" font-size="6" fill="white" text-anchor="middle">BuidlGuidl</text>',
                "</svg>"
            )
        );
    }
}
