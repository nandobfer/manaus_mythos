import { player } from "@prisma/client"
import database from "../database"

const players: Player[] = []

export class Player {
    id: string
    name: string
    location: string
    actions: number

    stats = {
        health: {
            current: 0,
            maximum: 0
        }
    }

    constructor(data: PlayerConstructor) {
        this.id = data.id
        this.name = data.name
        this.actions = data.actions
        this.location = data.location

        players.push(this)
    }

    toDTO:() => player = () => {
        return {
            id: this.id,
            name: this.name,
            actions: this.actions,
            location: this.location
        }
    }

    move = () => {
        this.actions -= 1
        database.player.save(this)
    }

    static fromDTO: (player: player) => PlayerConstructor = (player) => {
        return {
            id: player.id,
            name: player.name,
            actions: player.actions,
            location: player.location,
        }
    }

    static list = () => players
}