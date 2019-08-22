pragma solidity ^0.4.4;
import "./Project.sol";

contract FundingHub {

    address public owner;
    uint public numOfProjects;

    mapping (uint => address) public projects;

    event LogProjectCreated(uint id, string title, address addr, address creator);
    event LogContributionSent(address projectAddress, address contributor, uint amount);

    event LogFailure(string message);

    modifier onlyOwner {
        if (owner != msg.sender) throw;
        _;
    }
    
    function FundingHub() {
        owner = msg.sender;
        numOfProjects = 0;
    }

    function createProject(uint _fundingGoal, uint _deadline, string _title) payable returns (Project projectAddress) {

        if (_fundingGoal <= 0) {
            LogFailure("Project funding goal must be greater than 0");
            throw;
        }

        if (block.number >= _deadline) {
            LogFailure("Project deadline must be greater than the current block");
            throw;
        }

        Project p = new Project(_fundingGoal, _deadline, _title, msg.sender);
        projects[numOfProjects] = p;
        LogProjectCreated(numOfProjects, _title, p, msg.sender);
        numOfProjects++;
        return p;
    }

}
