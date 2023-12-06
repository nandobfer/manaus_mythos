import {uid} from 'uid'
import { Player } from '../class/Player'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const newPlayer = async (player:Player) => await prisma.player.create({data: player.toDTO()})

const id = uid()
const name = 'joao'

const player = new Player(Player.fromDTO({id, name, actions: 39, location: 'Acre'}))
console.log(player)

newPlayer(player).then(new_player => console.log(new_player))
