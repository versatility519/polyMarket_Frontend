export interface ProfileProps {
    avatar: string,
    address:string,
    eventName: string,
    isBet?: boolean,
    value: number,
    avgPrice: number,
    curPrice: number,
    totalPrice: number,
    rate: number,

    onClick?: () => void
}

export interface ContentProps {
    avatar: string,
    eventName: string,
    isBet?: boolean,
    betPrice?: number,
    value: number,
    onClick: () => void
}
