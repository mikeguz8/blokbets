pragma solidity ^0.8.7;
contract BlokBets{
    address public owner;
    uint256 public betId;
    uint256 public totalBalance;
    uint256 profitPercentage;
    struct Bet{
        uint256 bet_id;
        string teamA;
        string teamB;
        uint256 closingTime;
        uint256 endingTime;
        uint256 winnerTeam;
        uint256 minBet;
        uint256 betValue;
    }
    struct BetPlay{
        uint256 bet_id;
         string teamA;
        string teamB;
        uint256 closingTime;
        uint256 endingTime;
        uint user_selected;
        bool status;
        address player;
        uint256 playValue;
    }
    mapping(uint256=>Bet) public Bets;
    mapping(uint256=>BetPlay[]) BetPlays; 
    mapping(address=>BetPlay[]) BetPlayers;
    mapping(address=>uint256) balance;
    constructor(){
        owner = msg.sender;
    }
    function showBalance(address player) public view returns(uint256){
        return balance[player];
    }
    function StartBet(string memory teamA, string memory teamB,uint256 endingTime,uint256 closingTime,uint256 minBet) public{
        require(owner == msg.sender,"only owner");
        Bets[betId] = Bet({
        bet_id:betId,
        teamA:teamA,
        teamB:teamB,
        winnerTeam:0,
        closingTime:closingTime,
        endingTime:endingTime,
        betValue:0,
        minBet:minBet
        });
        betId++;
    }

    function showAllBets() public view returns(Bet[] memory){
        uint256 index = 0;
        for(uint256 i = 0; i < betId;i++){
            index++;
        }
        Bet[] memory bet_s = new Bet[](index);
        uint256 count = 0;
        for(uint256 i = 0; i < betId;i++){
            if(Bets[i].closingTime > block.timestamp){
                bet_s[count] = Bets[i];
                count++;
            }
        }
               
        return bet_s;
    }
    function placeBet(uint256 bet_id, uint u_sel) public payable{
        require(Bets[bet_id].closingTime > block.timestamp,"bet time ended");
        require(Bets[bet_id].minBet < msg.value,"not less than min");
        BetPlay memory bet = BetPlay({
            bet_id:bet_id,
            teamA:Bets[bet_id].teamA,
            teamB:Bets[bet_id].teamB,
            closingTime:Bets[bet_id].closingTime,
            endingTime:Bets[bet_id].endingTime,
            user_selected:u_sel,
            player:msg.sender,
            status:false,
            playValue:msg.value
        });
        uint256 takePercentage = msg.value*(profitPercentage/100);
        balance[owner] = takePercentage;
        Bets[bet_id].betValue += (msg.value - takePercentage);
        totalBalance += msg.value;
        BetPlays[bet_id].push(bet);
        BetPlayers[msg.sender].push(bet);
    }


    function withdrawUser(uint256 value) public{
        require(balance[msg.sender] >= value,"insufficent balance");
        totalBalance -= value;
        balance[msg.sender] -= value;
        payable(msg.sender).transfer(value);
    }


    function setProfitPercentage(uint256 percentage) public {
        require(owner == msg.sender,"only owner");
        profitPercentage = percentage;
    }

    function showUsersBet() public view returns(BetPlay[] memory){
        return BetPlayers[msg.sender];
    }

    function setTeamWinner(uint256 bet_id,uint value) public{
        require(owner == msg.sender,"only owner");
        Bets[bet_id].winnerTeam = value;
        distributeWinMoney(bet_id);
    }
    function distributeWinMoney(uint256 bet_id) private{
        require(owner == msg.sender,"only owner");
        uint256 totalValue = Bets[bet_id].betValue;
        uint256 winnerCollective;
        uint256 count = 0;
        for(uint256 i = 0; i < BetPlays[bet_id].length; i++){
            if(BetPlays[bet_id][i].user_selected == Bets[bet_id].winnerTeam){
                count++;
            }
        }
        uint256[] memory index = new uint256[](count+1);
        uint256 counter = 0;
        for(uint256 i = 0; i < BetPlays[bet_id].length; i++){
            if(BetPlays[bet_id][i].user_selected == Bets[bet_id].winnerTeam){
                index[counter] = i;
                counter++;
                 winnerCollective += BetPlays[bet_id][i].playValue;
            }
        }
        uint256 winAmount;
        for(uint256 i = 0; i < counter; i++){
            uint percentage = calculatePercentage(BetPlays[bet_id][index[i]].playValue,winnerCollective);
            winAmount = Bets[bet_id].betValue * (percentage / 100);
            BetPlays[bet_id][index[i]].status = true;
            address player = BetPlays[bet_id][index[i]].player;
            BetPlayers[player][index[i]].status = true;
            balance[player] += winAmount;
        }
    }
    function calculatePercentage(uint256 userVal, uint256 totalVal) private view returns(uint256){
        uint256 percentage = (userVal*100)/totalVal;
        return percentage;
    }
    function showActiveBets() public view returns(Bet[] memory){
        uint256 index = 0;
        for(uint256 i = 0; i < betId;i++){
            if(Bets[i].closingTime > block.timestamp){
                index++;
            }
        }
        Bet[] memory bet_s = new Bet[](index);
        uint256 count = 0;
        for(uint256 i = 0; i < betId;i++){
            if(Bets[i].closingTime > block.timestamp){
                bet_s[count] = Bets[i];
                count++;
            }
        }
               
        return bet_s;
    }
    function widthdrawal() public{
        require(owner == msg.sender,"only owner");
        require(totalBalance > 0,"insufficent balance");
        require(balance[owner] > 0, "insufficent balance");
        totalBalance = 0;
        payable(owner).transfer(totalBalance);
    }

}