import { TrendingUp, Droplet, ChartNoAxesColumn, Plus, Hourglass, Check, Swords, Rss, ThumbsUp, UserRound } from 'lucide-react';
import React from 'react';

export const categoryItem = [
    {
        text: "Trading",
        value: "trading",
        icon: TrendingUp
    },
    {
        text: "Liquidity",
        value: "liquidity",
        icon: Droplet
    },
    {
        text: "Volume",
        value: "volume",
        icon: ChartNoAxesColumn
    },
    {
        text: "Newest",
        value: "newest",
        icon: Plus
    },
    {
        text: "Ending Soon",
        value: "endingSoon",
        icon: Hourglass
    },
    {
        text: "Ended Recently",
        value: "endedRecently",
        icon: Check
    },
    {
        text: "Competitive",
        value: "competitive",
        icon: Swords
    },
]
interface Option {
    value: string;
    text: string;
    icon: React.ElementType;
}
export const sortItem: Option[] = [
    {
        text: "Newest",
        value: "newest",
        icon: Rss
    },
    {
        text: "Likes",
        value: "likes",
        icon: ThumbsUp
    },
    {
        text: "Holders",
        value: "holders",
        icon: UserRound
    },
]