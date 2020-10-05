import newsMainCardConfig from "./newsMainCardConfig.js";
import trendsNewsCardConfig from "./trendsNewsCardConfig.js";
import outCards from "./outCards.js";
import lastNewsCardConfig from "./lastNewsCardConfig.js";
import {news} from "./backend.js";

export function activateMainPage() {
    outCards(news, newsMainCardConfig);
    const sortedByRateNews = [...news].sort(
        (n1, n2) => n2.likesCount - n1.likesCount);
    outCards(sortedByRateNews, trendsNewsCardConfig);
    const sortedByDate = [...news].sort(
        (n1, n2) => n2.date - n1.date);
    outCards(sortedByDate, lastNewsCardConfig);
}

activateMainPage();