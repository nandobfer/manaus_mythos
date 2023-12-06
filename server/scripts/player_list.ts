import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

prisma.player.findMany().then(response => console.log(response))
