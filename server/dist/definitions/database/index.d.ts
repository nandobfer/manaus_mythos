declare const _default: {
    player: {
        save: (player: import("../class/Player").Player) => Promise<{
            id: string;
            name: string;
            actions: number;
            location: string;
        }>;
    };
};
export default _default;
