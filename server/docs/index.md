[migrations]: #Migrations
[migrations-restricted--]: #Migrations-restricted--
[migrations-owner-address]: #Migrations-owner-address
[migrations-last_completed_migration-uint256]: #Migrations-last_completed_migration-uint256
[migrations-setcompleted-uint256-]: #Migrations-setCompleted-uint256-
[migrations-upgrade-address-]: #Migrations-upgrade-address-
[signature]: #Signature
[signature-newcontractaddress-address]: #Signature-newContractAddress-address
[signature-setnewaddress-address-]: #Signature-setNewAddress-address-
[signature-getsignaturesofuser-uint32-]: #Signature-getSignaturesOfUser-uint32-
[signature-getsignaturesofrepo-uint32-]: #Signature-getSignaturesOfRepo-uint32-
[signature-getsignature-uint256-]: #Signature-getSignature-uint256-
[signature-createsignature-string-uint32-uint32-uint32-uint32-uint64-uint64-]: #Signature-createSignature-string-uint32-uint32-uint32-uint32-uint64-uint64-
[signatureaccesscontrol]: #SignatureAccessControl
[signatureaccesscontrol-restricted--]: #SignatureAccessControl-restricted--
[signatureaccesscontrol-whennotpaused--]: #SignatureAccessControl-whenNotPaused--
[signatureaccesscontrol-whenpaused--]: #SignatureAccessControl-whenPaused--
[signatureaccesscontrol-ceoaddress-address]: #SignatureAccessControl-ceoAddress-address
[signatureaccesscontrol-paused-bool]: #SignatureAccessControl-paused-bool
[signatureaccesscontrol-setceo-address-]: #SignatureAccessControl-setCEO-address-
[signatureaccesscontrol-pause--]: #SignatureAccessControl-pause--
[signatureaccesscontrol-unpause--]: #SignatureAccessControl-unpause--
[signatureaccesscontrol-contractupgrade-address-]: #SignatureAccessControl-ContractUpgrade-address-
[signaturebase]: #SignatureBase
[signaturebase-signatures-struct-signaturebase-signature--]: #SignatureBase-signatures-struct-SignatureBase-Signature--
[signaturebase-_signaturesofuser-mapping-uint32----struct-signaturebase-signature---]: #SignatureBase-_signaturesOfUser-mapping-uint32----struct-SignatureBase-Signature---
[signaturebase-_signaturesofrepo-mapping-uint32----struct-signaturebase-signature---]: #SignatureBase-_signaturesOfRepo-mapping-uint32----struct-SignatureBase-Signature---
[signaturebase-_createsignature-string-uint32-uint32-uint32-uint32-uint64-uint64-]: #SignatureBase-_createSignature-string-uint32-uint32-uint32-uint32-uint64-uint64-
[signaturebase-signed-string-uint32-uint256-]: #SignatureBase-Signed-string-uint32-uint256-

## <span id="Migrations"></span> `Migrations`

- [`restricted()`][migrations-restricted--]
- [`setCompleted(uint256 completed)`][migrations-setcompleted-uint256-]
- [`upgrade(address new_address)`][migrations-upgrade-address-]

### <span id="Migrations-restricted--"></span> `restricted()`

### <span id="Migrations-setCompleted-uint256-"></span> `setCompleted(uint256 completed)` (public)

### <span id="Migrations-upgrade-address-"></span> `upgrade(address new_address)` (public)

## <span id="Signature"></span> `Signature`

- [`restricted()`][signatureaccesscontrol-restricted--]
- [`whenNotPaused()`][signatureaccesscontrol-whennotpaused--]
- [`whenPaused()`][signatureaccesscontrol-whenpaused--]
- [`setNewAddress(address _v2Address)`][signature-setnewaddress-address-]
- [`getSignaturesOfUser(uint32 _user_id)`][signature-getsignaturesofuser-uint32-]
- [`getSignaturesOfRepo(uint32 _repo_id)`][signature-getsignaturesofrepo-uint32-]
- [`getSignature(uint256 _id)`][signature-getsignature-uint256-]
- [`createSignature(string _username, uint32 _user_id, uint32 _comment_id, uint32 _repo_id, uint32 _pull_request_no, uint64 _created_at, uint64 _updated_at)`][signature-createsignature-string-uint32-uint32-uint32-uint32-uint64-uint64-]
- [`_createSignature(string _username, uint32 _user_id, uint32 _comment_id, uint32 _repo_id, uint32 _pull_request_no, uint64 _created_at, uint64 _updated_at)`][signaturebase-_createsignature-string-uint32-uint32-uint32-uint32-uint64-uint64-]
- [`setCEO(address _newCEO)`][signatureaccesscontrol-setceo-address-]
- [`pause()`][signatureaccesscontrol-pause--]
- [`unpause()`][signatureaccesscontrol-unpause--]
- [`Signed(string username, uint32 user_id, uint256 signatureId)`][signaturebase-signed-string-uint32-uint256-]
- [`ContractUpgrade(address newContract)`][signatureaccesscontrol-contractupgrade-address-]

