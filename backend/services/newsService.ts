import connection from '../db/connection';
import OneNews from '../db/models/OneNews';
import {Tag} from '../types';
import Like from '../db/models/Like';
import Comment from '../db/models/Comment';
import SubComment from '../db/models/SubComment';
import {Sequelize} from 'sequelize-typescript';

const newsRepository = connection.getRepository(OneNews);
const likeRepository = connection.getRepository(Like);
const commentRepository = connection.getRepository(Comment);
const subCommentRepository = connection.getRepository(SubComment);

export function create(
    {img, ...newsParams}:
        {
            img: File
            tag: string
            title: string
            text: string
            authorId: string
        }) {
    //todo img to aws
    return newsRepository.create({
        ...newsParams,
        date: new Date(Date.now()),
        imgSrc: 'https://ktonanovenkogo.ru/image/priroda-gora.jpg',
    });
}

export function update(
    {id, img, ...newsParams}:
        {
            id: string
            img: File
            tag: string
            title: string
            text: string
        }) {
    //todo img to aws
    return newsRepository.update(newsParams, {where: {id}});
}

export async function findMany(
    {tag, from = 0, to = 10, username}:
        {
            from?: number
            to?: number
            tag?: Tag
            username?: string
        }) {
    const parameters: any = {
        offset: from,
        limit: to,
    };
    if (tag) parameters.where = {tag};
    return newsRepository.findAll({
        ...parameters,
        ...findAttributes(username),
    });
}

export async function findOne(
    {id, userId}: {
        id: string
        userId?: string
    }) {
    return await newsRepository.findOne({
        where: {id},
        ...findAttributes(userId)
    });
}

function findAttributes(userId?: string) {
    const userAttr: any[] = [];
    if (userId)
        userAttr.push(
            [Sequelize.fn('count', Sequelize.literal(`likes.oneNewsId and likes.userId=\'${userId}\'`)), 'userLikesCount'],
            [Sequelize.fn('count', Sequelize.literal(`comments.id and comments.authorId=\'${userId}\'`)), 'userCommentsCount'],
            [Sequelize.fn('count', Sequelize.col(`subComments.id and subComments.authorId=\'${userId}\'`)), 'userSubCommentsCount'],
        );
    return {
        attributes: [
            'id', 'title', 'text', 'date', 'imgSrc', 'tag',
            [Sequelize.fn('count', Sequelize.literal('likes.oneNewsId')), 'likesCount'],
            [Sequelize.fn('count', Sequelize.col('comments.id')), 'commentsCount'],
            [Sequelize.fn('count', Sequelize.col('subComments.id')), 'subCommentsCount'],
            ...userAttr
        ],
        include: [
            {model: likeRepository},
            {model: commentRepository},
            {model: subCommentRepository},
        ],
    };
}