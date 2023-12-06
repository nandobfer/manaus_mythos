"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const save = async (player) => {
    const saved = prisma.player.update({ where: { id: player.id }, data: player.toDTO() });
    return saved;
};
exports.default = { save };
