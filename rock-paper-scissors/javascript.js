        
        

        function getHumanChoice() {
        var humanvar = prompt("Rock, paper, scissors?");
    
        
        var normalizedChoice = humanvar.toLowerCase();
    
            if (normalizedChoice === "rock") {
            return "rock";
            } else if (normalizedChoice === "paper") {
            return "paper";
            } else if (normalizedChoice === "scissors") {
            return "scissors";
            } else {
            return "Type again";
            }
        }
        console.log(getHumanChoice()); // Shows my choice

        function getComputerChoice() {
            var choices = ["rock", "paper", "scissors"]; //gave options//

            var chosen = Math.floor(Math.random() * 3);
    
            return choices[chosen];
        }
        
        console.log(getComputerChoice()); // Shows computer choice

        

        function playRound(getHumanChoice, getComputerChoice) {
        
            if (getHumanChoice === getComputerChoice) {
                alert("That's a draw");
                console.log("Draw!");
            } else if (
            (getHumanChoice === "paper" && getComputerChoice === "rock") ||
            (getHumanChoice === "scissors" && getComputerChoice === "paper") ||
            (getHumanChoice === "rock" && getComputerChoice === "scissors")
            ) {
                alert("Human won! :)");
                console.log("W");
                return "human";
                
            } else {
                alert("Computer won :(");
                console.log("L");
                return "computer";
            }
        }
        
        function playGame() {
            let humanScore = 0;
            let computerScore = 0;
        
            while (humanScore < 5 && computerScore < 5) {
                var humanChoice = getHumanChoice();
                var computerChoice = getComputerChoice();
                var result = playRound(humanChoice, computerChoice);
        
                if (result === "human") {
                    humanScore++;
                } else if (result === "computer") {
                    computerScore++;
                }
        
                console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
            }
        
            if (humanScore === 5) {
                alert("Congratulations! You won the game!");
            } else {
                alert("The computer won the game. Better luck next time!");
            }
        }

        playGame();
