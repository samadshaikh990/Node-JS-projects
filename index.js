"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = require("inquirer");
var GuessNumberGame = /** @class */ (function () {
    function GuessNumberGame() {
        this.secretNumber = this.generateRandomNumber();
        this.attempts = 0;
        this.maxAttempts = 3; // You can adjust the number of attempts here
    }
    GuessNumberGame.prototype.generateRandomNumber = function () {
        return Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10
    };
    GuessNumberGame.prototype.getUserGuess = function () {
        return __awaiter(this, void 0, void 0, function () {
            var answer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, inquirer.prompt({
                            type: 'input',
                            name: 'guess',
                            message: 'Guess the number (between 1 and 10):',
                            validate: function (value) {
                                var num = parseInt(value, 10);
                                return !isNaN(num) && num >= 1 && num <= 10;
                            },
                        })];
                    case 1:
                        answer = _a.sent();
                        return [2 /*return*/, parseInt(answer.guess, 10)];
                }
            });
        });
    };
    GuessNumberGame.prototype.playRound = function () {
        var userGuess = this.getUserGuess();
        this.attempts++;
        if (userGuess === this.secretNumber) {
            console.log("Congratulations! You guessed the number in ".concat(this.attempts, " attempts."));
            return true;
        }
        else {
            console.log("Incorrect! Try again.");
            return false;
        }
    };
    GuessNumberGame.prototype.startGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isGameWon;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Welcome to the Guess the Number Game!');
                        console.log('I have selected a number between 1 and 10. Can you guess it?');
                        isGameWon = false;
                        _a.label = 1;
                    case 1:
                        if (!(this.attempts < this.maxAttempts && !isGameWon)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.playRound()];
                    case 2:
                        isGameWon = _a.sent();
                        return [3 /*break*/, 1];
                    case 3:
                        if (!isGameWon) {
                            console.log("Sorry, you've reached the maximum number of attempts. The number was ".concat(this.secretNumber, "."));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return GuessNumberGame;
}());
// Create an instance of the game and start playing
var game = new GuessNumberGame();
game.startGame();
