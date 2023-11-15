export type User = {
    id: number,
    name: string,
    nickname:string,
    picture:string,
};

export type Game = {
    url_thumb: string,
    title: string,
    description: string
    url_game: string,
};

export type Player = {
    user_id: number,
    score: number,
}

export type Match = {
    game_id: number,
    players: Array<Player>
}