import {TAG_COLORS, TAG_NAMES} from "./options.js";

export function makeFriendlyNumber(num) {
    if (num >= 1000000)
        return intlFormat(num / 1000000) + ' млн';
    if (num >= 1000)
        return intlFormat(num / 1000) + ' тыс';
    return intlFormat(num);

    function intlFormat(num) {
        return new Intl.NumberFormat().format(Math.round(num * 10) / 10);
    }
}

export function addImage(node, src) {
    node.children[0].src = src;
}

export function addTag(node, tag) {
    node.className = `tag ${TAG_COLORS[tag]}`;
    node.innerHTML = TAG_NAMES[tag];
}

export function addStatistic(node, likesCount, commentsCount) {
    const likes = makeFriendlyNumber(likesCount);
    node.children[0].innerHTML = `<img src="./public/heart.svg" alt=""> ${likes}`;
    const comments = makeFriendlyNumber(commentsCount);
    node.children[1].innerHTML = `<img src="./public/comments.svg" alt=""> ${comments}`;
}