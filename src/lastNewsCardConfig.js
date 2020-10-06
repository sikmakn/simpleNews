import {addNewsLinkClick} from "./helpers.js";

export default {
    id: "last-news-container",
    configCardNode
}

export function configCardNode(node, {id, title, date}) {
    node.style.display = "block";
    addNewsLinkClick(node, id);
    node.innerHTML = '';
    node.append(createDateSpan(date));
    node.append(title);
}

function createDateSpan(date) {
    const span = document.createElement('span');
    span.innerText = `${date.getHours()}:${date.getMinutes()}`;
    return span;
}

