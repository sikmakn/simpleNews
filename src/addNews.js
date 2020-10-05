import {addNews} from "./backend.js";
import {switchToMain} from "./router.js";
import {activateMainPage} from "./index.js";

const form = document.getElementById("add-news-form");
const fullText = document.getElementById("full-text");

const imageContainer = document.getElementById("image-container");
const file = document.getElementById("file");
file.addEventListener("change", () => {
    imageContainer.style.background =
        `url(${URL.createObjectURL(file.files[0])}) no-repeat center/cover`;
});

const cancel = document.getElementById("cancel-button");
cancel.onclick = event => {
    event.preventDefault();
    form.reset();
    imageContainer.style.background = "";
    fullText.innerText = "";
};

const save = document.getElementById("save");
save.onclick = event => {
    event.preventDefault();
    const newArticle = {
        tag: form.elements.tag.value,
        date: new Date(),
        title: form.elements.title.value,
        text: fullText.innerText,
        img: URL.createObjectURL(file.files[0])
    };
    addNews(newArticle);
    activateMainPage();
    switchToMain();
};