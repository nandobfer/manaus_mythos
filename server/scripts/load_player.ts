import { PrismaClient } from "@prisma/client";
import { Player } from "../class/Player";

const prisma = new PrismaClient()

prisma.player.findFirst({ where: { name: 'fernando' } }).then(response => {
    if (!response) return 
    const constructor = Player.fromDTO(response)
    const player = new Player(constructor)
    player.move()
    console.log(player)
} )