pragma solidity ^0.4.4;

contract Project {

    struct Properties {
        uint goal;
        uint deadline;
        string title;
        address creator;
    }

    struct Contribution {
        uint amount;
        address contributor;
    }

    address public fundingHub;

    mapping (address => uint) public contributors;
    mapping (uint => Contribution) public contributions;

    uint public totalFunding;
    uint public contributionsCount;
    uint public contributorsCount;

    Properties public properties;

    function fund(address _contributor) payable returns (bool successful) {


        if (block.number > properties.deadline) {
            LogFundingFailed(address(this), totalFunding, contributionsCount);
            if (!_contributor.send(msg.value)) {
                LogFailure("Project deadline has passed, problem returning contribution");
                throw;
            } 
            return false;
        }

        if (totalFunding >= properties.goal) {
            LogFundingGoalReached(address(this), totalFunding, contributionsCount);
            if (!_contributor.send(msg.value)) {
                LogFailure("Project deadline has passed, problem returning contribution");
                throw;
            }
            payout();
            return false;
        }

        if (totalFunding >= properties.goal) {
            LogFundingGoalReached(address(this), totalFunding, contributionsCount);
            payout();
        }

        return true;
    }

}
