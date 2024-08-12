export interface RankItemProps {
    avatar: string,
    onClick: () => void,
    price: number,
    rank: number,
    username: string,
}

export interface ActivityItemProps {
    avatar: string,
    toAvatar: string,
    isBet: boolean,
    isSold:boolean,
    eventName: string,
    onClick: () => void,
    price: number,
    time: number,
    username: string,
}