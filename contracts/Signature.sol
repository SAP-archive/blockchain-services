pragma solidity ^0.5.5;
pragma experimental ABIEncoderV2;

import "contracts/SignatureBase.sol";

contract Signature is SignatureBase {
    
    address public newContractAddress;

    constructor() public {
        paused = false;
        ceoAddress = msg.sender;
    }
    
    /// @dev Used to mark the smart contract as upgraded, in case there is a serious
    ///  breaking bug. This method does nothing but keep track of the new contract and
    ///  emit a message indicating that the new address is set. It's up to clients of this
    ///  contract to update to the new contract address in that case. (This contract will
    ///  be paused indefinitely if such an upgrade takes place.)
    /// @param _v2Address new address
    function setNewAddress(address _v2Address) external restricted whenPaused {
        // See README.md for updgrade plan
        newContractAddress = _v2Address;
        emit ContractUpgrade(_v2Address);
    }

    /// @notice Returns all the signature based on a user_id.
    /// @param _user_id The ID of the user of interest.
    function getSignaturesOfUser(uint32 _user_id)
        external
        view
        whenNotPaused
        returns (
        Signature[] memory signatures
    ) {
        signatures = _signaturesOfUser[_user_id];
    }

    /// @notice Returns all the signature based on a repo_id.
    /// @param _repo_id The ID of the repo of interest.
    function getSignaturesOfRepo(uint32 _repo_id)
        external
        view
        whenNotPaused
        returns (
        Signature[] memory signatures
    ) {
        signatures = _signaturesOfRepo[_repo_id];
    }
    
    /// @notice Returns all the relevant information about a specific signature.
    /// @param _id The ID of the signature of interest.
    function getSignature(uint256 _id)
        external
        view
        whenNotPaused
        returns (
        Signature memory signature
    ) {
        Signature storage signature = signatures[_id];
    }
    
    /// @param _username The GitHub username
    /// @param _user_id The GtHub user_id
    /// @param _comment_id The GutHub comment_id
    /// @param _repo_id The GitHub repo_id
    /// @param _pull_request_no The repo pull request no
    /// @param _created_at The timestamp of creation.
    function createSignature(
        string memory _username,
        uint32 _user_id,
        uint32 _comment_id,
        uint32 _repo_id,
        uint32 _pull_request_no,
        uint64 _created_at
    )
        public
        restricted
        whenNotPaused
        returns (uint)
    {
        uint256 newSignatureId = _createSignature(_username, _user_id, _comment_id, _repo_id, _pull_request_no,_created_at);
        return newSignatureId;
    }
}