### <span id="Signature-setNewAddress-address-"></span> `setNewAddress(address _v2Address)` (external)

Used to mark the smart contract as upgraded, in case there is a serious
breaking bug. This method does nothing but keep track of the new contract and
emit a message indicating that the new address is set. It's up to clients of this
contract to update to the new contract address in that case. (This contract will
be paused indefinitely if such an upgrade takes place.)

### <span id="Signature-getSignaturesOfUser-uint32-"></span> `getSignaturesOfUser(uint32 _user_id) → struct SignatureBase.Signature[] signatures` (external)

Returns all the signature based on a user_id.

### <span id="Signature-getSignaturesOfRepo-uint32-"></span> `getSignaturesOfRepo(uint32 _repo_id) → struct SignatureBase.Signature[] signatures` (external)

Returns all the signature based on a repo_id.

### <span id="Signature-getSignature-uint256-"></span> `getSignature(uint256 _id) → struct SignatureBase.Signature signature` (external)

Returns all the relevant information about a specific signature.

### <span id="Signature-createSignature-string-uint32-uint32-uint32-uint32-uint64-uint64-"></span> `createSignature(string _username, uint32 _user_id, uint32 _comment_id, uint32 _repo_id, uint32 _pull_request_no, uint64 _created_at, uint64 _updated_at) → uint256` (public)

## <span id="SignatureAccessControl"></span> `SignatureAccessControl`

All smart contract are heavily based and copied from the CryptoKitties project

See the SignatureCore contract documentation to understand how the various contract facets are arranged.

- [`restricted()`][signatureaccesscontrol-restricted--]
- [`whenNotPaused()`][signatureaccesscontrol-whennotpaused--]
- [`whenPaused()`][signatureaccesscontrol-whenpaused--]
- [`setCEO(address _newCEO)`][signatureaccesscontrol-setceo-address-]
- [`pause()`][signatureaccesscontrol-pause--]
- [`unpause()`][signatureaccesscontrol-unpause--]
- [`ContractUpgrade(address newContract)`][signatureaccesscontrol-contractupgrade-address-]

### <span id="SignatureAccessControl-restricted--"></span> `restricted()`

Access modifier for CEO-only functionality

### <span id="SignatureAccessControl-whenNotPaused--"></span> `whenNotPaused()`

Modifier to allow actions only when the contract IS NOT paused

### <span id="SignatureAccessControl-whenPaused--"></span> `whenPaused()`

Modifier to allow actions only when the contract IS paused

### <span id="SignatureAccessControl-setCEO-address-"></span> `setCEO(address _newCEO)` (external)

Assigns a new address to act as the CEO. Only available to the current CEO.

### <span id="SignatureAccessControl-pause--"></span> `pause()` (external)

Called by the CEO to pause the contract. Used only when
a bug or exploit is detected and we need to limit damage.

### <span id="SignatureAccessControl-unpause--"></span> `unpause()` (public)

This is public rather than external so it can be called by
derived contracts.

Unpauses the smart contract. Can only be called by the CEO.

### <span id="SignatureAccessControl-ContractUpgrade-address-"></span> `ContractUpgrade(address newContract)`

Emited when contract is upgraded - See README.md for updgrade plan

## <span id="SignatureBase"></span> `SignatureBase`

- [`restricted()`][signatureaccesscontrol-restricted--]
- [`whenNotPaused()`][signatureaccesscontrol-whennotpaused--]
- [`whenPaused()`][signatureaccesscontrol-whenpaused--]
- [`_createSignature(string _username, uint32 _user_id, uint32 _comment_id, uint32 _repo_id, uint32 _pull_request_no, uint64 _created_at, uint64 _updated_at)`][signaturebase-_createsignature-string-uint32-uint32-uint32-uint32-uint64-uint64-]
- [`setCEO(address _newCEO)`][signatureaccesscontrol-setceo-address-]
- [`pause()`][signatureaccesscontrol-pause--]
- [`unpause()`][signatureaccesscontrol-unpause--]
- [`Signed(string username, uint32 user_id, uint256 signatureId)`][signaturebase-signed-string-uint32-uint256-]
- [`ContractUpgrade(address newContract)`][signatureaccesscontrol-contractupgrade-address-]

### <span id="SignatureBase-_createSignature-string-uint32-uint32-uint32-uint32-uint64-uint64-"></span> `_createSignature(string _username, uint32 _user_id, uint32 _comment_id, uint32 _repo_id, uint32 _pull_request_no, uint64 _created_at, uint64 _updated_at) → uint256` (internal)

An internal method that creates a new signature and stores it. This
method doesn't do any checking and should only be called when the
input data is known to be valid.

### <span id="SignatureBase-Signed-string-uint32-uint256-"></span> `Signed(string username, uint32 user_id, uint256 signatureId)`
