export interface OneNewsBasic{
    id: string
    title: string
    text: string
    date: Date
    tag: string
    imgSrc: string
    authorUsername: string
}

export interface OneNewsFull extends OneNewsBasic{
    statistic: {
        likesCount: number
        commentsCount: number
    }
    userStatistic?: {
        isLiked?: boolean,
        isCommented?: boolean
    }
}