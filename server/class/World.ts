import { Player } from "./Player";

export class World {
    players:Player[] = []

    addPlayer = (player:Player) => this.players.push(player)
}