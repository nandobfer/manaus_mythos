import { Player } from "../class/Player";
declare const _default: {
    save: (player: Player) => Promise<{
        id: string;
        name: string;
        actions: number;
        location: string;
    }>;
};
export default _default;
