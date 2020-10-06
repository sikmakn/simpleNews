const mainPage = document.getElementById("main-page");
const addPage = document.getElementById("add-page");
const newsPage = document.getElementById("news-page");

export function switchToAdd() {
    newsPage.style.display = "none";
    mainPage.style.display = "none";
    addPage.style.display = "flex";
}

export function switchToMain() {
    newsPage.style.display = "none";
    mainPage.style.display = "flex";
    addPage.style.display = "none";
}

export function switchToNews() {
    newsPage.style.display = "flex";
    mainPage.style.display = "none";
    addPage.style.display = "none";
}