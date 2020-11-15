export default function updateLikesInNewsCards(
    {value, id}: { value: boolean, id: string },
    news: any[],
) {
    const newsCopy = news.map((n: any) => ({...n}));
    const oneNewsById = newsCopy.find((n: any) => n.id === id);
    oneNewsById.userStatistic.isLiked = value;
    const likesCount = oneNewsById.statistic.likesCount;
    oneNewsById.statistic.likesCount = value ? likesCount + 1 : likesCount - 1;
    return newsCopy;
}