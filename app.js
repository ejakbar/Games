const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Permainan dimulai
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            introScreen.classList.remove("fadeIn");
            match.classList.remove("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    // Didalam Permainan
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            });
        });

        // Computer
        const computerOptions = ["Rock", "Paper", "Scissors"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                // Pilihan
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                // Animasi
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");
        if (playerChoice === computerChoice) {
            winner.textContent = "Seri!";
            winner.style.color = "gray";
            return;
        }
        // Rock
        if (playerChoice === "Rock") {
            if (computerChoice === "Scissors") {
                winner.textContent = "Kamu Menang!";
                winner.style.color = "green";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Komputer Menang!";
                winner.style.color = "red";
                cScore++;
                updateScore();
                return;
            }
        }
        // Paper
        if (playerChoice === "Paper") {
            if (computerChoice === "Rock") {
                winner.textContent = "Kamu Menang!";
                winner.style.color = "green";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Komputer Menang!";
                winner.style.color = "red";
                cScore++;
                updateScore();
                return;
            }
        }
        // Scissors
        if (playerChoice === "Scissors") {
            if (computerChoice === "Paper") {
                winner.textContent = "Kamu Menang!";
                winner.style.color = "green";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Komputer Menang!";
                winner.style.color = "red";
                cScore++;
                updateScore();
                return;
            }
        }
    };

    startGame();
    playMatch();
};

game();