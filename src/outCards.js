export default function (news, {id, configCardNode}) {
    const newsContainer = document.getElementById(id);
    const bigNewsCart = newsContainer.children[0];
    cleanOldNews(newsContainer, bigNewsCart);
    for (let oneNews of news) {
        const copy = bigNewsCart.cloneNode(true);
        configCardNode(copy, oneNews);
        newsContainer.appendChild(copy);
    }
}

function cleanOldNews(newsContainer, newsCart) {
    newsContainer.innerHTML = '';
    newsContainer.appendChild(newsCart);
}