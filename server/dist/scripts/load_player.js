"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const Player_1 = require("../class/Player");
const prisma = new client_1.PrismaClient();
prisma.player.findFirst({ where: { name: 'fernando' } }).then(response => {
    if (!response)
        return;
    const constructor = Player_1.Player.fromDTO(response);
    const player = new Player_1.Player(constructor);
    player.move();
    console.log(player);
});
