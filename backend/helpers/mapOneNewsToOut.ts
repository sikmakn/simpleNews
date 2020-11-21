export default function mapOneNewsToOut(
    {
        id, title, text, imgSrc, date, tag, authorId,
        commentsCount, subCommentsCount,
        userCommentsCount, userSubCommentsCount,
        likesCount, userLikesCount,
    }: any) {
    return {
        id, title, text, imgSrc, date, tag, authorId,
        statistic: {
            commentsCount: commentsCount + subCommentsCount,
            likesCount
        },
        userStatistic: {
            isLiked: !!userLikesCount,
            isCommented: !!userCommentsCount && !!userSubCommentsCount,
        },
    };
}