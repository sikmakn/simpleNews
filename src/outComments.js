import {addSubComment, allComments, loggedUser, updateComment, updateSubComment} from "./backend.js";
import {switchDisplay} from "./helpers.js";

const commentContainer = document.getElementById("comment-container");

export default function outComments(newsId) {
    cleanContainer(commentContainer);
    cleanContainer(commentContainer.children[0].children[1].children[4]);
    const comments = allComments.filter(c => c.newsId === newsId);//fetch
    comments.forEach(comment => {
        const copy = configComment(comment, commentContainer, redactCommentHandler,
            () => answerHandler(comment.id, copy.children[1].children[5]));
        configHideShowButton(copy.children[1]);
        const subCommentContainer = copy.children[1].children[4];
        comment.subComments?.forEach(subComment => {
            const subCommentCopy = configComment(subComment, subCommentContainer, redactSubComment,
                () => answerHandler(comment.id, copy.children[1].children[5]));
            subCommentContainer.appendChild(subCommentCopy);
        });
        commentContainer.appendChild(copy);
    });
}

function answerHandler(newsId, answerNode) {
    answerNode.style.display = "block";
    answerNode.children[1].children[2].onclick = () => {
        const text = answerNode.children[1].children[1].value;
        answerNode.children[1].children[1].value = "";
        addSubComment(newsId, text, loggedUser);
        answerNode.style.display = "none";
        outComments(newsId);
    };
}

function redactCommentHandler({id, node}) {
    let isEditable = false;
    node.children[1].children[2].onclick = () => {
        if (!isEditable) {
            console.log(node.children)
            node.children[1].children[1].setAttribute("contentEditable", "true");
            node.children[1].children[2].innerHTML = "Сохранить";
        } else {
            node.children[1].children[1].removeAttribute("contentEditable");
            const text = node.children[1].children[1].innerText;
            updateComment(id, text);
            configText(node.children[1].children[1], null, text);
            node.children[1].children[2].innerHTML = "Редактировать";
        }
        isEditable = !isEditable;
    }
}


function redactSubComment({id, answerTo, node}) {
    let isEditable = false;
    node.children[1].children[2].onclick = () => {
        if (!isEditable) {
            node.children[1].children[1].setAttribute("contentEditable", "true");
            node.children[1].children[2].innerHTML = "Сохранить";
        } else {
            node.children[1].children[1].removeAttribute("contentEditable");
            const text = node.children[1].children[1].innerText;
            updateSubComment(id, text);
            configText(node.children[1].children[1], answerTo, text);
            node.children[1].children[2].innerHTML = "Редактировать";
        }
        isEditable = !isEditable;
    }
}

function configHideShowButton(contentContainer) {
    const showContent = '<img src="./public/down-arrow.svg" alt="">Показать все ответы';
    const hideContent = '<img src="./public/up-arrow.svg" alt="">Скрыть все ответы';
    const hideShowButton = contentContainer.children[3];
    const subCommentContainer = contentContainer.children[4];
    subCommentContainer.style.display = "none";
    hideShowButton.innerHTML = showContent;
    hideShowButton.onclick = () => {
        switchDisplay(subCommentContainer);
        hideShowButton.innerHTML = subCommentContainer.style.display === "none" ?
            showContent : hideContent;
    }
}

function cleanContainer(node) {
    const comment = node.children[0].cloneNode(true);
    node.innerHTML = '';
    node.appendChild(comment)
}

function configComment({user, id, text, commentId, answerTo}, node, redactHandler, answerHandler) {
    const copy = node.children[0].cloneNode(true);
    copy.style.display = "flex";
    copy.id = id;
    copy.children[0].src = user.img;
    const contentContainer = copy.children[1];
    if (user.id === loggedUser.id) {
        configCommentBehavior(contentContainer, "Я", "Редактировать",
            () => redactHandler({id, node:copy, answerTo}));
    } else {
        configCommentBehavior(contentContainer, user.username, "Ответить", answerHandler);
    }
    configText(contentContainer.children[1], answerTo, text);
    return copy;

    function configCommentBehavior(contentContainer, username, buttonName, onclickCb) {
        contentContainer.children[0].innerText = username;
        contentContainer.children[2].innerText = buttonName;
        contentContainer.children[2].onclick = onclickCb;
    }
}

function configText(textContainer, answerTo, text) {
    textContainer.innerHTML = "";
    if (answerTo) textContainer.innerHTML =
        `<span class="answer-reference" id="${answerTo.userId}">@${answerTo.username}</span>`;
    textContainer.append(text);
}
