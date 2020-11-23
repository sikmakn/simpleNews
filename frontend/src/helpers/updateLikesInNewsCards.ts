export default function updateLikesInNewsCards(
    {value, id}: { value: boolean, id: string },
    news: any[],
) {
    const newsCopy = news.map((n: any) => ({...n}));
    const oneNews = newsCopy.find((n: any) => n.id === id);
    updateLikeInOneNews({value, oneNews});
    return newsCopy;
}

export function updateLikeInOneNews({value, oneNews}: { value: boolean, oneNews:any }) {
    oneNews.userStatistic.isLiked = value;
    const likesCount = oneNews.statistic.likesCount;
    oneNews.statistic.likesCount = value ? likesCount + 1 : likesCount - 1;
    return oneNews;
}