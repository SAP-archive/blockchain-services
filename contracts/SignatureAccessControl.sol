pragma solidity ^0.5.0;
/// @title A facet of Signatures that manages special access privileges.
/// @author Fabian Riewe
/// @dev See the SignatureCore contract documentation to understand how the various contract facets are arranged.
/// @notice All smart contract are heavily based and copied from the CryptoKitties project

contract SignatureAccessControl {
    // This facet controls access control for Signatures.
    //
    //     - The CEO: The CEO can change the addresses of our dependent smart
    //         contracts. It is also the only role that can unpause the smart contract. It is initially
    //         set to the address that created the smart contract in the SignatureCore constructor.
    //

    /// @dev Emited when contract is upgraded - See README.md for updgrade plan
    event ContractUpgrade(address newContract);

    // The addresses of the accounts (or contracts) that can execute actions within each roles.
    address public ceoAddress;

    /// @dev Keeps track whether the contract is paused. When that is true, most actions are blocked
    bool public paused = false;

    /// @dev Access modifier for CEO-only functionality
    modifier restricted() {
        require(msg.sender == ceoAddress);
        _;
    }

    /// @dev Assigns a new address to act as the CEO. Only available to the current CEO.
    /// @param _newCEO The address of the new CEO
    function setCEO(address _newCEO) external restricted {
        require(_newCEO != address(0));

        ceoAddress = _newCEO;
    }

    /*** Pausable functionality adapted from OpenZeppelin ***/

    /// @dev Modifier to allow actions only when the contract IS NOT paused
    modifier whenNotPaused() {
        require(!paused);
        _;
    }

    /// @dev Modifier to allow actions only when the contract IS paused
    modifier whenPaused {
        require(paused);
        _;
    }

    /// @dev Called by the CEO to pause the contract. Used only when
    ///  a bug or exploit is detected and we need to limit damage.
    function pause() external restricted whenNotPaused {
        paused = true;
    }

    /// @dev Unpauses the smart contract. Can only be called by the CEO.
    /// @notice This is public rather than external so it can be called by
    ///  derived contracts.
    function unpause() public restricted whenPaused {
        // can't unpause if contract was upgraded
        paused = false;
    }
}