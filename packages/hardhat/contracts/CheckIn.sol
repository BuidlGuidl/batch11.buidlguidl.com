// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn {
    IBatchRegistry public batchRegistry;
    address public owner;

    constructor(address _batchRegistryAddress) {
        batchRegistry = IBatchRegistry(_batchRegistryAddress);
        owner = msg.sender;
    }

    function checkMeIn() external {
        require(msg.sender == owner, "Not owner");
        batchRegistry.checkIn();
    }
}
