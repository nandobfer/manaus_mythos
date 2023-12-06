"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uid_1 = require("uid");
const Player_1 = require("../class/Player");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const newPlayer = async (player) => await prisma.player.create({ data: player.toDTO() });
const id = (0, uid_1.uid)();
const name = 'joao';
const player = new Player_1.Player(Player_1.Player.fromDTO({ id, name, actions: 39, location: 'Acre' }));
console.log(player);
newPlayer(player).then(new_player => console.log(new_player));