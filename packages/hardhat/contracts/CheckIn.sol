// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IBatchRegistry {
    // Custom Errors
    error BatchNotOpen();
    error NotAContract();
    error NotInAllowList();
    error AlreadyGraduated();
    error NotCheckedIn();
    error GraduationClosed();
    // Events
    event CheckedIn(bool first, address builder, address checkInContract);
    
    // Functions
    function checkIn() external;
    function allowList(address) external view returns (bool);
    function yourContractAddress(address) external view returns (address);
    function graduatedTokenId(address) external view returns (uint256);
    function isOpen() external view returns (bool);
    function graduationOpen() external view returns (bool);
    function checkedInCounter() external view returns (uint256);
    function BATCH_NUMBER() external view returns (uint16);
    function batchGraduationNFT() external view returns (address);
}

contract CheckIn is Ownable {
    IBatchRegistry public batchRegistry;

    constructor(address _batchRegistry) Ownable(msg.sender) {
        batchRegistry = IBatchRegistry(_batchRegistry);
    }

    function callCheckIn() public onlyOwner {
        batchRegistry.checkIn();
    }
}