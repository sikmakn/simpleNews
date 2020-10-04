import outCards from "./outCards.js";
import newsMainCardConfig from "./newsMainCardConfig.js";
import {news} from "./backend.js";

const nav = document.getElementById("nav");
nav.onclick = event => {
    const target = event.target;
    activateTagCss();
    const tag = target.id;
    //здесь должен быть запрос на сервер
    const tagNews = tag === "news" ? news : news.filter(n => n.tag === tag);
    outCards(tagNews, newsMainCardConfig);

    function activateTagCss() {
        for (let div of nav.children)
            div.className = "";
        target.className = "active-tag";
    }
};

const searchButton = document.getElementById("search");
const searchInput = document.getElementById("search-input-container");

searchButton.onclick = () => {
    searchInput.style.display = searchInput.style.display === "none" ? "block" : "none";
};

searchInput.addEventListener("keyup", event => {
    if (event.key !== "Enter") return;
    const searchText = event.target.value;
    const resultNews = news.filter(n => ~n.title.indexOf(searchText));
    outCards(resultNews, newsMainCardConfig);
});