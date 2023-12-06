import { PrismaClient } from "@prisma/client";
import { Player } from "../class/Player";

const prisma = new PrismaClient()

const save = async (player: Player) => {
    const saved = prisma.player.update({where: {id: player.id}, data: player.toDTO()})
    return saved
}

export default {save}