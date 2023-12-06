import { player } from "@prisma/client";
export declare class Player {
    id: string;
    name: string;
    location: string;
    actions: number;
    stats: {
        health: {
            current: number;
            maximum: number;
        };
    };
    constructor(data: PlayerConstructor);
    toDTO: () => player;
    move: () => void;
    static fromDTO: (player: player) => PlayerConstructor;
    static list: () => Player[];
}
