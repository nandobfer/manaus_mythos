"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const database_1 = __importDefault(require("../database"));
const players = [];
class Player {
    constructor(data) {
        this.stats = {
            health: {
                current: 0,
                maximum: 0
            }
        };
        this.toDTO = () => {
            return {
                id: this.id,
                name: this.name,
                actions: this.actions,
                location: this.location
            };
        };
        this.move = () => {
            this.actions -= 1;
            database_1.default.player.save(this);
        };
        this.id = data.id;
        this.name = data.name;
        this.actions = data.actions;
        this.location = data.location;
        players.push(this);
    }
}
exports.Player = Player;
Player.fromDTO = (player) => {
    return {
        id: player.id,
        name: player.name,
        actions: player.actions,
        location: player.location,
    };
};
Player.list = () => players;
