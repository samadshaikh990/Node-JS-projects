import * as inquirer from 'inquirer';

class GuessNumberGame {
    private secretNumber: number;
    private attempts: number;
    private maxAttempts: number;

    constructor() {
        this.secretNumber = this.generateRandomNumber();
        this.attempts = 0;
        this.maxAttempts = 3; // You can adjust the number of attempts here
    }

    private generateRandomNumber(): number {
        return Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10
    }

    private async getUserGuess(): Promise<number> {
        const answer = await inquirer.prompt({
            type: 'input',
            name: 'guess',
            message: 'Guess the number (between 1 and 10):',
            validate: (value) => {
                const num = parseInt(value, 10);
                return !isNaN(num) && num >= 1 && num <= 10;
            },
        });

        return parseInt(answer.guess, 10);
    }

    private playRound(): boolean {
        const userGuess = this.getUserGuess();
        this.attempts++;

        if (userGuess === this.secretNumber) {
            console.log(`Congratulations! You guessed the number in ${this.attempts} attempts.`);
            return true;
        } else {
            console.log(`Incorrect! Try again.`);
            return false;
        }
    }

    public async startGame(): Promise<void> {
        console.log('Welcome to the Guess the Number Game!');
        console.log('I have selected a number between 1 and 10. Can you guess it?');

        let isGameWon = false;

        while (this.attempts < this.maxAttempts && !isGameWon) {
            isGameWon = await this.playRound();
        }

        if (!isGameWon) {
            console.log(`Sorry, you've reached the maximum number of attempts. The number was ${this.secretNumber}.`);
        }
    }
}

// Create an instance of the game and start playing
const game = new GuessNumberGame();
game.startGame();
