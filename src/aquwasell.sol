// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

interface IERC721 {
function mint(address _owner) external;
}

library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     * - Addition cannot overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");
        return c;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return sub(a, b, "SafeMath: subtraction overflow");
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     * - Subtraction cannot overflow.
     */
    function sub(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        uint256 c = a - b;

        return c;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `*` operator.
     *
     * Requirements:
     * - Multiplication cannot overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return div(a, b, "SafeMath: division by zero");
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts with custom message on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     */
    function div(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        // Solidity only automatically asserts when dividing by 0
        require(b > 0, errorMessage);
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return mod(a, b, "SafeMath: modulo by zero");
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts with custom message when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     */
    function mod(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        require(b != 0, errorMessage);
        return a % b;
    }

    function SafeDecimals(uint256 a,uint256 b,uint256 fee)internal pure returns (uint256){
        uint256 decimal = ((uint(a*b) / uint(100)) * uint(fee));
        if(decimal<=0){
            decimal = decimal*10;
        }
        return decimal;
    }

}


contract AQUWASELL is ReentrancyGuard,Ownable {
    using SafeMath for uint256;
    uint256 price=7000000;
    uint256 phase=1;
    bool _lock;
    address WalletJosmey;
    address WalletCriptovision;
    IERC721 public AQUWANFT;
    mapping(address=>bool) private WhiteList;
    mapping(address=>bool) private TokensAccept;
    mapping(address=>bool) private referer;
    mapping(uint256=>Phases) private PhasesList;
    event BuyVsion(address buyer,uint256 _amount);
    event AirdopReferal(address refer,uint256 _amount);
    bool ActiveWhiteList;
    
    struct Phases{
        uint256 nfts;
        uint256 amount;
        uint256 house;
    }


    constructor(address _nft,address _josmey,address _criptovision){
        AQUWANFT=IERC721(_nft);
        WalletJosmey=_josmey;
        WalletCriptovision=_criptovision;
    }


    modifier ContractLock() {
        require(!_lock, "Venta Pausada");
        _;
    }

    //Locks the contract for owner for the amount of time provided
    function lock() external onlyOwner {
        _lock = true;
    }

    //Unlocks the contract for owner when _lockTime is exceeds
    function unlock() external onlyOwner {
        _lock = false;
    }

    function ChangeActivateWhiteList() public onlyOwner{
        ActiveWhiteList=!ActiveWhiteList;
    }

    function ChangePrice(uint256 _amount) public onlyOwner{
        price=_amount;
    }

    function AddPhase(uint256 _phase,uint256 _nfts,uint256 _amount,uint256 _house) public onlyOwner{
        PhasesList[_phase]=Phases(_nfts,_amount,_house);
    }

    function ChangePhase(uint256 _number) public onlyOwner{
        phase=_number;
    }

    function AddWhiteList(address _address) public onlyOwner{
        WhiteList[_address]=true;
    }

    function AddTokenAccept(address _address) public onlyOwner{
        TokensAccept[_address]=true;
    }

    /*function ChangeWalletLiquidity(address _address) public onlyOwner{
        WalletLiquidity=_address;
    }*/

    function Buyntf(address _token)public nonReentrant ContractLock{
        uint256 _amount=PhasesList[phase].amount;
        require(TokensAccept[_token],"Invalid Token");
        if(ActiveWhiteList){
            require(WhiteList[msg.sender],"You  are not in WhiteList");
        }
        require(IERC20(_token).balanceOf(msg.sender)>=_amount,"Balance To Low");
        uint256 A = _amount - (_amount * 5 / 100);
        uint256 B = _amount * 5 / 100;
        require(IERC20(_token).transferFrom(msg.sender,WalletJosmey,A),"Error in Transfer");
        require(IERC20(_token).transferFrom(msg.sender,WalletCriptovision,B),"Error in Transfer");
        AQUWANFT.mint(msg.sender);
        //emit BuyVsion(msg.sender,finalAmount);
    }  

}
