pragma solidity ^0.5.0;

import "contracts/SignatureAccessControl.sol";

contract SignatureBase is SignatureAccessControl {

    event Signed(string username, uint32 user_id, uint256 signatureId);

    struct Signature {
        // github username
        string username;

        // github user_id.
        uint32 user_id;

        // github comment_id.
        uint32 comment_id;

        // github repo_id
        uint32 repo_id;

        // repo pull request
        uint32 pull_request_no;

        // timestamp of created_at.
        uint64 created_at;
    }

    Signature[] signatures;

    /// @dev A mapping from user_id to signatures that this user made.
    mapping (uint32 => Signature[]) _signaturesOfUser;

    /// @dev A mapping from repo_id to signatures.
    mapping (uint32 => Signature[]) _signaturesOfRepo;

    /// @dev An internal method that creates a new signature and stores it. This
    ///  method doesn't do any checking and should only be called when the
    ///  input data is known to be valid.
    /// @param _username The GitHub username
    /// @param _user_id The GtHub user_id
    /// @param _comment_id The GutHub comment_id
    /// @param _repo_id The GitHub repo_id
    /// @param _pull_request_no The repo pull request no
    /// @param _created_at The timestamp of creation.
    function _createSignature(
        string memory _username,
        uint32 _user_id,
        uint32 _comment_id,
        uint32 _repo_id,
        uint32 _pull_request_no,
        uint64 _created_at
    )
        internal
        returns (uint)
    {

        Signature memory _signature = Signature({
            username: _username,
            user_id: _user_id,
            comment_id: _comment_id,
            repo_id: _repo_id,
            pull_request_no: _pull_request_no,
            created_at: _created_at
        });
        uint256 newSignatureId = signatures.push(_signature) - 1;

        // It's probably never going to happen, 2^64 signatures is A LOT, but
        // let's just be 100% sure we never let this happen.
        require(newSignatureId == uint256(uint64(newSignatureId)));

        // emit the signed event
        emit Signed(
            _username,
            _user_id,
            newSignatureId
        );

        // This will create a mapping of the signature onto the user and repo

        _signaturesOfUser[_user_id].push(_signature);
        _signaturesOfRepo[_repo_id].push(_signature);

        return newSignatureId;
    }

}
