import {addImage, addStatistic, addTag} from "./helpers.js";

export default {
    id: "trends-container",
    configCardNode,
};

function configCardNode(node, oneNews) {
    const {id, tag, title, commentsCount, likesCount, img} = oneNews;
    node.style.display = "block";
    node.id = id;
    addImage(node.children[0], img);
    addTag(node.children[1], tag);
    addText(node.children[2], title);
    addStatistic(node.children[3], likesCount, commentsCount);
}

function addText(node, title) {
    node.children[0].innerText = title;
}