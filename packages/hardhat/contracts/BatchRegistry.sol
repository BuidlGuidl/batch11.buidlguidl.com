//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./BatchGraduationNFT.sol";

contract BatchRegistry is Ownable {
    uint16 public immutable BATCH_NUMBER;
    uint256 constant CHECK_IN_REWARD = 0.01 ether;
    BatchGraduationNFT public batchGraduationNFT;

    mapping(address => bool) public allowList;
    mapping(address => address) public yourContractAddress;
    mapping(address => uint256) public graduatedTokenId;
    bool public isOpen = true;
    bool public graduationOpen = false;
    uint256 public checkedInCounter;

    event CheckedIn(bool first, address builder, address checkInContract);

    // Errors
    error BatchNotOpen();
    error NotAContract();
    error NotInAllowList();
    error AlreadyGraduated();
    error NotCheckedIn();
    error GraduationClosed();

    modifier batchIsOpen() {
        if (!isOpen) revert BatchNotOpen();
        _;
    }

    modifier senderIsContract() {
        if (tx.origin == msg.sender) revert NotAContract();
        _;
    }

    constructor(address initialOwner, uint16 batchNumber) Ownable(initialOwner) {
        batchGraduationNFT = new BatchGraduationNFT(address(this));
        BATCH_NUMBER = batchNumber;
    }

    function updateAllowList(address[] calldata builders, bool[] calldata statuses) public onlyOwner {
        require(builders.length == statuses.length, "Builders and statuses length mismatch");

        for (uint256 i = 0; i < builders.length; i++) {
            allowList[builders[i]] = statuses[i];
        }
    }

    function toggleBatchOpenStatus() public onlyOwner {
        isOpen = !isOpen;
    }

    function toggleGraduationOpenStatus() public onlyOwner {
        graduationOpen = !graduationOpen;
    }

    function checkIn() public senderIsContract batchIsOpen {
        if (!allowList[tx.origin]) revert NotInAllowList();

        bool wasFirstTime;
        if (yourContractAddress[tx.origin] == address(0)) {
            checkedInCounter++;
            wasFirstTime = true;
            (bool success,) = tx.origin.call{value: CHECK_IN_REWARD}("");
            require(success, "Failed to send check in reward");
        }

        yourContractAddress[tx.origin] = msg.sender;
        emit CheckedIn(wasFirstTime, tx.origin, msg.sender);
    }

    function graduate() public {
        if (!graduationOpen) revert GraduationClosed();
        if (graduatedTokenId[msg.sender] != 0) revert AlreadyGraduated();
        if (yourContractAddress[msg.sender] == address(0)) revert NotCheckedIn();

        uint256 newTokenId = batchGraduationNFT.mint(msg.sender);
        graduatedTokenId[msg.sender] = newTokenId;
    }

    // Withdraw function for admins in case some builders don't end up checking in
    function withdraw() public onlyOwner {
        (bool success,) = payable(owner()).call{value: address(this).balance}("");
        require(success, "Failed to withdraw");
    }

    receive() external payable {}
}
