const mainPage = document.getElementById("main-page");
const addPage = document.getElementById("add-page");

export function switchToAdd() {
    mainPage.style.display = "none";
    addPage.style.display = "flex";
}

export function switchToMain() {
    mainPage.style.display = "flex";
    addPage.style.display = "none";
}