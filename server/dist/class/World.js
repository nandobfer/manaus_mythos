"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.World = void 0;
class World {
    constructor() {
        this.players = [];
        this.addPlayer = (player) => this.players.push(player);
    }
}
exports.World = World;
