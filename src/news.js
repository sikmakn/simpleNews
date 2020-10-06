import outCards from "./outCards.js";
import {fullNews, news} from "./backend.js";
import {configCardNode} from "./lastNewsCardConfig.js";
import {addStatistic, addTag} from "./helpers.js";
import {DATE_OPTION} from "./options.js";
import {switchToNews} from "./router.js";

const newsPage = document.getElementById("news-page");

export default function outNews(newsId) {
    newsPage.id = newsId;
    const sortedByDate = [...news].sort(
        (n1, n2) => n2.date - n1.date);
    outCards(sortedByDate, {configCardNode, id: "last-news-container-newspage"});
    const oneNews = fullNews.find(n => n.id === newsId);
    addStatistic(newsPage.children[0], oneNews.likesCount, oneNews.commentsCount);
    outOneNews(newsPage.children[1], oneNews);
    switchToNews();
}

function outOneNews(newsContainer, {tag, title, date, img, text}) {
    const infoContainer = newsContainer.children[0];
    addTag(infoContainer.children[0], tag);
    infoContainer.children[1].innerText = date.toLocaleString("ru", DATE_OPTION);
    newsContainer.children[1].innerText = title;
    newsContainer.children[2].src = img;
    newsContainer.children[3].innerText = text;
}